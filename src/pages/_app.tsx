// import '../styles/globals.css'
import { AppProps } from 'next/app'
import Layout from 'components/Layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App

// 全ページで必要なしょり
// ページ間の共通レイアウトを持たせることができる
// 共通のstateを持つことができる
// グローバルなCSS(全ページ共通の)を定義できる
// componentDidCatchを利用したカスタムエラー処理
// 各Routeコンポーネントをラップするもの
// ReduxのProvider設定をする