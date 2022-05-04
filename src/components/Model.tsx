import { FC } from 'react'
import { useGLTF } from '@react-three/drei'
import ModelProps from '@/types/interfaces/Model'
import useModalStore from '@/hooks/useModalStore'

const Model: FC<ModelProps> = ({ model_path }) => {
  const store = useModalStore()
  const gltf = useGLTF(model_path)
  
  return (
    <group>
      <mesh onClick={store.openModal}>
        <primitive 
          object={gltf.scene}
          position={[0,0,0]}
          scale={[0.1,0.1,0.1]}
        />
      </mesh>
    </group>
  )
}

export default Model