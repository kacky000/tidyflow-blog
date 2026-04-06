# TidyFlow ブログ改善レポート
## 万博GOサイト制作ナレッジの反映

**作成日**: 2026-04-04
**対象**: gettidyflow.com（tidyflow-blog）全131記事
**レビュー観点**: 画像の正確性、AIっぽさの排除、SEOメタデータ、モバイル対応、テーブル・画像活用、ページ長さ

---

## 1. 画像の正確性チェック

### 現状
- 全131記事でマークダウン内に `![` を使った画像は **0枚**（記事本文中に画像が一切ない）
- heroImage（サムネイル）は `/thumbs/` に約150枚存在し、フロントマターで指定されている
- 記事本文はすべてテキストのみで構成

### 問題
- **記事内に画像が1枚もない**。ナレッジの「テキストだけは絶対NG」「画像5-8枚以上」ルールに完全に違反
- heroImageはあるが、Unsplash等の汎用画像の可能性が高い（ファイル名がthumb-[slug].jpgで一律生成されているため）
- 画像の内容がテーマと一致しているかの目視確認が必要

### 修正アクション
- [ ] **優先度HIGH**: 主要記事（SEOトラフィック上位10本）に本文内画像を追加（スクリーンショット、図解、テーブルの視覚化）
- [ ] heroImage（150枚）の目視確認 — 内容とサムネイルが一致しているかオーナーチェック
- [ ] 汎用的すぎるサムネイルは差し替え検討

---

## 2. AIっぽさの排除

### 2-1. AIっぽい文章パターン（検出結果）

13記事でAI定型フレーズを検出:

| フレーズパターン | 該当記事例 |
|---|---|
| "In this guide" / "In this article" | budget-template-for-teens, zero-based-budgeting-guide, wedding-budget-planning-guide, how-to-create-a-budget 等 |
| "Looking to..." | best-notion-budget-templates-2026, how-to-budget-on-5000-a-month |
| "we'll walk you through" | budget-template-for-teens |

ただし全体的に、初期の記事（budgeting-mistakes-to-avoid, why-people-fail-at-budgeting, 50-30-20-budget-rule-notion等）は自然な文体で書かれている。問題は主に後半に量産された職業別テンプレート記事（99本）に集中。

### 2-2. 構造の均一性（最大の問題）

職業別テンプレート記事（budget-template-for-*.md）は全て同一構造:
1. `# タイトル`（H1重複、後述）
2. 導入文
3. `## Why Standard Budgets Don't Work for [職業]`
4. `## The Core Framework / Sample Budget`（テーブル）
5. `## Managing [職業特有の課題]`
6. `## FAQ`
7. `## CTA`

**この均一構造がAI検出ツールに引っかかるリスクが高い**。段落の長さもほぼ一定。

### 2-3. H1タイトルの二重表示

**99記事**でフロントマター `title:` とマークダウン本文の `# タイトル` が重複。BlogPost.astroレイアウトが `<h1>{title}</h1>` を自動出力するため、ページ上にH1が2つ表示される。SEO的にも悪影響。

**該当記事**: budget-for-digital-nomads, budget-template-for-nurses, budget-template-for-teens 等99本（主に後半量産記事）

### 2-4. デザインのAIっぽさ

- **Interフォント使用中** — BaseLayout.astroで `Inter` をGoogle Fontsから読み込み。ナレッジでは「Inter禁止」だが、TidyFlowは英語サイトかつ既に運用中のため、変更は慎重に判断すべき
- **紫〜青グラデーション** — `--gradient-primary: linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)` はIndigo→Cyanで「AI典型パターン」に該当
- ロゴテキストにグラデーション適用 — AIサイトの典型的なパターン

### 修正アクション
- [ ] **優先度HIGH**: 99記事のマークダウン内H1（`# タイトル`行）を削除
- [ ] **優先度MEDIUM**: 職業別テンプレート記事の構造にバリエーションを持たせる（全記事同時ではなく、トラフィックのある記事から順次）
- [ ] **優先度LOW**: グラデーション・フォントの変更は、現状のトラフィック規模とブランド認知を考慮して保留可

---

## 3. SEOメタデータ

### 3-1. OGPタグ（問題なし）

