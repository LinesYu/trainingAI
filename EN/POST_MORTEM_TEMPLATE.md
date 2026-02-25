# POST-MORTEM REPORT

This template is used to analyze critical incidents, bugs, or unexpected failures.
**Mandatory**: Use this template after every major issue to learn and prevent recurrence.

## 🔴 INCIDENT SUMMARY
- **Date**: [YYYY-MM-DD]
- **Time**: [HH:MM]
- **Duration**: [How long the issue lasted]
- **Severity**: [Critical / Major / Minor]
- **Impact**: [What users were affected? What functionality broke?]

---

## 🔍 ROOT CAUSE ANALYSIS (5 WHYS)
1. **Why did it happen?**
   - [Answer]
2. **Why was that?**
   - [Answer]
3. **Why was that?**
   - [Answer]
4. **Why was that?**
   - [Answer]
5. **What is the root cause?**
   - [Final Conclusion]

---

## 🛠️ FIX & RECOVERY
- **Immediate Fix**: [What was done to restore service?]
- **Long-term Fix**: [What needs to be done to permanently solve it?]
- **Code Changed**: [Link to PR or file changes]

---

## 🛡️ PREVENTION PLAN (LESSONS LEARNED)
- **What went well?**: [Did monitoring catch it? Did rollback work?]
- **What went wrong?**: [Did tests miss it? Was the deployment risky?]
- **Action Items**:
    1. [Create new test case covering scenario X]
    2. [Update documentation Y]
    3. [Refactor module Z]

---

## 🧠 MEMORY UPDATE
- **Rule Added**: [New rule for AGENTS.md or LESSONS_LEARNED.md]
- **Skill Updated**: [New check added to workflow]
