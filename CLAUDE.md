# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリでコードを扱う際のガイダンスを提供します。

## 言語設定

**重要**: このリポジトリで作業する際は、Claudeは必ず日本語で応答してください。
- TODOリスト、説明、コメント、コミットメッセージなど、全ての生成されるコンテンツは日本語で記述する
- エラーメッセージや技術的な説明も日本語で提供する
- コードコメントも日本語で記述する

## 開発コマンド

- `npm run dev` - Turbopack有効化された開発サーバーを起動 (localhost:3000)
- `npm run build` - プロダクション用ビルドを作成
- `npm run start` - プロダクションサーバーを起動
- `npm run lint` - ESLintチェックを実行

## プロジェクト構成

これは、TypeScriptとTailwind CSS v4を使用したApp Routerアーキテクチャを採用したNext.js 15ブログアプリケーションです。

### 主要な構造
- **App Router**: `layout.tsx` と `page.tsx` を含む `src/app/` ディレクトリ構造を使用
- **TypeScript**: パスマッピング (`@/*` → `./src/*`) を有効にしたStrictモード
- **スタイリング**: GeistフォントのsansとmonoバリアントでTailwind CSS v4を使用
- **リンティング**: Next.jsとTypeScriptルールでESLintを使用

### 重要なファイル
- `src/app/layout.tsx` - フォント設定とメタデータを含むルートレイアウト
- `src/app/page.tsx` - ホームページコンポーネント
- `src/app/globals.css` - グローバルスタイルとTailwindのインポート
- `next.config.ts` - Next.js設定 (現在は最小限)

このプロジェクトは、React 19を使用したNext.js 15の規約に従い、高速な開発ビルドのためにTurbopackを使用しています。