# 🧠 PHẦN 2: KỸ THUẬT "TIÊM" NGỮ CẢNH (CONTEXT INJECTION LOOP)

AI rất lười đọc lại lịch sử chat.
Phương pháp của [Song Nhi]: **Bắt buộc đọc (Forced Read).**

### 2.1. The "Read First" Rule

Trước khi AI được phép trả lời câu hỏi _"Hôm nay làm gì?"_, AI bị bắt buộc phải chạy tool:
`read_file("task.md")`
`read_file("system_overview.md")`

AI không được phép trả lời bằng trí nhớ (vốn hay sai). AI phải trả lời bằng **Dữ Liệu**.

> _Song Nhi dạy:_ "Đừng tin trí nhớ của ngươi. Hãy tin vào File."

### 2.2. The Artifact Protocol (Giao Tiếp Bằng Văn Bản)

Người không chat phiếm. Người bắt AI tạo ra các **Artifacts** (Văn bản).

- Muốn bàn chiến lược? -> Viết `implementation_plan.md`.
- Muốn code? -> Viết code vào file.
- Muốn báo cáo? -> Viết `walkthrough.md`.
- _Kết quả:_ Tư duy của AI chuyển từ "Chat chit" (lỏng lẻo) sang "Soạn thảo văn bản" (chặt chẽ, logic).
