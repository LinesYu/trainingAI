# 🧠 PART 2: NEURAL NET (MẠNG THẦN KINH)

> **Mục tiêu:** Xây dựng API để nhận tin nhắn và giả lập (hoặc gọi thật) các AI trả lời.  
> **Công cụ:** Dùng cái gì cũng được nhưng mình dùng Next.js API Routes (`app/api/...`).  
> **Thời gian:** 15 phút.

---

## 🧐 1. LOGIC VẬN HÀNH (THE BRAINWAVE)

Chúng ta không muốn code cứng ngắc. Chúng ta cần một "Bộ não trung tâm" biết phân vai:
1.  **Nhận lệnh:** User chat "Hãy phân tích feature X".
2.  **Lưu:** Ghi vào DB.
3.  **Suy nghĩ:**
    *   Nếu User tag `@Architect` -> Chỉ Architect trả lời.
    *   Nếu hỏi chung -> Cả hội đồng cùng nhảy vào (Chaos mode!).
4.  **Trả lời:** AI phản hồi và lưu lại vào DB.

---

## 💻 2. CODE TRIỂN KHAI (COPY-PASTE READY) - MÌNH DÙNG NEXT JS CÒN DÙNG BẠN CODE KIỂU KHÁC THÌ CHUYỂN LẠI

Tạo file: `app/api/council/chat/route.ts`

```typescript
import { NextResponse } from 'next/server';
import { createClient } from 'DATABASE_URL'; // DÙNG DATABASE CỦA BẠN

// 1. Config Supabase (Dùng Service Role để quyền lực tối thượng)
const supabase = createClient(
    // DÙNG DATABASE CỦA BẠN, KẸP CÁC ENV VARIABLE NÀO ĐÓ THEO ĐIỀU HÀNH CỦA BẠN
);

// 2. Định nghĩa các nhân cách (Personas)
const PERSONAS = {
  architect: {
    name: 'Architect',
    style: 'Logic, hệ thống, cấu trúc. Dùng nhiều bullet point.',
    model: // DÙNG MODEL CỦA BẠN
  },
  challenger: {
    name: 'Challenger',
    style: 'Phản biện, tìm rủi ro, gay gắt. Luôn hỏi "Tại sao?".',
    model: // DÙNG MODEL CỦA BẠN
  },
  reviewer: {
    name: 'Reviewer',
    style: 'Tổng hợp, nhẹ nhàng, chốt đơn. Tập trung vào UX.',
    model: // DÙNG MODEL CỦA BẠN
  }
};
// BẠN CÓ THÊM CÁC ROLE THÊM NÀO THÌ THÊM VÀO ĐÂY, CÓ THÊM QUEST, GIỚI HẠN TỪ NGỮ, TÍNH CÁCH ĐIỀU HÀNH

// 3. Hàm giả lập AI (Mock AI) - Dùng khi chưa có API Key xịn
// Sau này giàu thì thay hàm này bằng fetch tới API của mô hình AI
async function generateAIResponse(role: string, userMessage: string) {
  // Giả vờ suy nghĩ 1-2 giây
  await new Promise(resolve => setTimeout(resolve, 1500));

  const persona = PERSONAS[role as keyof typeof PERSONAS];
  return `[${persona.model} Thinking]: Dựa trên yêu cầu "${userMessage}", tôi đề xuất...\n\n(Đây là nội dung giả lập từ ${persona.name}. Hãy tích hợp API thật để thông minh hơn!)`;
}

// 4. Main Handler - Nhận tin nhắn, gọi AI, lưu vào DB - ĐÂY LÀ MẪU CÓ THỂ LÀM THEO Ý BẠN
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sessionId, message, targetRole = 'architect' } = body;

    // A. Lưu tin nhắn của User - DÙNG TABLE CỦA BẠN, THIẾT KẾ THEO Ý BẠN
    const { error: saveError } = await supabase.from('council_messages').insert({
      session_id: sessionId,
      role: 'user',
      name: 'Tiểu Thư',
      content: message
    });

    if (saveError) throw saveError;

    // B. Gọi AI trả lời (Ở đây đang gọi 1 role, có thể loop để gọi cả 3) - DÙNG MODEL CỦA BẠN
    const aiContent = await generateAIResponse(targetRole, message);

    // C. Lưu câu trả lời của AI - DÙNG TABLE CỦA BẠN, THIẾT KẾ THEO Ý BẠN
    const { error: aiSaveError } = await supabase.from('council_messages').insert({
      session_id: sessionId,
      role: targetRole,
      name: PERSONAS[targetRole as keyof typeof PERSONAS].name,
      content: aiContent,
      model: PERSONAS[targetRole as keyof typeof PERSONAS].model
    });

    if (aiSaveError) throw aiSaveError;

    return NextResponse.json({ success: true });

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
```

---

## 🔌 3. NÂNG CẤP LÊN "HÀNG THẬT" (REAL AI UPGRADE)

Muốn nó khôn thật? Hãy sửa hàm `generateAIResponse` để gọi API của mô hình AI của bạn.

```typescript
// Ví dụ với Google Generative AI (Cần cài package: npm install @google/generative-ai)
/*
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

async function generateAIResponse(role: string, userMessage: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const prompt = `Bạn là ${role}. Hãy trả lời câu hỏi: ${userMessage}`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}
*/
```

---

## ⚠️ 4. CẢNH BÁO (WARNINGS)

*   **Timeout:** Mô hình AI có thể suy nghĩ lâu hơn 10s. Nếu AI suy nghĩ lâu quá sẽ bị lỗi `504 Gateway Timeout`.
    *   **Fix:** Dùng `Edge Runtime` hoặc giả lập `Stream` (phức tạp hơn, để sau).
*   **Env Vars:** Nhớ kiểm tra file `.env.local` đã có các API KEY của mô hình AI chưa nhé. Không có là API "mù" đấy.

> **Xong phần não!** Giờ chuyển sang **PART 3** để vẽ cái mặt tiền (UI) cho đẹp trai nào. 🎨
