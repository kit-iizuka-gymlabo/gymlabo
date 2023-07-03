import { FC, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky, Preload, useProgress } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import Loader from '@/components/Loader'

const DrawCanvas: FC = ({ children }) => {
  const { progress } = useProgress()

  return (
    <>
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          width: '100vw',
          height: '100vh'
        }}
      >
        <Sky />
        <ambientLight intensity={0.5}/>
        <directionalLight
          position={[10,20,0]}
          intensity={1}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          castShadow
        />
        <gridHelper />
        <Suspense fallback={<Loader progress={progress}/>}>
          <Physics>
          {children}
          </Physics>
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  )
}

export default DrawCanvas