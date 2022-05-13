import { NextPage } from 'next'
import path from '@/configs/model.json'
import Poster from '@/containers/Poster'
import PosterModal from '@/components/organisms/PosterModal'
import DrawCanvas from '@/components/organisms/DrawCanvas'
import { useDisclosure } from '@chakra-ui/react'

const IndexPage: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <PosterModal
        isOpen={isOpen}
        onClose={onClose}
      />  
      <DrawCanvas> 
        <Poster
          modelPath={path.model_path}
          onOpen={onOpen}
        />
      </DrawCanvas>
    </>
  )
}

export default IndexPage