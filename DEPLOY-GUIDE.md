# Tidyflow Blog デプロイガイド

## 必要なアカウント（全部無料）
- GitHub: https://github.com
- Vercel: https://vercel.com

---

## STEP 1: GitHubにリポジトリを作成

1. https://github.com/new にアクセス
2. Repository name: `tidyflow-blog`
3. Public を選択
4. 「Create repository」をクリック

---

## STEP 2: ローカルでプロジェクトをセットアップ

ターミナルを開いて以下を実行：

```bash
cd ~/Documents/Business/tidyflow-blog
npm install
```

動作確認（ローカルプレビュー）：

```bash
npm run dev
```

ブラウザで http://localhost:4321 を開いて確認。

---

## STEP 3: GitHubにプッシュ

```bash
cd ~/Documents/Business/tidyflow-blog
git init
git add .
git commit -m "Initial commit: Tidyflow blog"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tidyflow-blog.git
git push -u origin main
```

※ YOUR_USERNAME はGitHubのユーザー名に置き換え

---

## STEP 4: Vercelに接続

1. https://vercel.com にログイン（GitHubアカウントで）
2. 「Add New Project」をクリック
3. 「Import Git Repository」→ `tidyflow-blog` を選択
4. Framework Preset: 「Astro」を選択（自動検出されるはず）
5. 「Deploy」をクリック
6. 数分で公開完了！

---

## STEP 5: カスタムドメイン接続

1. Vercelのプロジェクト → Settings → Domains
2. ドメイン名を入力（例：tidyflow.com）
3. 表示されるDNS設定をムームードメインで設定：
   - タイプ: CNAME
   - ホスト: @（もしくはwww）
   - 値: cname.vercel-dns.com
4. SSL証明書は自動で設定される（無料）

---

## STEP 6: 新しい記事を追加する方法

1. `src/content/blog/` に新しい .md ファイルを作成
2. フロントマターを書く：

```md
---
title: "記事のタイトル"
description: "記事の説明文（SEO用）"
pubDate: 2026-03-10
tags: ["notion", "productivity"]
author: "Tidyflow"
---

記事の本文をここに書く...
```

3. git add → commit → push すると自動でVercelが再デプロイ

---

## 自動投稿（スケジュールタスク用）

スケジュールタスクが記事を自動投稿する流れ：
1. タスクが .md ファイルを `src/content/blog/` に生成
2. `git add → commit → push` を実行
3. Vercelが自動でデプロイ
4. 記事が公開される

必要な設定：
- GitHubのPersonal Access Token（タスクからpushするため）
- git config でユーザー名・メール設定

---

## AdSense設定（記事10本以上になったら）

1. https://adsense.google.com で申請
2. 承認されたら、`src/layouts/BaseLayout.astro` の AdSense コメントアウトを解除
3. `ca-pub-XXXXXXXXXXXXXXXX` を自分のIDに置き換え
4. git push で自動デプロイ
