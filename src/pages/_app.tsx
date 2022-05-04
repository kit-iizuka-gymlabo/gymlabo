import { FC } from 'react'
import { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import Layout from '@/containers/Layout'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <CssBaseline />
    <Component {...pageProps} />    
  </Layout>
)

export default App