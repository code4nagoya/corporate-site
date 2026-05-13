# code4.nagoya

このリポジトリは、`https://code4.nagoya`（および `https://www.code4.nagoya`）で公開している Web サイトのソース管理用です。
公開先は GitHub Pages です。

## 現在の構成

- 配信ディレクトリ: `docs/`
- トップページ: `docs/index.html`
- スタイル: `docs/index.scss`（ビルド済みCSSは `docs/index.css`）
- スクリプト: `docs/index.js`
- データファイル:
  - `docs/production.json`（プロダクト一覧）
  - `docs/event.json`（イベント / タイムライン）

トップページは **fullPage.js** ベースの構成になっており、`index.js` で JSON を読み込んで画面を組み立てます。

## HTTPS / ドメイン

現在は GitHub Pages のカスタムドメイン設定で公開しています。
HTTPS は GitHub Pages 側の証明書機能（Enforce HTTPS）を利用する前提です。

- CNAME 設定ファイル: `docs/CNAME`
- Google Search Console 用ファイル: `docs/googleb85580e68597c4f2.html`

> 以前の「VPS + nginx リバースプロキシ」前提の説明は現在の運用とは一致しません。

## 更新方法（通常）

通常の更新は `docs/` 配下のファイル編集と GitHub への push で行います。

1. このリポジトリを clone
2. 必要なファイルを編集（主に `docs/`）
3. 変更を commit
4. GitHub に push
5. GitHub Pages の反映を確認

## JSON ベースでの更新

### 1) プロダクト一覧を更新する

`docs/production.json` の配列要素を編集します。各要素は以下のキーを使います。

- `title`: プロダクト名
- `description`: 説明文
- `url`: 遷移先 URL
- `icon`: サムネイル画像パス
- `background`: 背景画像パス

### 2) タイムライン（イベント）を更新する

`docs/event.json` の配列要素を編集します。各要素は以下のキーを使います。

- `title`: タイトル
- `content`: 本文
- `date`: 日付表示文字列
- `url`: 詳細ページ URL

### 3) 画像を追加・差し替えする

画像は主に `docs/imgs/` 配下に配置し、JSON から相対パスで参照します。

## Mobirise コンテンツについて

`docs/event/` や `docs/udc/` 配下には、過去イベント向けに Mobirise 由来のコンテンツが含まれています。
該当コンテンツを再編集する場合は、必要に応じて各ディレクトリ内の `project.mobirise` を利用してください。

## License

This repository is licensed under CC0.

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)
