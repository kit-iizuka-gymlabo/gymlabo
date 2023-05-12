import { FC } from 'react'
import { useGLTF } from '@react-three/drei'
import { useDisclosure } from '@chakra-ui/react'
import { PosterProps } from '@/features/Poster/type'
import PosterModal from '@/features/Poster/PosterModal'
import ChakraWrapper from '@/components/ChakraWrapper'

const Poster: FC<PosterProps> = ({ modelPath }) => {
  const gltf = useGLTF(modelPath)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <group>
        <mesh onClick={onOpen}>
          <primitive 
            object={gltf.scene}
            position={[0,0,0]}
            scale={[0.1,0.1,0.1]}
          />
        </mesh>
      </group>
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