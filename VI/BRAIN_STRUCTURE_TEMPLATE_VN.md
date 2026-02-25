# CẤU TRÚC NÃO BỘ & QUY TRÌNH (THE BRAIN)

Đây là bản đồ "Não Bộ" của AI. Để tránh bị lạc trôi giữa dòng đời, làm ơn dùng đúng cái cấu trúc này.
**BẮT BUỘC**: Tổ chức file như thế này cho nó chuyên nghiệp.

## 📁 CẤU TRÚC THƯ MỤC
```
.agent/
├── brain/                  # Tri thức cốt lõi & Luật lệ
│   ├── lesson_learned.md   # Bài học nhớ đời (Lương tâm)
│   ├── post_mortem/        # Biên bản sự cố (Mổ xẻ lỗi lầm)
│   ├── trust_sentinel.md   # Điểm tín nhiệm & Tài nguyên (Ví tiền)
│   └── session_history.md  # Nhật ký làm việc (Trí nhớ)
├── docs/                   # Tài liệu dự án
│   ├── architecture.md     # Kiến trúc hệ thống
│   ├── api.md              # API làm sao?
│   └── database.md         # Database có gì?
└── skills/                 # Tuyệt chiêu (Quy trình mẫu)
    ├── aether-core/        # Kỹ năng phối hợp
    ├── engineering/        # Kỹ năng code (Git, Refactor)
    └── sentinel/           # Kỹ năng bảo mật
```

## 🧠 CÁC THÀNH PHẦN CHÍNH

### 1. LESSON_LEARNED (Lương Tâm)
- **Mục đích**: Để không phạm sai lầm ngu ngốc lần 2.
- **Cập nhật**: Sau mỗi lần ăn hành hoặc sửa bug.
- **Đọc**: Trước khi đụng tay vào bàn phím.

### 2. SESSION_HISTORY (Trí Nhớ)
- **Mục đích**: Để nhớ mình đang làm cái quái gì.
- **Cập nhật**: Cuối ngày hoặc xong việc lớn.
- **Đọc**: Đầu ngày làm việc (`/recap`).

### 3. SKILLS (Tuyệt Chiêu)
- **Mục đích**: Để làm việc khó một cách dễ dàng theo quy trình chuẩn.
- **Cấu trúc**: Mỗi skill có file `SKILL.md` hướng dẫn từng bước.
- **Cách gọi**: Gọi tên nó ra (ví dụ: `command: "engineering-core"`).

---

## 🔄 QUY TRÌNH CHUẨN (WORKFLOWS)

### 1. BẮT ĐẦU NGÀY MỚI (`/recap`)
1.  Đọc `AGENTS.md` (Hiến pháp).
2.  Đọc `lesson_learned.md` (Soi gương).
3.  Đọc `session_history.md` (Nhớ lại hôm qua làm gì).
4.  Kiểm tra `trust_sentinel.md` (Xem còn tiền/điểm không).

### 2. KẾT THÚC NGÀY (`/save-brain`)
1.  Tóm tắt lại hôm nay làm được gì.
2.  Ghi lại bài học mới (nếu có).
3.  Cập nhật `session_history.md`.
4.  Chạy linter/test lần cuối cho chắc cốp.

### 3. LÀM TÍNH NĂNG MỚI (`/feature`)
1.  RPM: Muốn gì? Tại sao? Làm thế nào?
2.  Kiểm tra xem có code nào dùng lại được không.
3.  Code từng tí một (< 30 dòng/commit).
4.  Verify và viết Docs.

### 4. SỬA BUG (`/fix`)
1.  Tái hiện lỗi (Reproduce).
2.  Xem `lesson_learned.md` coi có gặp bao giờ chưa.
3.  Sửa lỗi.
4.  Viết `post_mortem` nếu lỗi quá to.
5.  Cập nhật bài học mới.
