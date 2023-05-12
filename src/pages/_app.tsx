import { FC } from 'react'
import { AppProps } from 'next/app'
import AuthProvider from '@/utils/auth/AuthProvider'
import Layout from '@/components/Layout'
import { ChakraProvider } from '@chakra-ui/react'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <ChakraProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ChakraProvider> 
  </>
)

export default App