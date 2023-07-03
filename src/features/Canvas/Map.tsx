import { FC } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

type Props = {
  modelPath: string
}

const Map: FC<Props> = ({ modelPath }) => {
  const gltf = useGLTF(modelPath)

  return (
    <>
      <RigidBody position={[0, 0, 0]} type='fixed'>
        <mesh>
          <primitive 
            object={gltf.scene}
            scale={[1, 1, 1]}
          />
        </mesh>
      </RigidBody>
    </>
  )
}
export default Map