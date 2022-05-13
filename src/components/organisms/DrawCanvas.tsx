import { FC } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky, Preload } from '@react-three/drei'
import DrawCanvasProps from '@/types/interfaces/DrawCanvas'

const DrawCanvas: FC<DrawCanvasProps> = ({ children }) => (
  <>
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        width: '100vw',
        height: '100vh'
      }}
      camera={{
        position: [0,20,0]
      }}
    >
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
      {children}
      <Preload all />
    </Canvas> 
  </>
)

export default DrawCanvas