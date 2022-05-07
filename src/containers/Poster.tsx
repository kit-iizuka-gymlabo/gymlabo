import { FC, memo } from 'react'
import dynamic from 'next/dynamic'
import { useGLTF } from '@react-three/drei'
import PosterModal from '@/components/organisms/PosterModal'
import PosterProps from '@/types/interfaces/Poster'
import useModalStore from '@/hooks/useModalStore'
import Model from '@/components/molecules/Model'

// const Model = memo(dynamic(() => import('@/components/molecules/Model')))

const Poster: FC<PosterProps> = ({ modelPath }) => {
  const store = useModalStore()
  const gltf = useGLTF(modelPath)

  return (
    <>
      <Model 
        onClick={store.openModal}
        gltf={gltf}
      />
      {/* <PosterModal 
        modalState={store.modalState}
        onClose={store.closeModal}
      /> */}
    </>
  )
}

export default Poster