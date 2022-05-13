import { ThreeEvent } from '@react-three/fiber'
import { GLTF } from 'three-stdlib'

type ModelProps = {
  onClick: (e: ThreeEvent<MouseEvent>) => void
  gltf: GLTF
}

export default ModelProps