BaseLayout.astroで以下を正しく設定済み:
- `og:type` — 記事ページは "article"
- `og:url` — canonicalURLから生成
- `og:title` — fullTitleを使用
- `og:description` — description propから取得
- `og:image` — heroImage or デフォルト画像
- `og:site_name` — "Tidyflow"
- `twitter:card` — summary_large_image
- JSON-LD構造化データ — WebSite + Article スキーマ
- canonical URL設定済み

### 3-2. meta description の長さ問題

**62記事でdescriptionが165文字を超過**（推奨: 120-160文字）

特に長いもの:
| 記事 | 文字数 |
|---|---|
| budget-template-for-lawyers | 216 |
| budget-template-for-construction-workers | 210 |
| best-notion-budget-templates-2026 | 209 |
| best-budget-spreadsheet-templates | 199 |
| budget-template-for-personal-trainers | 195 |

Googleの検索結果で途中で切れて表示される。

### 修正アクション
- [ ] **優先度MEDIUM**: 62記事のdescriptionを120-160文字に短縮
- [ ] 特に165文字超の記事を優先的に修正

---

## 4. モバイル対応

### 4-1. フォントサイズ

- `.post-content` のベースフォントサイズ: `1.02rem` = 約16.3px → **OK**（14px以上）
- ナビゲーションリンク: `0.9rem` = 約14.4px → **ギリギリOK**
- タグ: `0.75rem` = 約12px → **小さすぎる**
- フッターリンク: `0.88rem` = 約14.1px → **ギリギリOK**
- 日付・メタ情報: `0.82rem` = 約13.1px → **やや小さい**

### 4-2. タップターゲット

- ナビゲーションリンク: `padding: 0.5rem 0.85rem` → 高さ約36px程度 → **44px未満**
- タグ: `padding: 0.2rem 0.65rem` → 高さ約24px程度 → **44px未満**
- フッターリンク: 特にpadding指定なし → **44px未満の可能性大**

### 4-3. テーブルの横スクロール

- **CSSにテーブルスタイルが一切定義されていない**。`.post-content table` のスタイルがない
- マークダウンのテーブルは `<table>` に変換されるが、横スクロール用の `overflow-x: auto` が設定されていない
- モバイルでテーブルが画面からはみ出す可能性が高い
- ツールページ（calculator系）には個別に `overflow-x: auto` が設定されているが、ブログ記事には未設定

### 修正アクション
- [ ] **優先度HIGH**: `.post-content table` にスタイル追加（横スクロール対応、ボーダー、パディング等）
- [ ] **優先度MEDIUM**: タグの `font-size` を `0.8rem` 以上に、パディングを増やしてタップターゲット確保
- [ ] **優先度MEDIUM**: フッターリンクのタップ領域を `min-height: 44px` に
- [ ] **優先度LOW**: 日付・メタ情報のフォントサイズを `0.88rem` 以上に

---

## 5. テーブル・画像の活用

### テーブルなし記事（テキストのみ）

以下の**32記事にテーブルが1行もない**:

| 記事 | 行数 | テーブルがあるべきか |
|---|---|---|
| 50-30-20-budget-rule-notion | 91 | YES: 予算配分の例をテーブル化すべき |
| budgeting-mistakes-to-avoid | 100 | MAYBE: チェックリスト形式で可 |
| why-people-fail-at-budgeting | 100 | MAYBE |
| how-to-track-expenses-in-notion | 113 | YES: カテゴリ一覧をテーブル化すべき |
| how-to-save-money-college-student | 101 | MAYBE |
| notion-vs-excel-budgeting | 103 | YES: 比較情報は絶対テーブル化すべき |
| budget-template-for-teens | 113 | YES: 予算例をテーブル化すべき |
| budget-template-for-small-business-owners | 132 | YES |
| how-to-humanize-ai-content-for-seo | 166 | MAYBE |
| budget-for-maternity-leave | 165 | YES |
| budget-for-one-income-family | 151 | YES |
| budget-template-for-teachers | 181 | YES: 職業別テンプレート記事なのにテーブルなし |
| budget-template-for-retirees | 153 | YES |
| budget-template-for-part-time-workers | 145 | YES |
| how-to-budget-on-minimum-wage | 126 | YES |
| emergency-fund-budget-template | 219 | YES |
| freelancer-tax-organizer-guide | 219 | YES |
| budget-after-job-loss | 175 | YES |
| excel-vs-notion-budget-template | 184 | YES: 比較情報なのにテーブルなし |
| financial-planning-for-newlyweds | 150 | YES |

