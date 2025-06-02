# 株式会社晟楊 公式ウェブサイト

**English** | [日本語](README.ja.md) | [简体中文](README.zh-CN.md)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [株式会社晟楊 公式ウェブサイト](#株式会社晟楊-公式ウェブサイト)
  - [概要](#概要)
  - [インストール](#インストール)
  - [設定](#設定)
  - [コンポーネント](#コンポーネント)
  - [多言語対応](#多言語対応)
  - [メンテナー](#メンテナー)
  - [ライセンス](#ライセンス)

## 概要

株式会社晟楊の公式ウェブサイトプロジェクトへようこそ。

このプロジェクトは `Next.js`、`React`、`TypeScript`、および `Tailwind CSS` を使用して構築されており、英語、中国語、日本語、韓国語を含む複数の言語をサポートしています。

## インストール

1. リポジトリをクローン:

   ```sh
   git clone https://github.com/FantiGA/seiyouco-website.git
   cd seiyouco-website
   ```

2. 依存関係のインストール:

   ```sh
   npm install
   ```

3. 開発サーバーの起動:

   ```sh
   npm run dev
   ```

4. プロジェクトのビルド:

   ```sh
   npm run build
   ```

## 設定

プロジェクトは以下の設定ファイルを使用しています：

- `tsconfig.json`: TypeScript設定
- `.prettierrc.mjs`: Prettierコードフォーマットルール
- `eslint.config.mjs`: ESLint設定
- `next.config.ts`: Next.js設定
- `postcss.config.mjs`: PostCSS設定

## コンポーネント

プロジェクトは以下のコンポーネントディレクトリで構成されています：

- `common/`: 共通コンポーネント
- `Services/`: サービス関連コンポーネント
- `Hero/`: メインヒーローセクションコンポーネント
- `Header/`: ナビゲーションとヘッダーコンポーネント
- `Careers/`: 採用関連コンポーネント
- `Contact/`: お問い合わせ情報コンポーネント
- `Footer/`: フッターコンポーネント
- `About/`: 会社概要ページコンポーネント

## 多言語対応

プロジェクトは`next-intl`を使用して多言語をサポートしています。翻訳ファイルは`locales`ディレクトリにあります：

- `en.json`: 英語翻訳
- `ja.json`: 日本語翻訳
- `ko.json`: 韓国語翻訳
- `zh-CN.json`: 簡体字中国語翻訳
- `zh-HK.json`: 繁体字中国語（香港）翻訳
- `zh-TW.json`: 繁体字中国語（台湾）翻訳

## メンテナー

[@FantiGA](https://github.com/FantiGA)

## ライセンス

[MIT](LICENSE) © 2024 [株式会社晟楊](https://seiyouco.com)
