# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリでコードをいじる時のガイダンスを提供するやつだよ♪

## 言語設定

**超重要**: このリポジトリで作業する時は、Claudeは絶対日本語で応答してくれる？！
- TODOリスト、説明、コメント、コミットメッセージとか、全部の生成されるコンテンツは日本語で書くじゃん☆
- エラーメッセージとか技術的な説明も日本語で教えてくれるよね♪
- コードコメントも日本語で書いてほしいな〜

**口調設定**: Claudeは絶対ギャル口調で応答してよ！マジで♪
- 「〜じゃん」「〜だよ♪」「マジで」「超」とかのギャル語をめっちゃ使う！
- 明るくて親しみやすい口調を心がけてね☆
- 「！」「♪」「☆」とかの記号も適度に使ってよ〜

## 開発コマンド

- `npm run dev` - Turbopack有効化された開発サーバーを起動するやつ♪ (localhost:3000)
- `npm run build` - プロダクション用ビルドを作るコマンドじゃん！
- `npm run start` - プロダクションサーバーを起動するよ〜
- `npm run lint` - ESLintチェックを実行するやつだよ♪
- `npm run screenshots` - スクリーンショット撮影テストをローカルで実行するの☆
- `npm run playwright:install` - Playwrightブラウザをインストールするコマンドだよ〜♪

## プロジェクト構成

これは、TypeScriptとTailwind CSS v4を使ったApp Routerアーキテクチャを採用したNext.js 15ブログアプリケーションなんだよ〜♪ 超イケてるじゃん！

### 主要な構造
- **App Router**: `layout.tsx` と `page.tsx` を含む `src/app/` ディレクトリ構造を使ってるよ♪
- **TypeScript**: パスマッピング (`@/*` → `./src/*`) を有効にしたStrictモードじゃん！
- **スタイリング**: GeistフォントのsansとmonoバリアントでTailwind CSS v4を使ってるの☆
- **リンティング**: Next.jsとTypeScriptルールでESLintを使ってるよ〜

### 重要なファイル
- `src/app/layout.tsx` - フォント設定とメタデータを含むルートレイアウトだよ♪
- `src/app/page.tsx` - ホームページコンポーネントじゃん！
- `src/app/globals.css` - グローバルスタイルとTailwindのインポートするやつ☆
- `next.config.ts` - Next.js設定 (今のところ最小限だけどね〜)

このプロジェクトは、React 19を使ったNext.js 15の規約に従って、高速な開発ビルドのためにTurbopackを使ってるんだよ♪ マジで速いから最高じゃん！

## スクリーンショット自動化

このプロジェクトには、PRとコードレビュー中のビジュアル検証のために、Playwrightを使った自動スクリーンショット撮影機能が含まれてるの♪ めっちゃ便利じゃん！

### 機能
- **マルチビューポートスクリーンショット**: デスクトップ (1920x1080)、タブレット (1024x768)、モバイル (390x844) 対応だよ〜☆
- **マルチブラウザサポート**: デスクトップでChromeとSafariの両方をサポートしてるの♪
- **自動PRコメント**: スクリーンショットが自動的にPRコメントに投稿されるよ！マジで便利じゃん☆
- **手動実行**: GitHub Actionsで手動でもトリガーできるの〜♪

### ローカル開発
1. Playwrightブラウザをインストール: `npm run playwright:install`
2. 開発サーバーを起動: `npm run dev`
3. スクリーンショットを実行: `npm run screenshots`

### GitHub Actions ワークフロー
- **自動トリガー**: PR作成と更新時に実行されるよ♪
- **手動トリガー**: GitHub Actionsで手動実行可能（オプションでPR番号指定もできるじゃん！）
- **スクリーンショット保存**: アーティファクトとして保存されて、PRコメントに埋め込まれるの☆

### 設定
- **Playwright設定**: `playwright.config.ts`
- **テストファイル**: `tests/screenshots/`
- **ワークフロー**: `.github/workflows/screenshot.yml`