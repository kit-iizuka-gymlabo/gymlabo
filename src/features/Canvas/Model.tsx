import { useFBX } from '@react-three/drei'

const Model = () => {
  const fbx = useFBX('/Room.fbx')
  return <primitive object={fbx} scale={[0.1,0.1,0.1]}/>
}

export default Model