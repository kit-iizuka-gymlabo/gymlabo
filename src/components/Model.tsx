import { useRef } from 'react'
import { useGLTF, useFBX } from '@react-three/drei'
import ModelProps from '@/types/interfaces/Model'

const Model = ({ model_path, modalHandler }: ModelProps) => {
  const ref = useRef()
  const gltf = useGLTF(model_path)
  return (
    <group>
      <mesh ref={ref} onClick={modalHandler}>
        <primitive 
          object={gltf.scene}
          position={[0,0,0]}
          scale={[0.1,0.1,0.1]}
        />
      </mesh>
    </group>

  )
}

export default Model;