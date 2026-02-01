# ✅ PART 4: FINAL CHECK (KIỂM TRA & SỬA LỖI)

> **Mục tiêu:** Đảm bảo hệ thống hoạt động trơn tru.  
> **Công cụ:** Browser Developer Tools (F12).  
> **Thời gian:** 5 phút.

---

## 📋 1. CHECKLIST TRIỂN KHAI

Đánh dấu vào các mục bạn đã làm:

- [ ] **Data:** Đã chạy SQL script tạo 2 bảng trong database.
- [ ] **Backend:** Đã tạo file `route.ts` trong `app/api/council/chat`.
- [ ] **Env:** Đã kiểm tra file `.env.local` có DATABASE BẠN DÙNG.
- [ ] **Frontend:** Đã tạo file `page.tsx` để có giao diện người dùng.
- [ ] **Test:** Đã thử gửi một tin nhắn và thấy "Architect" trả lời lại.

---

## 🐞 2. SỬA LỖI THƯỜNG GẶP (TROUBLESHOOTING)

### Lỗi 1: Tin nhắn gửi đi nhưng không thấy hiện lên?
*   **Nguyên nhân:** Real-time subscription của database bị chặn hoặc chưa bật Replication.
*   **Cách sửa:**
    1.  KIỂM TRA LẠI DATABASE ĐÃ ĐỦ CHƯA?
    2.  CODE ĐÃ ĐÚNG CHƯA?
    3.  TẮT RÒI MỞ LẠI

### Lỗi 2: API trả về 500 Internal Server Error?
*   **Nguyên nhân:** Thường do thiếu GỌI DATABASE hoặc code backend bị sai cú pháp.
*   **Cách sửa:**
    1.  Xem Terminal chạy kiểm tra lỗi để đọc log lỗi chi tiết.
    2.  Check lại tên biến trong `.env.local`.

### Lỗi 3: Giao diện bị vỡ, không giống ảnh?
*   **Nguyên nhân:** Thiếu thư viện nào đó chưa có thêm hoặc chưa config đúng.
*   **Cách sửa:**
    *   Chạy cài đặt thư viện cần thiết.
    *   Đảm bảo rằng thư viện đã được import đúng trong file `page.tsx`.

---

## 🚀 3. LỜI KHUYÊN NÂNG CAO (PRO TIPS)

1.  **Stream Response:** Thay vì đợi AI nghĩ xong mới trả lời (loading lâu), hãy dùng kỹ thuật Streaming để chữ hiện ra từ từ như người gõ phím.
2.  **Context Memory:** Hiện tại code mẫu chỉ gửi tin nhắn mới nhất. Muốn AI nhớ ngữ cảnh, hãy query 5-10 tin nhắn gần nhất từ DB và gửi kèm trong `messages` array lên API.
3.  **Voice Mode:** Tích hợp `Web Speech API` để ra lệnh bằng giọng nói (như Jarvis).

---

## 🎉 LỜI KẾT (CONCLUSION)

Chúc mừng Chỉ huy! Bạn đã tạo thành công **War Room**.
Giờ đây, bạn không còn code một mình nữa. Bạn có cả một hội đồng AI (dù hiện tại có thể đang chạy bằng "cơm" hoặc mock data) luôn túc trực bên cạnh.

> **Sứ mệnh hoàn thành.** Hãy xóa folder này nếu bạn muốn phi tang bằng chứng, hoặc giữ lại làm kỷ niệm.
> *End of Transmission.* 📡
