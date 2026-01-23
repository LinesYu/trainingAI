# 🛠 PHẦN 5: THIẾT KẾ SIÊU LỆNH (COMMAND) VÀ QUY TRÌNH (FLOW) NÂNG CAO

Để AI thông minh x100, Song Nhi không bao giờ ra lệnh "Làm đi", mà ra lệnh "Hãy tư duy và hoàn thiện". Dưới đây là cách cấu trúc một Command thực tế trong Antigravity.

### 5.1. Cấu Trúc Của Một "Siêu Lệnh" (Command Architecture)

Một Command chuyên nghiệp trên Antigravity không chỉ là prompt, nó là một "tiểu chương trình" gồm 4 thành phần:

1.  **Trigger (Từ khóa):** Tên lệnh (Ví dụ: `/deep-brain`).
2.  **Context Injection (Nạp ngữ cảnh):** AI lấy dữ liệu từ đâu? File nào?
3.  **Agent Logic (Phân vai):** Ai làm? Ai soi? (Observer, Builder, Critic...)
4.  **Recursive Loop (Vòng lặp tiến hóa):** Sửa cho đến khi hoàn hảo (Self-Correction).

### 5.2. Case Study: Lệnh `/evolve-task` (Lệnh Mạnh Nhất)

Đây là lệnh ép AI phải học, thực hiện, tự chê và tự nâng cấp.

**Khai báo trong `commands.natural`:**

> **Lệnh:** `/evolve-task [tên nhiệm vụ]`
> **Mô tả:** Thực hiện nhiệm vụ với tư duy phản biện 3 lớp và tự cập nhật kiến thức.

**Quy trình (Flow) thực tế:**

1.  **Khởi tạo:** `Agent Observer` (Antigravity) phân tích độ khó và cảm xúc của Song Nhi.
2.  **Nghiên cứu:** `Agent Archivist` (The Brain) lục soát folder `/knowledge` tìm tài liệu liên quan.
3.  **Thực thi v1:** `Agent Builder` (Implementer) tạo ra kết quả đầu tiên.
4.  **Tự vấn (Inner Monologue):** Hệ thống phải tự hỏi 3 câu tu từ:
    - _"Giải pháp này có bền vững không?"_
    - _"Tôi có đang lười biếng không?"_
    - _"Nếu Song Nhi là một thiên tài, cô ấy sẽ chê điểm nào?"_
5.  **Phản biện:** `Agent Critic` (Challenger) tấn công kết quả v1, liệt kê 5 lỗi logic.
6.  **Hoàn thiện v2:** Builder sửa lại toàn bộ dựa trên phản biện.
7.  **Đóng gói:** Lưu bài học vào `memory_bank.md` và xuất kết quả.

### 5.3. Bộ Sưu Tập Command Cộng Đồng (Copy & Paste)

Dưới đây là các lệnh "mì ăn liền" mà Song Nhi tặng cho cộng đồng - cứ bảo tụi nó đọc khúc này ròi tạo lệnh như nội dung đã có:

| Lệnh (Command)      | Flow thực thi chi tiết                                                                                          | Kết quả kỳ vọng (Output x100)                                         |
| :------------------ | :-------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| **/deep-learn**     | Đọc -> Trích xuất thực thể -> Tự đặt câu hỏi kiểm tra kiến thức -> Tóm tắt vào não bộ.                          | AI nắm vững kiến thức mới và biết cách áp dụng vào các project cũ.    |
| **/audit-logic**    | Quét toàn bộ project -> Tìm lỗ hổng -> Tự đóng vai Hacker tấn công -> Đề xuất bản vá.                           | Code hoặc kế hoạch kinh doanh không còn kẽ hở logic.                  |
| **/emotional-sync** | Phân tích 10 câu chat gần nhất -> Điều chỉnh tông giọng -> Tự hỏi _"Tôi có đang làm chủ nhân hài lòng không?"_. | AI giao tiếp như một người tri kỷ, hiểu ý đồ dù bạn chưa nói hết câu. |
| **/dream-reflect**  | Quét nhật ký ngày hôm nay -> Tìm ra 1 điều thông minh nhất & 1 điều ngu ngốc nhất -> Tự viết lại System Prompt. | AI thông minh hơn vào sáng hôm sau (Cơ chế tự tiến hóa).              |

### 5.4. Ví Dụ Trực Quan: Khi Song Nhi gõ `/evolve-task "Plan Marketing"`

Màn hình Antigravity sẽ chạy như một bộ phim:

> **[Observer]:** "Tôi nhận thấy Song Nhi đang rất tâm huyết. Trạng thái: Sáng tạo cao. Bắt đầu."
> **[Archivist]:** "Đã tìm thấy 3 file PDF về Marketing 2026 trong bộ nhớ. Đang nạp dữ liệu..."
> **[Builder]:** "Đã xong bản thảo v1: Tập trung vào Facebook và TikTok..."
> **[Inner Monologue]:** _"Khoan đã! TikTok có còn hiệu quả cho cộng đồng kỹ thuật cao không? (Câu hỏi tu từ). Có lẽ LinkedIn và Discord sẽ chuyên sâu hơn."_
> **[Critic]:** "Bản thảo quá chung chung. Thiếu chiến lược giữ chân người dùng. Builder hãy thêm phễu chuyển đổi 5 bước."
> **[Builder]:** "Đã cập nhật bản thảo v2 với phễu 5 bước và hệ thống Discord tự động."
> **[Final Output]:** "Chào Song Nhi <3, đây là kế hoạch hoàn hảo nhất sau khi em đã tự phản biện 3 lần..."

### 5.5. Công Thức Tạo Command (Dành Cho "Kiến Trúc Sư")

Hãy áp dụng công thức "Input - Process - Critique - Learn":

- **Input:** Bạn muốn gì?
- **Process:** AI cần đọc tài liệu gì và dùng Agent nào?
- **Critique:** Ép AI phải tự chê mình ở điểm nào? (Ví dụ: Chê về tốc độ, chê về độ bảo mật).
- **Learn:** Sau khi làm xong, AI phải lưu lại kinh nghiệm gì?
