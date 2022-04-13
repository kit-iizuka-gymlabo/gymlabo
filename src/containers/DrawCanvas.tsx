import { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky, Preload, Stage } from '@react-three/drei'
import { Modal, CircularProgress } from '@mui/material'
import ModelCard from '@/components/ModelCard'
import path from '@/static/configs/model.json'

const Model = dynamic(() => import('@/components/Model'))

const DrawCanvas = () => {
  const [modalState, setModalOpen] = useState(false)

  const handleModalToggle = () => {
    setModalOpen(!modalState)
  }

  return (
    <>
      <Modal
        open={modalState}
        onClose={handleModalToggle}
      >
        <ModelCard />
      </Modal>
      <Canvas camera={{ position: [0,20,0] }}>
        <Sky />
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minPolarAngle={Math.PI/3}
          maxPolarAngle={Math.PI/2}
        />
        <ambientLight intensity={10}/>
        <directionalLight
          position={[10,20,0]}
          intensity={1}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          castShadow
        />
        <gridHelper />
        <Stage>
          <Model 
            model_path={path.model_path}
            modalHandler={handleModalToggle}
          />
        </Stage>
        <Preload all />
      </Canvas>
    </>
  )
}

export default DrawCanvas