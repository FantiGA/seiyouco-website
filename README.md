# Seiyou Co., Ltd. Official Website

**English** | [日本語](README.ja.md) | [简体中文](README.zh-CN.md)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [Seiyou Co., Ltd. Official Website](#seiyou-co-ltd-official-website)
  - [Overview](#overview)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Components](#components)
  - [Multi-language Support](#multi-language-support)
  - [Maintainers](#maintainers)
  - [License](#license)

## Overview

Welcome to the Seiyou Co., Ltd. Official Website project.

This project is built using `Next.js`, `React`, `TypeScript`, and `Tailwind CSS`, supporting multiple languages including English, Chinese, Japanese, and Korean.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/FantiGA/seiyouco-website.git
   cd seiyouco-website
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the development server:

   ```sh
   npm run dev
   ```

4. Build the project:

   ```sh
   npm run build
   ```

## Configuration

The project uses several configuration files:

- `tsconfig.json`: TypeScript configuration
- `.prettierrc.mjs`: Prettier code formatting rules
- `eslint.config.mjs`: ESLint configuration
- `next.config.ts`: Next.js configuration
- `postcss.config.mjs`: PostCSS configuration

## Components

The project is organized into several component directories:

- `common/`: Shared components
- `Services/`: Service-related components
- `Hero/`: Main hero section components
- `Header/`: Navigation and header components
- `Careers/`: Career-related components
- `Contact/`: Contact information components
- `Footer/`: Footer components
- `About/`: About page components

## Multi-language Support

The project supports multiple languages using `next-intl`. Translation files are located in the `locales` directory:

- `en.json`: English translations
- `ja.json`: Japanese translations
- `ko.json`: Korean translations
- `zh-CN.json`: Simplified Chinese translations
- `zh-HK.json`: Traditional Chinese (Hong Kong) translations
- `zh-TW.json`: Traditional Chinese (Taiwan) translations

## Maintainers

[@FantiGA](https://github.com/FantiGA)

## License

[MIT](LICENSE) © 2024 [Seiyou Co., Ltd.](https://seiyouco.com)
