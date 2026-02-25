# BRAIN STRUCTURE & WORKFLOWS (THE BRAIN)

This file explains the structure and usage of the `.agent` directory (The Brain).
**Mandatory**: Use this structure to maintain a consistent AI workflow.

## 📁 FOLDER STRUCTURE
```
.agent/
├── brain/                  # Core Knowledge & Rules
│   ├── lesson_learned.md   # Mistakes to avoid (Conscience)
│   ├── post_mortem/        # Incident reports (Analysis)
│   ├── trust_sentinel.md   # Resource usage & trust score (Resources)
│   └── session_history.md  # Session logs (Memory)
├── docs/                   # Project Documentation
│   ├── architecture.md     # High-level architecture
│   ├── api.md              # API documentation
│   └── database.md         # Database schema
└── skills/                 # Reusable Workflows (Skills)
    ├── aether-core/        # Coordination skills
    ├── engineering/        # Coding skills (Git, Refactor)
    └── sentinel/           # Security/Audit skills
```

## 🧠 CORE COMPONENTS

### 1. LESSON_LEARNED (Conscience)
- **Purpose**: Prevent repeating mistakes.
- **Update**: After every bug fix or refactor that taught a lesson.
- **Read**: Before starting any task.

### 2. SESSION_HISTORY (Memory)
- **Purpose**: Maintain context across sessions.
- **Update**: At the end of every session (`/save-brain`).
- **Read**: At the start of every session (`/recap`).

### 3. SKILLS (Workflows)
- **Purpose**: Standardize complex tasks into repeatable steps.
- **Structure**: Each skill folder contains a `SKILL.md` defining the workflow.
- **Usage**: Invoke skills by name (e.g., `command: "engineering-core"`).

---

## 🔄 STANDARD WORKFLOWS

### 1. START SESSION (`/recap`)
1.  Read `AGENTS.md`.
2.  Read `lesson_learned.md`.
3.  Read the latest entry in `session_history.md`.
4.  Check `trust_sentinel.md` (if applicable).

### 2. END SESSION (`/save-brain`)
1.  Summarize current progress.
2.  Log any new lessons learned.
3.  Update `session_history.md` with current status.
4.  Run linter/tests one last time.

### 3. NEW FEATURE (`/feature`)
1.  Define RPM (Result, Purpose, Massive Action Plan).
2.  Check for existing patterns/components.
3.  Implement atomically (< 30 lines/commit).
4.  Verify and update docs.

### 4. BUG FIX (`/fix`)
1.  Reproduce the issue.
2.  Check `lesson_learned.md` for similar past issues.
3.  Fix the bug.
4.  Write a `post_mortem` if critical.
5.  Update `lesson_learned.md`.
