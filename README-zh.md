# career-ops 中国版

> 基于 Claude Code 的 AI 驱动求职自动化工作流 — 评估offer、生成简历、自动扫岗、追踪申请，专为中国求职市场本地化定制。

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)](https://playwright.dev/)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-000?style=flat&logo=anthropic&logoColor=white)](https://claude.ai/code)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

<p align="center">
  <img src="docs/demo.gif" alt="Career-Ops Demo" width="800">
</p>

## 这是什么

career-ops 将 Claude Code 变成你的全职求职指挥中心。不用手动在 spreadsheet 跟踪申请，AI 驱动的求职流水线：

- **智能评估 offer** — 结构化 A-F 评分体系（10个加权维度）
- **生成 ATS 友好 PDF 简历** — 根据职位描述定制简历，关键词优化
- **自动扫描招聘门户** — 直接访问公司招聘页，提取职位
- **批量处理** — 并行评估多个职位
- **统一追踪** — 完整性检查，去重，状态归一化

> **重要提示：** 这**不是**海投工具。career-ops 是一个过滤器——帮你从数百个职位中找到值得你花时间的少数几个。系统强烈不建议申请评分低于 4.0/5 的职位。你的时间宝贵，猎头的时间也宝贵。投递前务必自己审核。

career-ops 是 Agentic 的：Claude Code 使用 Playwright 导航招聘页面，根据你的简历和职位描述评估匹配度，自适应调整简历。

## 功能特性

| 功能 | 描述 |
|---------|-------------|
| **自动流水线** | 粘贴 URL，获得完整评估 + PDF + 追踪记录 |
| **六模块评估** | 职位摘要、CV 匹配、职级策略、薪酬调研、文化信号、面试准备（STAR+R）|
| **面试故事银行** | 积累 STAR+反思故事，5-10 个核心故事回答任何行为面试问题 |
| **谈判脚本** | 薪资谈判框架，地域溢价反驳，offer 竞争杠杆利用 |
| **ATS PDF 生成** | 注入关键词，专业排版设计 |
| **门户扫描器** | 预配置 **60+ 中国头部科技公司 + 15 家游戏公司**，支持主流招聘网站搜索 |
| **批量处理** | 使用子代理并行评估 |
| **中文本地化** | 完整中文界面，适配中国求职市场生态 |
| **人机协作** | AI 评估推荐，最终决策由你掌控。系统从不自动提交申请 |
| **流水线完整性** | 自动合并、去重、状态归一化、健康检查 |

## 快速开始

```bash
# 1. 克隆并安装依赖
git clone https://github.com/auclaw/job-search.git
cd job-search && npm install
npx playwright install chromium   # PDF 生成和网页扫描需要

# 2. 检查安装
npm run doctor                     # 验证所有前置条件

# 3. 配置
cp config/profile.example.yml config/profile.yml  # 编辑填入你的信息
# 已预配置中国公司和招聘网站，直接使用即可

# 4. 添加你的简历
# 在项目根目录创建 cv.md，用 markdown 格式写你的简历

# 5. 在 Claude Code 中开始使用
claude   # 在当前目录打开 Claude Code

# 然后让 Claude 帮你完成初始化：
# "帮我完成 career-ops 初始化"

# 6. 使用
# 直接粘贴职位 URL 或者 /career-ops
```

> **系统设计就是让 Claude 自己自定义。** 模式、原型、评分权重、谈判脚本——你只需要让 Claude 改，它能读懂自己用的文件，知道该怎么改。

详见 [docs/SETUP-zh.md](docs/SETUP-zh.md) 完整安装指南。

## 使用方式

career-ops 是一个斜杠命令，支持多种模式：

```
/career-ops                → 显示所有可用命令
/career-ops {粘贴JD/URL}   → 完整自动流水线（评估 + PDF + 追踪）
/career-ops scan           → 扫描招聘门户发现新职位
/career-ops pdf            → 生成 ATS 优化 PDF 简历
/career-ops batch          → 批量并行评估多个职位
/career-ops tracker        → 查看申请状态
/career-ops apply          → 实时填写申请表单 AI 助手
/career-ops pipeline       → 处理待处理 URL 收件箱
/career-ops contacto       → LinkedIn 拓展私信草稿
/career-ops deep           → 深度公司调研
/career-ops training       → 评估课程/证书
/career-ops project        → 评估作品集项目
```

或者直接粘贴职位 URL 或描述——career-ops 自动检测，运行完整流水线。

## 预配置：同时支持中国本地求职 + 全球远程工作

本项目**保留原版所有欧美公司配置**，同时添加完整中国市场本地化支持，你可以同时搜索：

### 🇨🇳 中国市场 — 已添加 70+ 中国头部科技公司

**互联网巨头：** 字节跳动、阿里巴巴、腾讯、百度、美团、拼多多、京东、网易、哔哩哔哩、小红书、快手

**AI 与大模型创业：** 智谱 AI、深度求索 DeepSeek、通义千问、文心一言、豆包、MiniMax、商汤科技、云从科技、旷视科技、摩尔线程、沐曦、聆心智能

**云计算与芯片：** 华为（昇腾 AI）、小米、OPPO、Vivo、寒武纪、阿里云、腾讯云、百度智能云

**自动驾驶与新能源：** 小鹏汽车、理想汽车、蔚来、比亚迪、特斯拉中国、小马智行、文远知行

**游戏公司：** 腾讯游戏、网易游戏、米哈游、莉莉丝游戏、叠纸游戏、鹰角网络、巨人网络、完美世界、心动网络（TapTap）、灵犀互娱、库洛游戏、散爆网络、中手游、FunPlus 趣加、朝夕光年

**金融科技：** 蚂蚁集团、微信支付、陆金所

### 已添加的中国主流招聘网站搜索

- **前程无忧 51job** — AI 产品经理、算法工程师、后端开发、前端开发
- **智联招聘** — AI 产品经理、高级技术岗
- **BOSS 直聘** — AI 产品、互联网大厂
- **拉勾网** — 互联网 AI 岗位、北上广深杭精选
- **猎聘** — 中高端职位、资深专家岗
- **牛客网** — 校招/秋招/春招
- **脉脉** — 内推机会

### 🌍 全球远程

**本项目保留原版项目所有欧美科技公司配置**：Anthropic, OpenAI, Mistral, Cohere, ElevenLabs, Retool, n8n 等 100+ 公司，可以同时搜索远程工作机会。

## 工作原理

```
你粘贴职位 URL 或描述
        │
        ▼
┌──────────────┐
│   原型检测   │  分类：LLMOps / Agentic / 产品 / 架构 / 现场工程师 / 转型
└────────┬─────┘
         │
         ▼
┌──────────────┐
│  A-F 评分评估 │  匹配度、目标对齐、薪酬、文化信号、风险预警
│  (读取 cv.md) │
└────────┬─────┘
         │
     ┌────┼────┐
     ▼    ▼    ▼
  报告   PDF  追踪
  .md   .pdf  .tsv
```

## 项目结构

```
job-search/
├── CLAUDE.md                    # Agent 指令
├── cv.md                        # 你的简历（在这里创建）
├── article-digest.md            # 你的项目案例摘要（可选）
├── portals.yml                  # 扫描配置（已预配置中国公司）
├── config/
│   └── profile.example.yml      # 个人配置模板
├── modes/                       # 英文原版模式
│   └── zh/                      # 👋 中文本地化模式
│       ├── README.md
│       ├── _shared.md           # 系统上下文
│       ├── 评估.md              # 单个职位评估
│       ├── 申请.md              # 实时申请助手
│       ├── 流水线.md            # 待处理 URL 处理
│       └── 扫描.md              # 门户扫描
├── templates/
│   ├── cv-template.html         # ATS 简历 HTML 模板
│   ├── portals.example.yml      # 扫描配置模板
│   └── states.yml               # 标准状态定义
├── batch/
│   ├── batch-prompt.md          # 批量处理子代理提示
│   └── batch-runner.sh          # 编排脚本
├── dashboard/                   # Go TUI 流水线查看器
├── data/                        # 你的追踪数据（gitignore）
├── reports/                     # 评估报告（gitignore）
├── output/                      # 生成 PDF（gitignore）
└── fonts/                       # 字体文件
```

## 启用中文模式

在 `config/profile.yml` 中添加：

```yaml
language:
  modes_dir: modes/zh
```

之后所有输出都会使用中文，适配中国求职市场。

## 技术栈

- **Agent**: Claude Code 技能 + 子代理并行
- **PDF 生成**: Playwright + HTML 模板
- **扫描器**: Playwright 直接抓取 + 站点搜索
- **仪表盘**: Go + Bubble Tea + Lipgloss（Catppuccin Mocha 主题）
- **数据**: Markdown 表格 + YAML 配置 + TSV 批量文件

## 自定义

- **添加公司**：在 `portals.yml` 的 `tracked_companies` 添加
- **调整关键词**：修改 `title_filter.positive`/`negative` 过滤职位
- **改评分权重**：修改 `modes/zh/_shared.md`
- **改个人偏好**：在 `modes/_profile.md` 添加你的职业原型

## 道德使用 — 重要

**本系统设计追求质量，而非数量。** 目标是帮你找到真正匹配的职位，不是批量投递 spam 公司。

- **永远不要**在用户没有审核前提交申请。填写表单、草稿答案、生成 PDF——但点击提交前一定要停止，由用户做最终决定。
- **强烈不建议**低匹配度申请。如果分数低于 4.0/5，明确建议不要申请。用户时间和猎头时间都宝贵，只有在用户有特殊理由时才继续。
- **质量优先于速度**。精准投递 5 家胜过泛泛投递 50 家。引导用户少投递、精准投递。
- **尊重猎头时间**。每个被人类阅读的申请都需要注意力，只发送值得读的内容。

## 许可证

MIT License — 详见 [LICENSE](LICENSE)

## 致谢

基于 [santifer/career-ops](https://github.com/santifer/career-ops) 项目，针对中国求职市场进行了本地化改造，添加了完整中文支持和中国科技公司预配置。

原作者 Santiago 用这个系统评估了 740+ 职位，生成了 100+ 定制简历，最终拿到了 Head of Applied AI 职位。感谢原作者的优秀工作！

<!-- jing aujingx yumtso -->
