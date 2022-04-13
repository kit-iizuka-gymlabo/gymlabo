# vkit-icampus

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## アーキテクチャ

- components/ – Presentational components
  - 「見た目」を定義する UI コンポーネント (.tsx) を配置します。
  - ロジックを持たず、渡された props を純粋に描画するコンポーネントです。
  - 何らかのロジック（フックによるデータフェッチや状態管理）を持つコンポーネントは、ここではなく containers ディレクトリに配置してください。
  - このディレクトリ以下は、さらにカテゴリ別に階層化することができます。
- containers/ – Container components
  - 「振る舞い」を定義するコンポーネント (.tsx) を配置します。
  - フック関数などによるデータフェッチ、状態の保存・変更などのロジックを含み、最終的に表示すべきデータを別のコンポーネントの props オブジェクトとして渡します。
  - このディレクトリ以下は、さらにカテゴリ別に階層化することができます。
- hooks/ – Custom hooks
  - React のカスタムフックを配置します（例: useAuth.ts）。
  - アプリケーションのロジックはコンポーネント内には記述せず、できるだけフック関数として実装します。
  - 基本的に、フック関数は comtainers ディレクトリ以下のコンポーネントや、別のフック関数から呼び出されます。
- pages/ – Page components
  - Next.js のページコンポーネント (.tsx)、および、_app.tsx と _document.tsx を配置します。
  - Web サイトアクセス時の URL パスに応じたファイル (xxx.tsx) が読み込まれます。
- types/ – Type definitions
  - 複数ファイルで共有する TypeScript 型定義を配置します。
  - index.ts から export した型は、import { UserInfo } from '../types' のようにインポートできます。
- static/ - Static files
  - 静的ファイルを配置します
- utils/ – Other utilities
  - 上記いずれにも当てはまらないものを配置します。

## 3Dモデル圧縮

```bash
cd src/utils
node compress.js
```

### 圧縮率

1.2MB ⇛ 56.5KB 約-95%

## 仕様

Web + モバイル（PWA)

Navbar
  - 設定
  - 行きたい場所に移動(select box)
  - help

タッチした場所にカメラが移動する
Loading spinner

Page
- 外
- 中
- Admin(編集用)

タッチできるオブジェクトを配置
タッチするとモーダルが出てくる
モーダルに表示する画像はAdminから編集可能

余裕があればアニメーション(雲、鳥、室内には人)