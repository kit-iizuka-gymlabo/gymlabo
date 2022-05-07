import { FC, useRef, memo } from 'react'
import ModelProps from '@/types/interfaces/Model'

const Model: FC<ModelProps> = memo(({ onClick, gltf }) => (
  <group>
    <mesh onClick={onClick}>
      <primitive 
        object={gltf.scene}
        position={[0,0,0]}
        scale={[0.1,0.1,0.1]}
      />
    </mesh>
  </group>
))

export default Model