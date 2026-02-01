# 🚀 PART 0: MISSION BRIEF (NHIỆM VỤ KHÔI PHỤC)

> **Mật danh:** Project Phoenix  
> **Mục tiêu:** Tái sinh "Hội Đồng Tối Cao" (The War Room)  
> **Độ khó:** 3/5 (Cần chút kiến thức về Next.js & Supabase)  
> **Thời gian ước tính:** 45 - 60 phút
> **Lưu ý:** Mình dùng Postgres, Next js 16. Nếu bạn dùng MySQL thì phải chuyển lại.

---

## 🧐 1. TẠI SAO BẠN CẦN THỨ NÀY? (THE "WHY")

Hãy tưởng tượng bạn đang bí ý tưởng. Bạn cần:
- Một **Architect** (Kiến trúc sư) để vẽ ra hệ thống.
- Một **Challenger** (Kẻ thách thức) để soi mói tìm lỗi (như sếp khó tính).
- Một **Reviewer** (Người đánh giá) để chốt lại vấn đề cho mượt.

Thay vì mở 3 tab ChatGPT và copy-paste qua lại, **War Room** là nơi 3 nhân cách AI này (được giả lập hoặc gọi API thật) cùng ngồi lại trong một phòng chat, "combat" với nhau để giúp bạn ra quyết định.

> **💡 Pro Tip:** Đây không chỉ là tính năng, đây là **Phong cách sống (Lifestyle)** của một Developer lười biếng nhưng hiệu quả!

---

## 🗺️ 2. BẢN ĐỒ CHIẾN DỊCH (NAVIGATION)

Chúng ta sẽ không làm mọi thứ rối tung lên. Quy trình được chia nhỏ thành 4 phần (Part) như lắp ráp Gundam:

### [PART 1: DATA BUNKER (Kho Chứa Dữ Liệu)](./PART_1_DATA_BUNKER.md)
*   **Nhiệm vụ:** Chuẩn bị Database (Supabase).
*   **Trạng thái:** ✅ Dễ nhất. Chỉ cần copy SQL chạy 1 lần.
*   **Keyword:** `council_sessions`, `council_messages`.

### [PART 2: NEURAL NET (Mạng Thần Kinh)](./PART_2_NEURAL_NET.md)
*   **Nhiệm vụ:** Xây dựng API Backend (Bộ não).
*   **Trạng thái:** 🧠 Cần não to một chút. Xử lý logic AI trả lời.
*   **Keyword:** `NextResponse`, `Mock AI`, `Prompt Engineering`.

### [PART 3: HOLO DECK (Giao Diện Điều Khiển)](./PART_3_HOLO_DECK.md)
*   **Nhiệm vụ:** Code giao diện Frontend (Glassmorphism).
*   **Trạng thái:** 🎨 Chill nhất. Kéo thả CSS cho đẹp.
*   **Keyword:** `Tailwind`, `Framer Motion`, `Chat Bubble`.

### [PART 4: FINAL CHECK (Kiểm Tra Cuối Cùng)](./PART_4_FINAL_CHECK.md)
*   **Nhiệm vụ:** Debug và tận hưởng.
*   **Trạng thái:** 🚀 Phóng tàu!

---

## 🛠️ 3. SƠ ĐỒ HOẠT ĐỘNG (FLOWCHART)

```mermaid
graph TD
    User[👤 Bạn (Tiểu Thư)] -->|Gửi câu hỏi| UI[🖥️ Giao Diện War Room]
    UI -->|POST /api/chat| API[⚙️ Backend Brain]
    
    subgraph "Hội Đồng Tối Cao (The Council)"
        API -->|Triệu hồi| Arc[🧠 Architect (Gemini)]
        API -->|Triệu hồi| Chal[🔥 Challenger (Llama)]
        API -->|Triệu hồi| Rev[✨ Reviewer (GPT-4)]
    end
    
    Arc -->|Phân tích| DB[(🗄️ Supabase)]
    Chal -->|Phản biện| DB
    Rev -->|Tổng hợp| DB
    
    DB -->|Real-time Update| UI
    UI -->|Hiển thị| User
```

---

## ⚠️ 4. QUY TẮC AN TOÀN (SAFETY FIRST)

1.  **Backup là chân ái:** Dù code xịn đến đâu, hãy luôn commit git trước khi làm.
2.  **Đừng sửa trực tiếp trên Production:** Hãy test ở localhost (`npm run dev`).
3.  **Tách biệt:** Folder `special-docs/war-room-recovery` này hoàn toàn độc lập. Bạn có thể xóa nó sau khi làm xong mà không ảnh hưởng gì đến dự án.

> **Sẵn sàng chưa?** Chuyển sang **PART 1** để bắt đầu đào hầm dữ liệu nào! 🚀
