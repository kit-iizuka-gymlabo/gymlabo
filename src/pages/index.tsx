import { useState, useRef } from 'react'
import { NextPage } from 'next'
import Poster from '@/features/Poster/Poster'
import HeaderMenu from '@/components/HeaderMenu'
import DrawCanvas from '@/features/Canvas/DrawCanvas'
import Scene from '@/features/Canvas/Scene'
import StageCollision from '@/features/Canvas/StageCollision'
import CollisionEditor from '@/features/Canvas/CollisionEditor'
import { Physics } from "@react-three/rapier";
import { useHotkeys } from '@mantine/hooks';
import Content from '@/components/Content'
import { CameraControlsImpl, OrbitControls } from '@react-three/drei'
import { CameraManager } from '@/features/Canvas/CameraManager'
import TargetDetail from '@/components/TargetDetail'
import Access from '@/features/Canvas/Access'


const IndexPage: NextPage = () => {
  const [debug, setDebug] = useState<boolean>(false);
  const ref = useRef<CameraControlsImpl>();
  const [target, setTarget] = useState<number>(-1);

  useHotkeys([
    ['alt+shift+D', () => setDebug(!debug)],
  ]);


  return(
    <>
      <HeaderMenu setTarget={setTarget}/>
      <TargetDetail target={target} />
      <DrawCanvas debug={debug}>
        <CameraManager cameraRef={ref} target={target} setTarget={setTarget} />
        <Physics debug={debug}>
          <Scene
            modelPath={'/gymlabo_sub.glb'}
          />
          <StageCollision />
          {debug && <CollisionEditor />}
          <OrbitControls />
          <Content />
          <Access target={target} />
        </Physics>
      </DrawCanvas>
    </>
  )
}

export default IndexPage