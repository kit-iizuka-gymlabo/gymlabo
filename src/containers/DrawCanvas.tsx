import { FC } from 'react'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky, Preload, Stage } from '@react-three/drei'
import path from '@/static/configs/model.json'

const Model = dynamic(() => import('@/components/Model'), { ssr: false })

const DrawCanvas: FC = () => {
  return (
    <>
      <Canvas camera={{ position: [0,20,0] }}>
        <Sky />
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minPolarAngle={Math.PI/3}
          maxPolarAngle={Math.PI/2}
        />
        <ambientLight intensity={0.5}/>
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
          />
        </Stage>
        <Preload all />
      </Canvas>
    </>
  )
}

export default DrawCanvas