import { FC, memo } from 'react'
import { useGLTF } from '@react-three/drei'
import PosterProps from '@/types/interfaces/Poster'
import Model from '@/components/molecules/Model'

const Poster: FC<PosterProps> = ({ modelPath, onOpen }) => {
  const gltf = useGLTF(modelPath)

  return (
    <>
      <Model 
        onClick={onOpen}
        gltf={gltf}
      />
    </>
  )
}

export default Poster