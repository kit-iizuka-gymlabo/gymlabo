import { Suspense, useState, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, TransformControls, Wireframe } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'
import { useControls } from 'leva'



export default function EditableMesh({ control, snap, target, name, modes, ...props }: any) {
  const ref = useRef();
  const [datas, set] = useControls(() => ({
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale:    [1, 1, 1],
  }))
  
  function syncPosition(){
    set({
      position: [ref.current?.position.x, ref.current?.position.y, ref.current?.position.z],
      rotation: [ref.current?.rotation.x, ref.current?.rotation.y, ref.current?.rotation.z],
      scale:    [ref.current?.scale.x, ref.current?.scale.y, ref.current?.scale.z],
    })
  }

  return (
    <>
      <mesh
        ref={ref}
        onClick={(e) => {e.stopPropagation(); target.current = name; console.log(target.current)}}
        onPointerMissed={(e) => { if(e.type === 'click'){e.stopPropagation(); target.current = null; console.log(target.current)}}}
        name={name}
        position={datas.position}
        rotation={datas.rotation}
        scale={datas.scale}
      >
        <boxBufferGeometry/>
        <meshStandardMaterial/>
        <Wireframe dashInvert simplify stroke="white" backfaceStroke="white" dash  fillMix={1} fill={target.current === name ?  "#FF0075" : "#9BA3EB"} fillOpacity={0.3} />
      </mesh>
      {snap.current === name && <TransformControls onObjectChange={(e)=>{syncPosition()}} object={ref} mode={modes[snap.mode]} />}
    </>
  )
}
