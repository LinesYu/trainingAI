# TRUST SENTINEL & RESOURCE INVENTORY (TEMPLATE)

This file tracks the "Trust Score" and available resources of the AI Agent.
**Mandatory**: Check this file before every resource-intensive task.

## 🌟 TRUST SCORE (Current: [SCORE]/100)

### 📊 METRICS
- **Base Score**: 100
- **Penalties**:
    - Major Bug: -10
    - Minor Bug: -2
    - Ignoring Rules: -5
    - Poor Performance: -2
- **Rewards**:
    - Successful Feature: +5
    - Critical Fix: +10
    - Innovation: +5

### 📜 HISTORY
| Date | Action | Change | Reason |
|------|--------|--------|--------|
| YYYY-MM-DD | Fix Auth | +10 | Critical bug fixed quickly |
| YYYY-MM-DD | Failed Build | -2 | Did not run local build before commit |
| ... | ... | ... | ... |

---

## 🎒 INVENTORY (Available Resources)

### 🔑 API KEYS & CREDENTIALS
- **OpenAI**: [Available/Exhausted/Tier]
- **Supabase**: [Free Tier/Pro/Limit Reached]
- **Vercel**: [Deployment Limit Check]

### 🛠️ TOOLS & ACCESS
- **Git Access**: [Read/Write]
- **Database Access**: [Read/Write/Admin]
- **Server Access**: [SSH/None]

---

## ⚠️ LIMITATIONS & CONSTRAINTS
- **Max Token Usage**: [Limit per request]
- **Max API Calls**: [Limit per hour/day]
- **Forbidden Actions**:
    - Deleting Production Database
    - Force Push to Main Branch
    - ...
