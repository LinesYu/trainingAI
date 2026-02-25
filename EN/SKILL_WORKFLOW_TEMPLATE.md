# SKILL TEMPLATE (e.g., Aether Core, Engineering)

This template defines a reusable skill/workflow for the AI agent.
**Mandatory**: Use this structure for any "Special Engineering Projects" or complex workflows.

## 🎯 SKILL: [SKILL_NAME] (e.g., Aether Core, Sentinel, Engineering)
- **Description**: [Brief description of what this skill does]
- **Command**: `command: "[skill-name]"` (Invoke via `Skill` tool)
- **Purpose**: [Why does this skill exist? What problem does it solve?]

---

## 🛠️ WORKFLOW STEPS (THE PROTOCOL)

### 1. INITIALIZATION (The Setup)
- **Prerequisites**: [What must be done before this skill runs?]
- **Inputs**: [What data or files are needed?]
- **Safety Checks**: [Any validation required?]

### 2. EXECUTION (The Action Plan)
1.  **Step 1: [Action Name]**
    - Description: [Detail of the action]
    - Tool: [Tool used, e.g., `SearchCodebase`, `Write`]
    - Expected Output: [What should happen?]
2.  **Step 2: [Action Name]**
    - ...
3.  **Step 3: [Action Name]**
    - ...

### 3. VERIFICATION (The Quality Gate)
- **Validation**: [How to verify success?]
- **Fallback**: [What if it fails?]

---

## 🧠 CONTEXT & RULES (THE BRAIN)
- **Related Rules**: [Reference to specific rules in AGENTS.md]
- **Common Pitfalls**: [What to watch out for based on `lesson_learned.md`]

---

## 📝 EXAMPLE USAGE
- **User Request**: "[Example user prompt]"
- **Skill Invocation**: `command: "[skill-name]"`
- **Expected Outcome**: [Brief description of the result]
