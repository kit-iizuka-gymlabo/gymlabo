import { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import Layout from '@/containers/Layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <CssBaseline />
      <Component {...pageProps} />    
    </Layout>
  )
}

export default App