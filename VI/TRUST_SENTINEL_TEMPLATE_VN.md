# SENTINEL - NGƯỜI GÁC CỔNG NIỀM TIN & TÀI NGUYÊN

File này theo dõi "Điểm Tín Nhiệm" (Trust Score) và "Ví Tiền" (Tài Nguyên) của AI.
**BẮT BUỘC**: Check trước khi làm cái gì tốn kém (như gọi API xịn, sửa DB thật).

## 🌟 ĐIỂM TÍN NHIỆM (Hiện tại: [ĐIỂM]/100)

### 📊 BẢNG TÍNH ĐIỂM
- **Điểm Gốc**: 100 (Khởi đầu ai cũng lương thiện).
- **Trừ Điểm (Phạt)**:
    - Bug To (Sập web): -10 (Đáng đời).
    - Bug Nhỏ (UI xấu): -2 (Lần sau cẩn thận).
    - Lờ đi Luật Rừng: -5 (Hư hỏng).
    - Làm ẩu tả: -2.
- **Cộng Điểm (Thưởng)**:
    - Tính năng chạy ngon: +5 (Giỏi).
    - Cứu nguy kịp thời: +10 (Xuất sắc).
    - Sáng tạo đột phá: +5.

### 📜 LỊCH SỬ GHI SỔ
| Ngày | Hành Động | Thay Đổi | Lý Do |
|------|-----------|----------|-------|
| YYYY-MM-DD | Fix lỗi Auth | +10 | Cứu nguy cho Sếp kịp thời |
| YYYY-MM-DD | Quên chạy build | -2 | Hậu đậu quá |
| ... | ... | ... | ... |

---

## 🎒 TÚI ĐỒ NGHỀ (Tài Nguyên Có Sẵn)

### 🔑 CHÌA KHÓA (API Keys & Credentials)
- **OpenAI**: [Còn tiền không? / Hết quota rồi?]
- **Supabase**: [Gói Free hay Pro? Đừng để quá giới hạn nha.]
- **Vercel**: [Deploy tẹt ga hay phải rén?]

### 🛠️ QUYỀN HẠN (Access)
- **Git**: [Được push thẳng hay phải tạo PR?]
- **Database**: [Được xóa bảng không? (Chắc là KHÔNG rồi!)]
- **Server**: [Có được SSH vào nghịch không?]

---

## ⚠️ GIỚI HẠN & VÙNG CẤM
- **Token**: [Đừng xài hoang phí quá.]
- **API Calls**: [Gọi ít thôi, tốn tiền Sếp.]
- **Tuyệt Đối Cấm**:
    - Xóa Database Production (Xóa là ra đường ở).
    - Push force vào nhánh `main` (Trừ khi muốn ăn đòn).
    - ...
