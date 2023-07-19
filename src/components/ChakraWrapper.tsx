import { FC } from 'react'
import { Html } from '@react-three/drei'
import { ChakraProvider } from '@chakra-ui/react'

const ChakraWrapper: FC = ({ children }: any) => (
  <>
    <Html>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </Html>
  </>
)

export default ChakraWrapper