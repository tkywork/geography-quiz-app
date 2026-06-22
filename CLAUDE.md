# quiz-app

一般常識クイズアプリ。HTML/CSS/JavaScript のみで構成されたフロントエンド完結型のシングルページアプリケーション。

## 技術スタック

- **HTML5** — マークアップ・セマンティクス
- **CSS3** — スタイリング（フレームワークなし）
- **JavaScript (Vanilla ES6+)** — ロジック・DOM操作（フレームワーク・ビルドツールなし）
- サーバー不要。ブラウザで `index.html` を直接開けば動作する。

## ファイル構成

```
quiz-app/
├── CLAUDE.md
├── index.html        # エントリーポイント
├── css/
│   └── style.css     # スタイル定義
├── js/
│   └── app.js        # クイズロジック・DOM操作
└── data/
    └── questions.js  # クイズ問題データ
```

## 開発ルール

- 外部ライブラリ・フレームワークは使用しない（Vanilla JS 徹底）
- モジュールバンドラー（Webpack/Vite 等）は使用しない
- `index.html` を直接ブラウザで開いて動作確認する
- CSS はクラスベースで管理し、インラインスタイルは原則使用しない
- JavaScript は `DOMContentLoaded` イベント後に実行する

## クイズ仕様

- 問題形式：4択（選択肢 A〜D）
- 問題数：任意（`data/questions.js` で管理）
- ジャンル：一般常識（日本の地理）
- スコア表示：全問終了後に正答数／総問題数を表示
- リトライ：終了後に最初からやり直せる

## GitHubリポジトリ

https://github.com/tkywork/geography-quiz-app

## 動作確認方法

```
# ブラウザで開くだけ（サーバー不要）
index.html をダブルクリック、または
ブラウザのアドレスバーに file:///d:/workertky/quiz-app/index.html を入力
```