**特に重要**: `notion-vs-excel-budgeting` と `excel-vs-notion-budget-template` は**比較記事なのにテーブルが一切ない**。ナレッジの「比較情報は必ずテーブルに」ルールに違反。

### 画像ゼロ

**全131記事の本文内に画像が0枚**。前述の通り、heroImage以外の画像が一切ない。

### 修正アクション
- [ ] **優先度HIGH**: 比較記事（notion-vs-excel, excel-vs-notion, 各app-vs-notion系）にテーブルを追加
- [ ] **優先度HIGH**: テーブルなしの職業別記事に予算テーブルを追加
- [ ] **優先度MEDIUM**: 主要記事にスクリーンショットや図解を追加（Notionの画面キャプチャ等）

---

## 6. ページの長さ

### 長すぎる記事

| 記事 | 行数 | テーブル行数 | 問題 |
|---|---|---|---|
| budget-template-for-remote-workers | 261 | 98 | テーブルが多すぎて長大 |
| how-to-budget-on-4500-a-month | 239 | 78 | テーブルが多すぎて長大 |
| paycheck-to-paycheck-budgeting | 287 | 36 | 全体的に長い |
| best-notion-budget-templates-2026 | 279 | 9 | コンテンツは充実、問題なし |
| best-budget-spreadsheet-templates | 273 | 11 | コンテンツは充実、問題なし |
| budget-template-for-freelancers | 269 | 25 | 適切 |

`budget-template-for-remote-workers`（98テーブル行）と `how-to-budget-on-4500-a-month`（78テーブル行）はテーブルが長すぎる。折りたたみ(`<details>`)の検討が必要。

### 修正アクション
- [ ] **優先度LOW**: budget-template-for-remote-workers, how-to-budget-on-4500-a-month の長大テーブルに折りたたみ適用を検討
- [ ] 現時点では深刻な問題ではない（ブログ記事なので多少長くてもOK）

---

## 7. 追加発見事項

### 7-1. テーブルのCSSが完全に未定義

`global.css` に `.post-content table` のスタイルが一切存在しない。テーブルは:
- ボーダーなし
- パディングなし
- 背景色なし
- 横スクロール対応なし

**追加すべきCSS（参考）**:
```css
.post-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 0.92rem;
  overflow-x: auto;
  display: block;
}
.post-content th,
.post-content td {
  padding: 0.6rem 0.8rem;
  border: 1px solid var(--color-border);
  text-align: left;
}
.post-content th {
  background: var(--color-bg-alt);
  font-weight: 600;
  color: var(--color-text);
  white-space: nowrap;
}
.post-content td {
  color: var(--color-text-secondary);
}
.post-content tr:nth-child(even) td {
  background: var(--color-bg-alt);
}
```

### 7-2. reading time がハードコード

BlogPost.astroで `const readingTime = '5 min read';` と固定値。実際の読了時間と乖離がある（91行の記事も287行の記事も "5 min read"）。

### 7-3. og:image のデフォルト画像

heroImageが未設定の場合 `/og-default.png` がフォールバックになるが、このファイルが存在するか未確認。

---

## 優先度別まとめ

### 即座に対応すべき（HIGH）
1. **テーブルCSS追加** — global.cssに `.post-content table/th/td` スタイルを追加（モバイル横スクロール含む）
2. **H1重複削除** — 99記事のマークダウン内 `# タイトル` 行を削除
3. **比較記事にテーブル追加** — notion-vs-excel-budgeting, excel-vs-notion-budget-template 等

### 近日中に対応（MEDIUM）
4. **description短縮** — 62記事のmeta descriptionを120-160文字に
5. **タップターゲット改善** — タグ・フッターリンクのタップ領域拡大
6. **テーブルなし記事へのテーブル追加** — 予算例、比較情報のテーブル化

### 順次対応（LOW）
7. **記事内画像の追加** — 主要記事にスクリーンショット・図解を追加
8. **職業別記事の構造バリエーション化**
9. **reading time の動的計算**
10. **長大テーブルの折りたたみ対応**
11. **グラデーション・フォントの見直し検討**
