# 🎨 PART 3: HOLO DECK (GIAO DIỆN ĐIỀU KHIỂN)

> **Mục tiêu:** Code trang Admin hiển thị chat đẹp như phim viễn tưởng.  
> **Công cụ:** Dùng cái gì cũng được như React, Vue, Tailwind CSS, Lucide Icons.  
> **Thời gian:** 20 phút

---

## 🧐 1. PHONG CÁCH THIẾT KẾ (VISUAL STYLE)

Chúng ta theo đuổi style **"War Room Cyberpunk"**:
*   **Màu nền:** `bg-[#020617]` (Đen sâu thẳm vũ trụ).
*   **Hiệu ứng:** Glassmorphism (Kính mờ), Neon Glow (Phát sáng).
*   **Font:** Monospace cho các thông số kỹ thuật.

---

## 💻 2. CODE TRIỂN KHAI (COPY-PASTE READY)

Tạo file: `theo ý bạn muốn đặt tên`

```tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { createClient } from 'database_url';
import { Send, Cpu, Shield, Zap, User } from 'lucide-react';

// Cấu hình Supabase Client (Frontend)
const supabase = createClient(
    // Thay thế bằng Database của bạn - cái này cấu hình để gọi database
    // NEXT_PUBLIC_SUPABASE_URL
    // NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// PHẦN DƯỚI ĐÂY LÀ CODE MẪU ĐỂ TRIỂN KHAI - BẠN CÓ THỂ DÙNG CÁCH KHÁC
export default function WarRoomPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Init Session (Tạo hoặc lấy session mới nhất)
  useEffect(() => {
    async function initSession() {
      // Tìm session active gần nhất
      const { data } = await supabase
        .from('council_sessions')
        .select('id')
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (data) {
        setSessionId(data.id);
      } else {
        // Tạo mới nếu chưa có
        const { data: newSession } = await supabase
          .from('council_sessions')
          .insert({ title: 'New War Room Session' })
          .select()
          .single();
        if (newSession) setSessionId(newSession.id);
      }
    }
    initSession();
  }, []);

  // 2. Real-time Subscription (Hứng tin nhắn mới) - CÓ THỂ LÀM KIỂU KHÁC
  useEffect(() => {
    if (!sessionId) return;

    // Load tin nhắn cũ
    supabase
      .from('council_messages')
      .select('*')
      .eq('session_id', sessionId)
      .order('timestamp', { ascending: true })
      .then(({ data }) => setMessages(data || []));

    // Lắng nghe tin nhắn mới
    const channel = supabase
      .channel('war-room-chat')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'council_messages' }, (payload) => {
        setMessages((prev) => [...prev, payload.new]);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [sessionId]);

  // Auto scroll
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 3. Gửi tin nhắn
  const handleSend = async () => {
    if (!input.trim() || !sessionId) return;
    setLoading(true);
    const msg = input;
    setInput('');

    // Gọi API Backend (Phần não đã code ở Part 2)
    await fetch('/api/council/chat', {
      method: 'POST',
      body: JSON.stringify({ sessionId, message: msg, targetRole: 'architect' }), // Mặc định gọi Architect
    });

    setLoading(false);
  };

  return (
    <div className="flex h-screen bg-[#020617] text-white font-sans overflow-hidden">
      {/* SIDEBAR (Member Grid) */}
      <div className="w-64 border-r border-white/10 bg-black/20 p-6 flex flex-col gap-6">
        <h1 className="text-xl font-black tracking-widest text-cyan-500 uppercase">War Room</h1>
        
        {/* Members */}
        <div className="space-y-4">
          <MemberCard icon={User} name="Tiểu Thư" role="Overseer" color="text-pink-400" status="Online" />
          <MemberCard icon={Cpu} name="Architect" role="Thinking..." color="text-blue-400" status={loading ? "Computing" : "Idle"} />
          <MemberCard icon={Shield} name="Challenger" role="Critic" color="text-red-400" status="Idle" />
          <MemberCard icon={Zap} name="Reviewer" role="Polisher" color="text-green-400" status="Idle" />
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 flex flex-col relative">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-4 rounded-2xl border backdrop-blur-md ${
                msg.role === 'user' 
                  ? 'bg-pink-500/10 border-pink-500/20 text-pink-100 rounded-tr-none' 
                  : 'bg-blue-500/5 border-blue-500/10 text-gray-200 rounded-tl-none'
              }`}>
                <div className="text-[10px] font-bold uppercase tracking-wider mb-1 opacity-50 flex justify-between">
                  <span>{msg.name}</span>
                  <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
                </div>
                <div className="whitespace-pre-wrap leading-relaxed text-sm">{msg.content}</div>
              </div>
            </div>
          ))}
          <div ref={scrollRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="flex gap-4 max-w-4xl mx-auto">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ra lệnh cho Hội Đồng..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-600"
              disabled={loading}
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/50 px-6 rounded-xl font-bold uppercase tracking-wider transition-all disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component con cho gọn
function MemberCard({ icon: Icon, name, role, color, status }: any) {
  return (
    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
      <div className={`p-2 rounded-lg bg-black/40 ${color}`}>
        <Icon size={18} />
      </div>
      <div>
        <div className={`text-sm font-bold ${color}`}>{name}</div>
        <div className="text-[10px] text-gray-500 uppercase tracking-wider">{role}</div>
      </div>
      <div className={`ml-auto w-1.5 h-1.5 rounded-full ${status === 'Computing' ? 'bg-yellow-400 animate-pulse' : 'bg-gray-600'}`}></div>
    </div>
  );
}
```

---

## 🎨 3. MẸO TRANG TRÍ (DECORATION TIPS)

*   **Custom Scrollbar:** Thêm CSS để thanh cuộn trông mỏng và đẹp hơn.
*   **Animations:** Dùng `framer-motion` để tin nhắn trượt từ dưới lên (`initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}}`).

> **Xong phần xác!** Giờ chuyển sang **PART 4** để kiểm tra động cơ trước khi bay. 🚀
