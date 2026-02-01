# 🗄️ PART 1: DATA BUNKER (KHO CHỨA DỮ LIỆU)

> **Mục tiêu:** Tạo nơi lưu trữ các cuộc họp và tin nhắn của Hội Đồng.  
> **Công cụ:** Dùng cái gì cũng được, nhưng mình dùng Postgres.  
> **Thời gian:** 5 phút.

---

## 🧐 1. PHÂN TÍCH CẤU TRÚC (ANATOMY)

Chúng ta cần 2 bảng (Table) đơn giản nhưng mạnh mẽ:

1.  **`council_sessions`**: Giống như folder chứa hồ sơ vụ án. Mỗi vấn đề bạn cần thảo luận là một "Session".
2.  **`council_messages`**: Là các đoạn chat trong hồ sơ đó. Ai nói? Nói gì? Lúc nào?

> **Lưu ý:** Bạn phải tạo sql cần thiết để tạo bảng `council_sessions` và `council_messages` thì **CHÚC MỪNG!** Bạn đã có sẵn 2 bảng này. Nhưng hãy kiểm tra lại cho chắc.

---

## 💻 2. CÂU LỆNH TRIỂN KHAI (SQL COMMANDS)

Copy đoạn code dưới đây và chạy trong SQL hoặc mẫu bảng nào đó bạn thích ( dưới đây dùng Postgres còn bạn dùng cái khác thì chuyển lại)

### A. Tạo bảng `council_sessions`
```sql
-- 1. Tạo bảng Phiên họp (Nếu chưa có)
CREATE TABLE IF NOT EXISTS public.council_sessions (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    title text NOT NULL,              -- Chủ đề (VD: "Đặt tên cho con mèo")
    status text DEFAULT 'active',     -- 'active' (đang bàn) hoặc 'archived' (xong rồi)
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Bật bảo mật (RLS)
ALTER TABLE public.council_sessions ENABLE ROW LEVEL SECURITY;

-- Cho phép ai cũng xem được (Tạm thời để dev cho dễ, sau này siết lại sau)
CREATE POLICY "Public Access Sessions" ON public.council_sessions FOR ALL USING (true);
```

### B. Tạo bảng `council_messages`
```sql
-- 2. Tạo bảng Tin nhắn
CREATE TABLE IF NOT EXISTS public.council_messages (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    session_id uuid REFERENCES public.council_sessions(id) ON DELETE CASCADE,
    role text NOT NULL,               -- 'user', 'architect', 'challenger', 'reviewer'
    name text NOT NULL,               -- Tên hiển thị (VD: "Tiểu Thư", "Architect")
    content text NOT NULL,            -- Nội dung chat
    model text,                       -- AI Model nào đã trả lời (để lòe thiên hạ)
    attachments jsonb DEFAULT '[]',   -- Đính kèm file (nếu cần sau này)
    "timestamp" timestamp with time zone DEFAULT now()
);

-- Bật bảo mật (RLS)
ALTER TABLE public.council_messages ENABLE ROW LEVEL SECURITY;

-- Cho phép ai cũng xem được
CREATE POLICY "Public Access Messages" ON public.council_messages FOR ALL USING (true);
```

---

## 🔎 3. KIỂM TRA (VERIFICATION)

Làm sao biết nó đã chạy ngon? Hãy thử insert một dòng dữ liệu giả (Dummy Data):

```sql
-- Tạo thử một phiên họp giả
INSERT INTO public.council_sessions (title) 
VALUES ('Test War Room Init') 
RETURNING id;

-- (Lấy ID vừa tạo ở trên thay vào chỗ 'SESSION_ID_HERE' bên dưới)
-- INSERT INTO public.council_messages (session_id, role, name, content)
-- VALUES ('SESSION_ID_HERE', 'system', 'Antigravity', 'Hệ thống đã sẵn sàng, thưa Tiểu Thư.');
```

Nếu không báo đỏ lòm lỗi syntax là **NGON!** 🎉

---

## ⚠️ 4. CẢNH BÁO (WARNINGS)

*   **Lỗi thường gặp:** `relation "council_sessions" already exists`.
    *   **Cách sửa:** Kệ nó, nghĩa là bảng đã có rồi. Bạn không cần làm gì cả.
*   **Foreign Key Error:** Khi xóa `session`, các `messages` bên trong cũng phải mất theo (`ON DELETE CASCADE`). Nếu không, DB sẽ đầy rác. Code trên đã xử lý việc này.

> **Xong phần móng nhà!** Giờ chuyển sang **PART 2** để lắp não cho nó. 🧠
