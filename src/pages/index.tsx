import { Suspense } from 'react'
import { NextPage } from 'next'
import { useDisclosure } from '@chakra-ui/react'
import { useProgress } from '@react-three/drei'
import path from '@/configs/model.json'
import Poster from '@/containers/Poster'
import PosterModal from '@/components/organisms/PosterModal'
import DrawCanvas from '@/components/organisms/DrawCanvas'
import Loader from '@/components/organisms/Loader'


const IndexPage: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { progress } = useProgress()

  return (
    <>
      <PosterModal
        isOpen={isOpen}
        onClose={onClose}
      />  
      <DrawCanvas>
        <Suspense fallback={<Loader progress={progress}/>}>
          <Poster
            modelPath={path.model_path}
            onOpen={onOpen}
          />
        </Suspense>
      </DrawCanvas>
    </>
  )
}

export default IndexPage