# CẤU TRÚC TÀI LIỆU DỰ ÁN (BÍ KÍP VÕ CÔNG)

Đây là nơi chứa toàn bộ bí kíp võ công của dự án. Không có nó, dự án sẽ loạn như nồi lẩu.
**BẮT BUỘC**: Code đổi thì tài liệu phải đổi theo. Đừng lười.

## 🏗️ KIẾN TRÚC HỆ THỐNG (architecture.md)
- **Tổng Quan**: [Cái hình vẽ loằng ngoằng mô tả hệ thống]
- **Các Module**: [Module nào làm việc gì? Ai chịu trách nhiệm?]
- **Dòng Chảy Dữ Liệu**: [Data chạy từ đâu tới đâu?]
- **Công Nghệ (Stack)**: [Dùng súng gì? Đạn gì?]

## 🔌 TÀI LIỆU API (api.md)
- **Bảo Mật (Auth)**: [Đăng nhập kiểu gì? JWT hay Cookie?]
- **Các Cổng (Endpoints)**:
    - `GET /api/v1/users` - [Lấy danh sách con nợ]
    - `POST /api/v1/posts` - [Đăng bài chém gió]
- **Mã Lỗi (Error Codes)**: [404 là gì? 500 là gì? (Là toang)]

## 💾 CƠ SỞ DỮ LIỆU (database.md)
- **Bảng (Tables)**:
    - `users`: [id, email, password (hash đi nha), role...]
    - `posts`: [id, title, content, user_id...]
- **Quan Hệ**: [Ai quan hệ với ai? 1-N hay N-N?]
- **Luật Rừng (RLS)**: [Ai được xem cái gì? Ai được sửa cái gì?]

## 🎨 HỆ THỐNG THIẾT KẾ (design-system.md)
- **Màu Sắc**: [Màu chủ đạo là gì? Đừng phối màu "mắm tôm"]
- **Font Chữ**: [Dùng font gì cho sang?]
- **Component**: [Nút bấm, ô nhập liệu, bảng biểu...]
- **Responsive**: [Mobile trước hay Desktop trước?]

---

## 📚 QUY TẮC CẬP NHẬT TÀI LIỆU
1.  **Đọc trước**: Đừng sửa bừa bãi khi chưa hiểu cái cũ.
2.  **Cập nhật ngay**: Code xong là phải sửa doc liền. Đừng để "mai tính".
3.  **Link**: Nhớ dẫn link tài liệu trong PR/Commit để Sếp biết đường mò.
