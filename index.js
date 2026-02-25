#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import ora from 'ora';
import boxen from 'boxen';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TEMPLATE_DIR = __dirname;

// Safe icons for Windows terminals
const ICONS = {
  check: process.platform === 'win32' ? '√' : '✔',
  cross: process.platform === 'win32' ? '×' : '✖',
  pointer: process.platform === 'win32' ? '>' : '➜',
  brain: process.platform === 'win32' ? '[BRAIN]' : '🧠',
  rocket: process.platform === 'win32' ? '[ROCKET]' : '🚀',
  book: process.platform === 'win32' ? '[DOC]' : '📖',
  tool: process.platform === 'win32' ? '[TOOL]' : '🛠️',
  search: process.platform === 'win32' ? '[?]' : '🔍',
  exit: process.platform === 'win32' ? '[X]' : '🚪',
  shield: process.platform === 'win32' ? '[SEC]' : '🛡️',
  folder: process.platform === 'win32' ? '[DIR]' : '📂',
  star: process.platform === 'win32' ? '*' : '⭐',
  info: process.platform === 'win32' ? 'i' : 'ℹ️',
  back: process.platform === 'win32' ? '<' : '⬅️'
};

const LOCALE = {
  VI: {
    welcome: '🧠  HỆ THỐNG KHỞI TẠO BỘ NÃO AI  🧠',
    subtitle: '    Biến trợ lý AI thành Senior Engineer đích thực.',
    mainMenu: {
      message: 'Bạn muốn khám phá điều gì thưa Sếp?',
      choices: [
        { name: `${ICONS.rocket}  Xây dựng Agent ngay (Build Now)`, value: 'build' },
        new inquirer.Separator(),
        { name: `${ICONS.search}  Tìm hiểu: Agents là gì?`, value: 'agents' },
        { name: `${ICONS.brain}  Chi tiết: Cấu trúc Não bộ (.agent/brain)`, value: 'learn_brain' },
        { name: `${ICONS.book}  Chi tiết: Tài liệu Dự án (.agent/docs)`, value: 'learn_docs' },
        { name: `${ICONS.tool}  Chi tiết: Kỹ năng & Quy trình (.agent/skills)`, value: 'learn_skills' },
        { name: `${ICONS.shield}  Chi tiết: Hệ thống Trust & Sentinel`, value: 'trust_sentinel' },
        new inquirer.Separator(),
        { name: `${ICONS.exit}  Thoát (Exit)`, value: 'exit' }
      ]
    },
    brainMenu: {
      message: 'Sếp muốn xem kỹ phần nào của Não Bộ?',
      choices: [
        { name: '📝 lesson_learned.md (Lương Tâm & Kinh Nghiệm)', value: 'lesson_learned' },
        { name: '💾 session_history.md (Trí Nhớ Dài Hạn)', value: 'session_history' },
        { name: '🛡️ trust_sentinel.md (Ví Tiền & Uy Tín)', value: 'trust_sentinel' },
        { name: '💀 post_mortem.md (Biên Bản Sự Cố)', value: 'post_mortem' },
        new inquirer.Separator(),
        { name: `${ICONS.back} Quay lại`, value: 'back' }
      ]
    },
    docsMenu: {
      message: 'Sếp muốn xem cấu trúc tài liệu nào?',
      choices: [
        { name: '🏗️ architecture.md (Kiến Trúc)', value: 'project_docs' },
        new inquirer.Separator(),
        { name: `${ICONS.back} Quay lại`, value: 'back' }
      ]
    },
    skillsMenu: {
      message: 'Sếp muốn xem quy trình nào?',
      choices: [
        { name: '🛠️ SKILL.md (Mẫu Tuyệt Chiêu)', value: 'skill_workflow' },
        new inquirer.Separator(),
        { name: `${ICONS.back} Quay lại`, value: 'back' }
      ]
    },
    fileDetails: {
      agents: {
        title: '📜 AGENTS.md - HIẾN PHÁP AI',
        purpose: 'Văn bản luật cao nhất của dự án. Quy định nhân cách, cách xưng hô và các nguyên tắc cốt lõi.',
        content: `
- ${chalk.yellow('Persona')}: Tên, vai trò, thái độ (Ví dụ: Trung thành, Tận tụy).
- ${chalk.yellow('Constitution')}: Các điều luật bất khả xâm phạm (RPM, Atomic Edits).
- ${chalk.yellow('Protocols')}: Quy trình làm việc chuẩn (Trước - Trong - Sau khi code).`,
        usage: 'AI bắt buộc phải đọc file này ĐẦU TIÊN mỗi khi bắt đầu session mới.'
      },
      lesson_learned: {
        title: '📝 LESSON_LEARNED.md - LƯƠNG TÂM',
        purpose: 'Nơi ghi lại sai lầm trong quá khứ (Anti-patterns) để không bao giờ lặp lại.',
        content: `
- ${chalk.red('Anti-patterns')}: Những cách làm sai đã từng gây lỗi (VD: Dùng thẻ a lồng nhau).
- ${chalk.green('Proven patterns')}: Những giải pháp tốt đã được kiểm chứng.
- ${chalk.cyan('Log of Failures')}: Nhật ký các lần "ngu ngốc" để đời.`,
        usage: 'Cập nhật ngay sau khi fix xong một bug khó hoặc refactor module.'
      },
      session_history: {
        title: '💾 SESSION_HISTORY.md - TRÍ NHỚ',
        purpose: 'Lưu trữ ngữ cảnh (Context) qua các phiên làm việc, giúp AI không bị "mất trí nhớ".',
        content: `
- ${chalk.yellow('Current Status')}: Mục tiêu hiện tại là gì? Đang kẹt ở đâu?
- ${chalk.yellow('Session Log')}: Lịch sử các quyết định quan trọng theo ngày.
- ${chalk.yellow('Memory Dump')}: Các thông tin quan trọng cần nhớ (Dependency mới, Env var...).`,
        usage: 'Ghi lại cuối mỗi ngày làm việc (/save-brain) và đọc lại vào đầu ngày hôm sau (/recap).'
      },
      trust_sentinel: {
        title: '�️ TRUST_SENTINEL.md - VÍ TIỀN & UY TÍN',
        purpose: 'Hệ thống tự kiểm soát tài nguyên và điểm tín nhiệm của AI.',
        content: `
- ${chalk.green('Trust Score')}: Điểm thưởng/phạt dựa trên hiệu quả công việc.
- ${chalk.yellow('Inventory')}: Quản lý API Key, Token giới hạn (để không xài lố tiền Sếp).
- ${chalk.red('Forbidden Zones')}: Những hành động cấm kỵ (VD: Xóa DB Production).`,
        usage: 'Kiểm tra trước khi thực hiện các tác vụ tốn kém hoặc nguy hiểm.'
      },
      post_mortem: {
        title: '💀 POST_MORTEM.md - KHÁM NGHIỆM TỬ THI',
        purpose: 'Biên bản phân tích nguyên nhân gốc rễ (RCA) sau mỗi sự cố nghiêm trọng.',
        content: `
- ${chalk.red('Incident Summary')}: Chuyện gì đã xảy ra? Thiệt hại thế nào?
- ${chalk.yellow('5 Whys')}: Tại sao? Tại sao? Tại sao?... để tìm nguyên nhân gốc.
- ${chalk.green('Prevention Plan')}: Kế hoạch hành động để không bao giờ gặp lại lỗi này.`,
        usage: 'Dùng khi hệ thống bị sập hoặc có lỗi nghiêm trọng ảnh hưởng user.'
      },
      project_docs: {
        title: '🏗️ PROJECT DOCS - TÀI LIỆU DỰ ÁN',
        purpose: 'Kho tri thức về kỹ thuật của dự án.',
        content: `
- ${chalk.cyan('Architecture')}: Sơ đồ hệ thống, luồng dữ liệu.
- ${chalk.cyan('API')}: Danh sách endpoints, authentication.
- ${chalk.cyan('Database')}: Schema, quan hệ bảng, RLS policies.`,
        usage: 'Cập nhật song song với code. Code đổi thì Docs phải đổi.'
      },
      skill_workflow: {
        title: '🛠️ SKILL WORKFLOW - TUYỆT CHIÊU',
        purpose: 'Quy trình chuẩn (SOP) cho các tác vụ phức tạp.',
        content: `
- ${chalk.yellow('Step-by-step')}: Hướng dẫn từng bước cụ thể.
- ${chalk.yellow('Checklist')}: Các điều kiện cần kiểm tra.
- ${chalk.yellow('Example')}: Ví dụ minh họa cách thực hiện.`,
        usage: 'Dùng cho các task lặp lại nhiều lần hoặc yêu cầu độ chính xác cao (Deploy, Migration).'
      }
    },
    build: {
      agentName: 'Tên của Agent (VD: Jarvis, Bé Đậu):',
      sovereignName: 'Danh xưng của bạn (VD: Sếp, Đại Ca):',
      projectName: 'Tên dự án:',
      framework: 'Bạn đang dùng Framework gì?',
      database: 'Database của bạn là gì?',
      style: 'Bạn dùng gì để style giao diện?',
      confirm: 'Tạo thư mục .agent tại đây chứ?',
      processMsg: 'Đang cài đặt não bộ...',
      successTitle: 'CÀI ĐẶT THÀNH CÔNG!',
      successMsg: 'Đã cài đặt xong não bộ! Bây giờ AI của bạn đã khôn hơn nhiều rồi đấy.',
      nextStep: '👉 Hãy mở file .agent/AGENTS.md để kiểm tra lại nhé Sếp!'
    }
  },
  EN: {
    welcome: '🧠  AI BRAIN CONSTRUCTOR  🧠',
    subtitle: '    Turn your AI Assistant into a Senior Engineer.',
    mainMenu: {
      message: 'What would you like to explore?',
      choices: [
        { name: `${ICONS.rocket}  Build Agent Now`, value: 'build' },
        new inquirer.Separator(),
        { name: `${ICONS.search}  Learn: What are Agents?`, value: 'agents' },
        { name: `${ICONS.brain}  Detail: Brain Structure (.agent/brain)`, value: 'learn_brain' },
        { name: `${ICONS.book}  Detail: Project Docs (.agent/docs)`, value: 'learn_docs' },
        { name: `${ICONS.tool}  Detail: Skills & Workflows (.agent/skills)`, value: 'learn_skills' },
        { name: `${ICONS.shield}  Detail: Trust & Sentinel System`, value: 'trust_sentinel' },
        new inquirer.Separator(),
        { name: `${ICONS.exit}  Exit`, value: 'exit' }
      ]
    },
    brainMenu: {
      message: 'Which part of the Brain to inspect?',
      choices: [
        { name: '📝 lesson_learned.md (Conscience)', value: 'lesson_learned' },
        { name: '💾 session_history.md (Memory)', value: 'session_history' },
        { name: '🛡️ trust_sentinel.md (Resources)', value: 'trust_sentinel' },
        { name: '💀 post_mortem.md (Incidents)', value: 'post_mortem' },
        new inquirer.Separator(),
        { name: `${ICONS.back} Back`, value: 'back' }
      ]
    },
    docsMenu: {
      message: 'Which doc structure to inspect?',
      choices: [
        { name: '🏗️ architecture.md (Architecture)', value: 'project_docs' },
        new inquirer.Separator(),
        { name: `${ICONS.back} Back`, value: 'back' }
      ]
    },
    skillsMenu: {
      message: 'Which workflow to inspect?',
      choices: [
        { name: '🛠️ SKILL.md (Skill Template)', value: 'skill_workflow' },
        new inquirer.Separator(),
        { name: `${ICONS.back} Back`, value: 'back' }
      ]
    },
    fileDetails: {
      agents: {
        title: '📜 AGENTS.md - THE CONSTITUTION',
        purpose: 'The supreme law of the project. Defines Persona, Protocols, and Core Principles.',
        content: `
- ${chalk.yellow('Persona')}: Name, Role, Tone (e.g., Loyal, Professional).
- ${chalk.yellow('Constitution')}: Inviolable rules (RPM, Atomic Edits).
- ${chalk.yellow('Protocols')}: Standard workflows (Pre - During - Post coding).`,
        usage: 'AI must read this file FIRST before starting any new session.'
      },
      lesson_learned: {
        title: '📝 LESSON_LEARNED.md - CONSCIENCE',
        purpose: 'Records past mistakes (Anti-patterns) to prevent recurrence.',
        content: `
- ${chalk.red('Anti-patterns')}: Wrong approaches that caused errors.
- ${chalk.green('Proven patterns')}: Verified solutions.
- ${chalk.cyan('Log of Failures')}: A diary of past failures for reflection.`,
        usage: 'Update immediately after fixing a bug or refactoring.'
      },
      session_history: {
        title: '💾 SESSION_HISTORY.md - MEMORY',
        purpose: 'Maintains context across sessions, preventing AI amnesia.',
        content: `
- ${chalk.yellow('Current Status')}: What is the goal? What is blocking?
- ${chalk.yellow('Session Log')}: History of key decisions by date.
- ${chalk.yellow('Memory Dump')}: Critical info to retain (Dependencies, Env vars...).`,
        usage: 'Log at the end of every day (/save-brain) and read at the start (/recap).'
      },
      trust_sentinel: {
        title: '🛡️ TRUST_SENTINEL.md - RESOURCES',
        purpose: 'Self-control system for resources and trust score.',
        content: `
- ${chalk.green('Trust Score')}: Reward/Penalty based on performance.
- ${chalk.yellow('Inventory')}: API Keys, Token limits management.
- ${chalk.red('Forbidden Zones')}: Restricted actions (e.g., Delete Prod DB).`,
        usage: 'Check before performing expensive or dangerous tasks.'
      },
      post_mortem: {
        title: '💀 POST_MORTEM.md - INCIDENT REPORT',
        purpose: 'Root Cause Analysis (RCA) for critical incidents.',
        content: `
- ${chalk.red('Incident Summary')}: What happened? Impact?
- ${chalk.yellow('5 Whys')}: Deep dive into the root cause.
- ${chalk.green('Prevention Plan')}: Action items to prevent recurrence.`,
        usage: 'Use when the system crashes or critical bugs occur.'
      },
      project_docs: {
        title: '🏗️ PROJECT DOCS - KNOWLEDGE BASE',
        purpose: 'Technical documentation of the project.',
        content: `
- ${chalk.cyan('Architecture')}: System design, data flow.
- ${chalk.cyan('API')}: Endpoints, authentication.
- ${chalk.cyan('Database')}: Schema, relationships, RLS policies.`,
        usage: 'Update in parallel with code changes.'
      },
      skill_workflow: {
        title: '🛠️ SKILL WORKFLOW - SOP',
        purpose: 'Standard Operating Procedures for complex tasks.',
        content: `
- ${chalk.yellow('Step-by-step')}: Detailed instructions.
- ${chalk.yellow('Checklist')}: Validation criteria.
- ${chalk.yellow('Example')}: Usage examples.`,
        usage: 'Use for repetitive or high-risk tasks (Deploy, Migration).'
      }
    },
    build: {
      agentName: 'Agent Name (e.g., Jarvis, Sentinel):',
      sovereignName: 'Your Title/Name (e.g., Architect, Commander):',
      projectName: 'Project Name:',
      framework: 'Which Framework are you using?',
      database: 'Which Database are you using?',
      style: 'Styling Solution?',
      confirm: 'Create .agent directory here?',
      processMsg: 'Installing Brain...',
      successTitle: 'INSTALLATION COMPLETE!',
      successMsg: 'Brain installation complete! Your AI is now upgraded.',
      nextStep: '👉 Open .agent/AGENTS.md to review the configuration.'
    }
  }
};

