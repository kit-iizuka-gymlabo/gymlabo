import { FC } from 'react'
import ModelProps from '@/types/interfaces/Model'
import { forwardRef } from '@chakra-ui/react'

const Model: FC<ModelProps> = forwardRef(({ gltf }, player) => (
  <mesh scale={[0.3, 0.3, 0.3]} ref={player}>
    <primitive
      object={gltf.scene}
    />
  </mesh>
))

export default Model