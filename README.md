## My Academic Portfolio (Next.js 静态站点)

### 1. 项目结构

- `src/app`：网站页面
  - `page.jsx`：首页 Home（从 `content/pages/home.md` 读取内容）
  - `about/page.jsx`：关于我 About（从 `content/pages/about.md` 读取）
  - `projects/page.jsx`：科研项目 Projects（从 `content/projects/*.md` 列表读取）
  - `achievements/page.jsx`：成果合集 Achievements（从 `content/achievements/*.md` 列表读取）
  - `blog/page.jsx` 与 `blog/[slug]/page.jsx`：博客列表和详情（从 `content/blog/*.md` 读取）
  - `archive/page.jsx`：资源存档 Archive（从 `content/archive/*.md` 读取）
  - `contact/page.jsx`：联系方式 Contact（从 `content/pages/contact.md` 读取）
- `src/lib/markdown.js`：读取和解析 Markdown 的工具
- `content`：你所有的文字内容（完全用 Markdown 管理）
  - `content/pages`：单页内容（`home.md` / `about.md` / `contact.md` 等）
  - `content/projects`：每个项目一个 `.md`
  - `content/achievements`：每条成果一个 `.md`
  - `content/blog`：每篇博客一个 `.md`
  - `content/archive`：每条资源记录一个 `.md`
- `public/images`, `public/video`, `public/files`：图片、视频、PDF、PPT 等静态文件

### 2. Markdown 文件格式示例

所有内容都用 Markdown 编写，并在文件开头使用「frontmatter」元信息（`---` 包裹的那块）。

#### 2.1 首页 `content/pages/home.md`

```md
---
title: 欢迎来到我的学术主页
---

这里写一句总述，比如：

我是某某大学 / 研究机构的 XXX，目前主要研究方向包括 A、B、C。
这个网站会集中展示我的科研项目、论文成果以及阶段性思考。
```

#### 2.2 关于我 `content/pages/about.md`

```md
---
title: 关于我
---

### 教育背景

- 2018–2022 本科，某某大学，某某专业
- 2022–至今 博士在读，某某大学，某某专业

### 研究兴趣

- 方向 A
- 方向 B
- 方向 C
```

#### 2.3 联系方式 `content/pages/contact.md`

已给出一个基础示例，你可以直接打开并修改：

- 邮箱
- 学术主页
- Google Scholar / ORCID 等

#### 2.4 科研项目 `content/projects/xxx-project.md`

每个项目一个文件，例如 `content/projects/project-2024-my-topic.md`：

```md
---
title: 面向 XXX 的 YYY 研究
period: 2023.09 – 至今
tags: [机器学习, 医学影像]
summary: >
  这里写 1–3 句话的项目简介。这个 summary 会出现在 Projects 页面卡片上。
---

这里可以写更详细的项目说明：

- 研究背景
- 研究目标
- 已有进展
- 合作单位 / 合作者
```

#### 2.5 成果合集 `content/achievements/xxx-paper.md`

每篇论文或每条成果一个文件，例如 `content/achievements/2024-paper-xxx.md`：

```md
---
title: Paper Title Here
year: 2024
type: 期刊论文 / 会议论文 / 专利 / 奖项
summary: >
  一句话中文简介，或者中英混合简介。
---

这里写更完整的引用信息、作者、DOI 链接等。
也可以附上：

- 预印本链接
- 发表期刊 / 会议
- 获奖说明
```

#### 2.6 博客 `content/blog/2024-01-my-note.md`

```md
---
title: 最近的一些研究思考
date: 2024-01-15
summary: 简短摘要，会显示在博客列表中。
---

这里就是完整的一篇博客文章，可以随意用 Markdown 写。
支持：

- 标题
- 列表
- 行内公式（用图片或 LaTeX 渲染后贴图）
```

#### 2.7 资源存档 `content/archive/xxx-resource.md`

```md
---
title: 2024 年某某报告 Slides
category: 学术报告 / 课程讲义 / 其他
file: /files/2024-my-talk-slides.pdf
summary: >
  简要说明这是哪一次报告、受邀单位等。
---

可以在这里补充更多背景信息，或者放演讲摘要。
```

其中 `file` 字段是指向 `public` 目录下的路径，例如：

- `public/files/2024-my-talk-slides.pdf` → 写 `/files/2024-my-talk-slides.pdf`
- `public/images/demo.png` → 可以在 Markdown 正文里写 `![](/images/demo.png)`

### 3. 本地运行与构建

在项目根目录（本文件所在位置）打开终端，依次执行：

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:3000` 就能看到网站。要生成完全静态文件（方便部署到 GitHub Pages 等）：

```bash
npm run build
npm run export
```

生成的静态站点会在 `out` 目录中。

### 4. 如何更新内容（只改 Markdown）

1. **更新文字**：直接修改 `content` 目录下对应的 `.md` 文件即可，无需改任何 JS 代码。
2. **添加新项目 / 成果 / 博客 / 资源**：
   - 在对应子目录（如 `content/projects`）新建一个 `.md` 文件，按照上面的模板写好 frontmatter 和正文。
   - 重新运行或刷新本地网站即可看到更新。
3. **引用图片 / 视频 / 文件**：
   - 把资源放进 `public/images`、`public/video`、`public/files`。
   - 在 Markdown 中用绝对路径引用，例如：
     - 图片：`![](/images/your-photo.jpg)`
     - 视频封面图：`![](/images/talk-cover.png)`，再在正文写视频链接。
     - PDF / PPT：`[下载 Slides](/files/2024-my-talk-slides.pdf)`

你只需要记住：**所有内容都在 `content` 和 `public` 里维护，页面代码不用碰。**