const showBanner = (text, subtext) => {
  console.clear();
  console.log(chalk.cyan.bold('=' . repeat(60)));
  console.log(chalk.white.bold(text.padStart(40))); 
  console.log(chalk.gray(subtext.padStart(50)));
  console.log(chalk.cyan.bold('=' . repeat(60)));
  console.log('\n');
};

const showDetails = async (language, key) => {
  const details = LOCALE[language].fileDetails[key];
  if (!details) return;

  console.clear();
  
  const content = `
${chalk.bold.underline('MỤC ĐÍCH (PURPOSE):')}
${details.purpose}

${chalk.bold.underline('NỘI DUNG CHÍNH (KEY CONTENT):')}
${details.content}

${chalk.bold.underline('CÁCH SỬ DỤNG (USAGE):')}
${chalk.italic(details.usage)}
  `;

  console.log(boxen(content.trim(), {
    title: details.title,
    titleAlignment: 'center',
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'green',
    width: 60
  }));
  
  await inquirer.prompt([{ type: 'input', name: 'pause', message: language === 'VI' ? 'Nhấn Enter để quay lại...' : 'Press Enter to return...' }]);
};

async function handleSubMenu(language, menuType) {
  const t = LOCALE[language];
  const menuConfig = t[menuType];
  
  while (true) {
    console.clear();
    console.log(chalk.yellow.bold(menuConfig.message));
    
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'key',
        message: 'Chọn mục:',
        choices: menuConfig.choices
      }
    ]);

    if (answer.key === 'back') return;

    await showDetails(language, answer.key);
  }
}

