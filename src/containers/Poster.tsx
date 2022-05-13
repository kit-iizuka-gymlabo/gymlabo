import { FC } from 'react'
import { useGLTF } from '@react-three/drei'
import { useDisclosure } from '@chakra-ui/react'
import PosterProps from '@/types/interfaces/Poster'
import Model from '@/components/molecules/Model'
import PosterModal from '@/components/organisms/PosterModal'
import ChakraWrapper from '@/components/atoms/ChakraWrapper'

const Poster: FC<PosterProps> = ({ modelPath }) => {
  const gltf = useGLTF(modelPath)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Model 
        onClick={onOpen}
        gltf={gltf}
      />
      <ChakraWrapper>
        <PosterModal
          isOpen={isOpen}
          onClose={onClose}
        />
      </ChakraWrapper>
    </>
  )
}

export default Poster