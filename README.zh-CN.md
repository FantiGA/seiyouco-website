# 株式会社晟杨官方网站

**English** | [日本語](README.ja.md) | [简体中文](README.zh-CN.md)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [株式会社晟杨官方网站](#株式会社晟杨官方网站)
  - [概述](#概述)
  - [安装](#安装)
  - [配置](#配置)
  - [组件](#组件)
  - [多语言支持](#多语言支持)
  - [维护者](#维护者)
  - [许可证](#许可证)

## 概述

欢迎访问株式会社晟杨官方网站项目。

本项目使用 `Next.js`、`React`、`TypeScript` 和 `Tailwind CSS` 构建，支持包括英文、中文、日文和韩文在内的多种语言。

## 安装

1. 克隆仓库：

   ```sh
   git clone https://github.com/FantiGA/seiyouco-website.git
   cd seiyouco-website
   ```

2. 安装依赖：

   ```sh
   npm install
   ```

3. 运行开发服务器：

   ```sh
   npm run dev
   ```

4. 构建项目：

   ```sh
   npm run build
   ```

## 配置

项目使用以下配置文件：

- `tsconfig.json`: TypeScript配置
- `.prettierrc.mjs`: Prettier代码格式化规则
- `eslint.config.mjs`: ESLint配置
- `next.config.ts`: Next.js配置
- `postcss.config.mjs`: PostCSS配置

## 组件

项目由以下组件目录组成：

- `common/`: 共享组件
- `Services/`: 服务相关组件
- `Hero/`: 主页横幅组件
- `Header/`: 导航和页头组件
- `Careers/`: 招聘相关组件
- `Contact/`: 联系信息组件
- `Footer/`: 页脚组件
- `About/`: 关于页面组件

## 多语言支持

项目使用`next-intl`支持多语言。翻译文件位于`locales`目录：

- `en.json`: 英文翻译
- `ja.json`: 日文翻译
- `ko.json`: 韩文翻译
- `zh-CN.json`: 简体中文翻译
- `zh-HK.json`: 繁体中文（香港）翻译
- `zh-TW.json`: 繁体中文（台湾）翻译

## 维护者

[@FantiGA](https://github.com/FantiGA)

## 许可证

[MIT](LICENSE) © 2025 [株式会社晟杨](https://seiyouco.com)