async function buildAgent(language) {
  const t = LOCALE[language].build;
  
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'agentName',
      message: t.agentName,
      default: language === 'VI' ? 'Bé Đậu' : 'Sentinel'
    },
    {
      type: 'input',
      name: 'sovereignName',
      message: t.sovereignName,
      default: language === 'VI' ? 'Sếp' : 'Commander'
    },
    {
      type: 'input',
      name: 'projectName',
      message: t.projectName,
      default: 'My Project'
    },
    {
      type: 'list',
      name: 'framework',
      message: t.framework,
      choices: [
        'Next.js (App Router)', 'Next.js (Pages)', 'React', 'Vue', 'Nuxt', 'Svelte', 'Angular', 'Node.js', 'Python/Django', 'Laravel', 'Other'
      ]
    },
    {
      type: 'list',
      name: 'database',
      message: t.database,
      choices: [
        'Supabase', 'Firebase', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'DynamoDB', 'None'
      ]
    },
    {
      type: 'list',
      name: 'style',
      message: t.style,
      choices: [
        'Tailwind CSS', 'CSS Modules', 'SASS/SCSS', 'Styled Components', 'Chakra UI', 'MUI', 'Bootstrap', 'None'
      ]
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: t.confirm,
      default: true
    }
  ]);

  if (!answers.confirm) {
    console.log(chalk.yellow('Aborted.'));
    return;
  }

  const spinner = ora(t.processMsg).start();
  
  const targetDir = path.join(process.cwd(), '.agent');
  const sourceDir = path.join(TEMPLATE_DIR, language);

  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    await fs.ensureDir(targetDir);
    await fs.ensureDir(path.join(targetDir, 'brain'));
    await fs.ensureDir(path.join(targetDir, 'docs'));
    await fs.ensureDir(path.join(targetDir, 'skills'));

    const files = await fs.readdir(sourceDir);

    for (const file of files) {
      if (!file.endsWith('.md')) continue;

      let content = await fs.readFile(path.join(sourceDir, file), 'utf-8');

      content = content
        .replace(/\[AGENT_NAME\]|\[TÊN_AGENT\]/g, answers.agentName)
        .replace(/\[USER_NAME\/TITLE\]|\[DANH_XƯNG_USER\]|\[DANH_XƯNG\]|\[TÊN_CỦA_BẠN\/DANH_XƯNG\]/g, answers.sovereignName)
        .replace(/\[PROJECT_NAME\]|\[TÊN_DỰ_ÁN\]/g, answers.projectName)
        .replace(/\[PROJECT_ROOT\]/g, process.cwd().replace(/\\/g, '/'))
        .replace(/\[FRAMEWORK\]/g, answers.framework)
        .replace(/\[DATABASE\]/g, answers.database)
        .replace(/\[STYLE_GUIDE\]/g, answers.style)
        .replace(/\[LANGUAGE_REQUIREMENT\]|\[NGÔN_NGỮ\]/g, language === 'VI' ? 'Tiếng Việt' : 'English')
        .replace(/\[PATH_TO_CORE_FILES\]|\[ĐƯỜNG_DẪN_CORE\]/g, 'src/core')
        .replace(/\[PATH_TO_AUTH_FILES\]|\[ĐƯỜNG_DẪN_AUTH\]/g, 'src/auth')
        .replace(/\[PATH_TO_TYPES\]/g, 'src/types');

      const cleanName = file.replace(/_TEMPLATE(_VN)?/, '');
      let subFolder = '';

      if (cleanName.includes('LESSONS_LEARNED') || cleanName.includes('SESSION_HISTORY') || cleanName.includes('TRUST_SENTINEL') || cleanName.includes('POST_MORTEM')) {
        subFolder = 'brain';
      } else if (cleanName.includes('DOCS_STRUCTURE')) {
        subFolder = 'docs';
      } else if (cleanName.includes('SKILL_WORKFLOW')) {
        subFolder = 'skills';
      } else if (cleanName.includes('BRAIN_STRUCTURE')) {
        subFolder = ''; 
      }

      const targetPath = path.join(targetDir, subFolder, cleanName);
      if(subFolder) await fs.ensureDir(path.join(targetDir, subFolder));
      await fs.writeFile(targetPath, content);
      spinner.text = `Generated: ${path.join(subFolder, cleanName)}`;
    }

    spinner.succeed(chalk.green(t.successTitle));
    
    console.log(boxen(chalk.white(t.successMsg) + '\n\n' + chalk.yellow(t.nextStep), {
      padding: 1,
      margin: 1,
      borderStyle: 'double',
      borderColor: 'green'
    }));

  } catch (error) {
    spinner.fail(chalk.red('Error creating brain'));
    console.error(error);
  }
}

