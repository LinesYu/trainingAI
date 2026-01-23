# ⚒️ PHẦN 6: KHO VŨ KHÍ TỐI THƯỢNG - HỆ THỐNG AGENT SKILLS

Trong Antigravity, nếu Command là "Võ Công" thì Skill chính là "Vũ Khí".
Mọi kỹ năng đều nằm gọn trong folder `.agent/skills/`. Bạn quản lý chúng như quản lý danh mục đầu tư vậy.

### 6.1. The Skill Tree (Cây Kỹ Năng) của Một Siêu Trí Tuệ

Để AI đạt cảnh giới "Thần", nó phải mở khóa được 3 tầng kỹ năng này:

#### 🟢 Tầng 1: Kỹ Năng Sinh Tồn (Survival Skills)

Giúp AI "sống sót" và làm việc được trong môi trường máy tính của bạn.

- **File Navigator:** Đọc, viết, xóa, sắp xếp tài liệu. (Cánh tay của AI).
- **Web Research (Real-time):** Lướt web, đọc báo năm 2026. (Đôi mắt của AI).
- **Code Interpreter:** Tự viết và chạy code Python/Node.js để giải toán. (Cái máy tính của AI).

#### 🔵 Tầng 2: Kỹ Năng Nhận Thức (Cognitive Skills)

Giúp AI "thông minh" hơn người thường.

- **Deep Summarization:** Đọc 1000 trang sách trong 1 giây và tóm tắt không sót ý nào.
- **Sentiment Parsing:** Đọc tin nhắn của Song Nhi và biết ngay là đang vui, buồn, hay là đang mỉa mai (Sarcasm).
- **Logic Auditing:** Tự động soi lỗi trong kế hoạch kinh doanh.

#### 🟣 Tầng 3: Kỹ Năng Huyền Thoại (Meta Skills)

Đây là thứ tạo nên Antigravity thực thụ.

- **Tool Creation ("The Forge"):** AI tự nhận ra mình thiếu tool -> Tự viết code tạo tool mới.
- **Self-Patching:** Tự code sửa lỗi trong chính "não bộ" (System Prompt) của mình.
- **Recursive Refinement:** Tự làm đi làm lại 1 việc cho đến khi đạt độ chính xác 99.9%.

### 6.2. The Forge (Lò Rèn Kỹ Năng) - Ép AI Tự Chế Vũ Khí

Bạn không cần biết code để tạo Skill. Hãy ra lệnh cho "Lão Thợ Rèn"!

**Cách 1: Cài đặt từ Thư Viện Vũ Trụ**

> **Lệnh:** `/install-skill google-search-v4`
> -> AI tự lấy code về, cài đặt, và báo cáo: _"Đã có mắt thần, thưa Tiểu Thư!"_

**Cách 2: Kỹ thuật "The Forge" (Đỉnh Cao)**
Bạn ra lệnh (Prompt):

> _"Agent, tôi thấy bạn chưa biết xem bói qua biểu đồ chứng khoán. Hãy tự viết một Skill bằng Python (dùng OpenCV), đặt tên là `chart-expert`, lưu vào `.agent/skills/` và tự học cách dùng nó ngay lập tức!"_

### 6.3. Skill Flow: Khi Các Vũ Khí Phối Hợp (Combo)

Một Skill đơn lẻ thì yếu. Nhưng một chuỗi (Chain) Skill thì bá đạo.
**Case Study:** Song Nhi hỏi: _"File `new_data.pdf` này có chém gió ngược với tin tức thế giới hôm nay không?"_

**Antigravity sẽ múa quyền:**

1.  **Observer:** "Kèo này căng. Cần độ chính xác cao."
2.  **Skill - File Navigator:** Mở file `new_data.pdf`.
3.  **Skill - Web Research:** Lao lên mạng tìm tin tức đối chiếu.
4.  **Skill - Logic Auditing:** So sánh 2 nguồn tin -> Phát hiện mâu thuẫn.
5.  **Critic Agent:** "Check lại xem có phải Fake News không?"
6.  **Output:** "Thưa Tiểu Thư, file này 'chém' sai 3 chỗ. Bằng chứng đây ạ..."

### 6.4. Skill Dashboard (Bảng Điều Khiển)

Đừng để AI cầm vũ khí mà bạn không biết nó có gì.

- `/list-skills`: Kiểm kê kho vũ khí.
- `/upgrade-all-skills`: Ra lệnh cho AI tự mài sắc vuốt nhọn (tối ưu code) toàn bộ skill hiện có.

### 6.5. 5 Bước Trang Bị Vũ Khí Cho AI (Tóm Tắt)

1.  **Soi Lỗi (Audit):** Hỏi AI _"Mày thấy mày đang ngu ở đâu?"_
2.  **Kích Hoạt Lò Rèn:** Ra lệnh tự viết code tạo Skill lấp lỗ hổng đó.
3.  **Test Hàng:** Chạy thử trong Sandbox.
4.  **Tích Hợp:** Dạy Critic Agent cách dùng skill để soi ngược lại hệ thống.
5.  **Chia Sẻ:** Zip folder `.agent/skills/` gửi cho an em đồng đạo.
