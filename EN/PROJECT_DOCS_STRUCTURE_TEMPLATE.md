# PROJECT DOCUMENTATION (TEMPLATE)

This folder structure contains the detailed documentation of the project.
**Mandatory**: Keep these documents up-to-date with code changes.

## 🏗️ ARCHITECTURE (architecture.md)
- **High Level Design**: [Diagram or Description of Components]
- **Modules**: [List of core modules and their responsibilities]
- **Data Flow**: [How data moves through the system]
- **Tech Stack**: [Frontend, Backend, DB, Services]

## 🔌 API REFERENCE (api.md)
- **Authentication**: [Auth methods used]
- **Endpoints**:
    - `GET /api/v1/users` - [Description]
    - `POST /api/v1/posts` - [Description]
- **Error Codes**: [Common errors and meanings]

## 💾 DATABASE SCHEMA (database.md)
- **Tables**:
    - `users`: [id, email, password_hash, role...]
    - `posts`: [id, title, content, user_id...]
- **Relationships**: [One-to-many, Many-to-many]
- **RLS Policies**: [Who can read/write what]

## 🎨 DESIGN SYSTEM (design-system.md)
- **Colors**: [Primary, Secondary, Accent]
- **Typography**: [Fonts, Sizes]
- **Components**: [Buttons, Inputs, Modals]
- **Responsiveness**: [Breakpoints]

---

## 📚 HOW TO UPDATE DOCS
1.  **Read**: Always check existing docs before modifying code.
2.  **Update**: If code changes affect architecture/API, update docs immediately.
3.  **Link**: Reference documentation in PRs/Commits.