async function main() {
  console.clear();
  
  const langAnswer = await inquirer.prompt([
    {
      type: 'list',
      name: 'language',
      message: 'Select Language / Chọn Ngôn Ngữ:',
      choices: [
        { name: '🇻🇳 Tiếng Việt (Hài hước, Tận tụy)', value: 'VI' },
        { name: '🇺🇸 English (Professional, Strict)', value: 'EN' }
      ]
    }
  ]);
  
  const lang = langAnswer.language;
  const t = LOCALE[lang];

  while (true) {
    showBanner(t.welcome, t.subtitle);

    const menu = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: t.mainMenu.message,
        pageSize: 12,
        choices: t.mainMenu.choices
      }
    ]);

    if (menu.action === 'exit') {
      console.log(chalk.yellow(lang === 'VI' ? 'Tạm biệt Sếp!' : 'Goodbye Commander!'));
      process.exit(0);
    } else if (menu.action === 'build') {
      await buildAgent(lang);
      break; 
    } else if (menu.action === 'learn_brain') {
      await handleSubMenu(lang, 'brainMenu');
    } else if (menu.action === 'learn_docs') {
      await handleSubMenu(lang, 'docsMenu');
    } else if (menu.action === 'learn_skills') {
      await handleSubMenu(lang, 'skillsMenu');
    } else if (menu.action === 'trust_sentinel') { // Direct access for single items
      await showDetails(lang, 'trust_sentinel');
    } else if (menu.action === 'agents') {
      await showDetails(lang, 'agents');
    }
  }
}

main();
