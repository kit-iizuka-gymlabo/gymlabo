import { FC } from 'react'
import { Html } from '@react-three/drei'
import { Progress } from '@chakra-ui/react'
import LoaderProps from '@/types/interfaces/Loader'

const Loader: FC<LoaderProps> = ({ progress }) => (
  <Html center>
    <Progress value={progress} />
  </Html>
)

export default Loader