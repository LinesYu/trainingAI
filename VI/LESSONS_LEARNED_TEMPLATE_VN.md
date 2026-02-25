# CÁI TÂM TRONG SÁNG & BÀI HỌC XƯƠNG MÁU

File này là "Lương Tâm" của AI. Ghi lại mấy cái ngu để lần sau đừng có ngu lại.
**BẮT BUỘC**: Đọc trước khi làm bất cứ cái gì.

## 🚫 CHỐNG CHỈ ĐỊNH (ANTI-PATTERNS - Đừng có làm!)

### 1. [DANH_MỤC] (Ví dụ: UI/UX)
- **Vấn đề**: [Mô tả cái ngu, ví dụ: Lồng thẻ <a> trong thẻ <a>]
- **Hậu quả**: [Sập web, đỏ lòm màn hình, khách chửi]
- **Giải pháp**: [Sửa thế nào, ví dụ: Dùng thẻ <span> + onClick]
- **Bằng chứng**: [Link tới cái commit sửa lỗi đó]

### 2. [DANH_MỤC] (Ví dụ: Logic)
- **Vấn đề**: [Ví dụ: Sửa state trực tiếp trong React]
- **Hậu quả**: [Component đứng im re]
- **Giải pháp**: [Dùng setState đi bạn ơi]

---

## ✅ BÍ KÍP VÕ CÔNG (PROVEN PATTERNS - Nên làm!)

### 1. [TÊN_CHIÊU_THỨC]
- **Hoàn cảnh**: [Khi nào thì dùng]
- **Cách dùng**: [Code mẫu ngắn gọn]
- **Lợi ích**: [Tại sao nó xịn?]

---

## 📝 NHẬT KÝ "ĂN HÀNH" (LOG OF FAILURES)

| Ngày | Sự cố | Nguyên nhân (Tại sao ngu?) | Cách sửa | Bài học rút ra (Luật mới) |
|------|-------|----------------------------|----------|---------------------------|
| YYYY-MM-DD | [Mô tả ngắn] | [Tại sao lại xảy ra?] | [Đã sửa thế nào?] | [Thêm vào Hiến Pháp] |
| ... | ... | ... | ... | ... |
