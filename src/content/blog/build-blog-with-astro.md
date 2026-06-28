---
title: "用 Astro 搭建个人博客"
description: "从零开始用 Astro + Tailwind CSS 搭建一个现代化的静态博客站点，并部署到 GitHub Pages。"
date: 2026-06-28
tags: ["技术", "Astro"]
---

这篇文记录了这个博客的搭建过程，希望对你也有参考价值。

## 技术栈

| 技术 | 用途 |
|------|------|
| Astro 7 | 静态站点生成 |
| Tailwind CSS 4 | 样式 |
| Content Collections | 内容管理 |
| GitHub Actions | 自动部署 |
| GitHub Pages | 站点托管 |

## 项目结构

```
blog/
├── src/
│   ├── components/     # 组件
│   ├── content/blog/   # 文章 (Markdown)
│   ├── layouts/        # 布局
│   ├── pages/          # 页面路由
│   └── styles/         # 全局样式
├── public/             # 静态资源
└── astro.config.mjs    # 配置
```

## Content Collections

Astro 的 Content Collections 提供了类型安全的 Markdown 内容管理：

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});
```

每篇文章只需在 frontmatter 中填写元数据，Astro 会自动处理路由和渲染。

## 部署到 GitHub Pages

通过 GitHub Actions 自动构建和部署：

1. 推送代码到 `main` 分支
2. GitHub Actions 自动运行 `astro build`
3. 构建产物自动部署到 GitHub Pages

整个过程完全自动化，写完文章 push 一下就能上线。

## 深色模式

使用 CSS 变量 + `dark` class 实现深色模式，支持：
- 跟随系统偏好
- 手动切换
- 切换状态持久化到 localStorage

---

如果你也想搭建自己的博客，推荐试试 Astro！🚀
