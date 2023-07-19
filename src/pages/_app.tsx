import { FC } from 'react'
import { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { ChakraProvider } from '@chakra-ui/react'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <ChakraProvider>
        <Layout/>
          <Component {...pageProps} />
    </ChakraProvider> 
  </>
)

export default App