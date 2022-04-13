import { ThreeEvent } from '@react-three/fiber/'

type ModelProps = {
  model_path: string
  modalHandler: (event: ThreeEvent<MouseEvent>) => void
}

export default ModelProps