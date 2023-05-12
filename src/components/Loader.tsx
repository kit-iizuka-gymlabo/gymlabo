import { FC } from 'react'
import { Progress } from '@chakra-ui/react'
import ChakraWrapper from '@/components/ChakraWrapper'

type Props = {
  progress: number
}

const Loader: FC<Props> = ({ progress }) => (
  <ChakraWrapper>
    <Progress value={progress} />
  </ChakraWrapper>
)

export default Loader