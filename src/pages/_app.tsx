import { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import Layout from '@/containers/Layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App