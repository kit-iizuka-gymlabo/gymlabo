import { Suspense, useRef } from 'react'
import { NextPage } from 'next'
import { Grid } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky, Preload } from '@react-three/drei'
import path from '@/static/configs/model.json'
import Poster from '@/containers/Poster'
import DrawerStyle from '@/styles/DrawCanvas'

import PosterModal from '@/components/organisms/PosterModal'
import useModalStore from '@/hooks/useModalStore'

const IndexPage: NextPage = () => {
  const store = useModalStore()

  return (
    <>
      <PosterModal
        modalState={store.modalState}
        onClose={store.closeModal}
      />
      <Grid container>
        <Grid item xs={12}>
          <Suspense fallback={null}>   
            <DrawerStyle>
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
              <Poster
                modelPath={path.model_path}
              />
              <Preload all />
            </Canvas> 
            </DrawerStyle>
          </Suspense>   
        </Grid>
      </Grid>
    </>
  )
}

export default IndexPage