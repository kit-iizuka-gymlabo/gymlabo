import { FC, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useDisclosure } from '@chakra-ui/react'
import PosterProps from '@/types/interfaces/Poster'
import Model from '@/components/molecules/Model'
import PosterModal from '@/components/organisms/PosterModal'
import ChakraWrapper from '@/components/atoms/ChakraWrapper'

const Poster: FC<PosterProps> = ({ modelPath }) => {
  const gltf = useGLTF(modelPath)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { scene, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, scene);
  useEffect(() => {
    actions.Run?.play();
  }, [actions, scene]);

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