import { useRef } from 'react'
import { Vector3 } from 'three'
import { useThree, useFrame } from '@react-three/fiber'
import { useKeyboardControls, PointerLockControls } from '@react-three/drei'
import { PointerLockControls as PointerLockControlsImpl } from 'three-stdlib'
import { RigidBody, RapierRigidBody, CapsuleCollider } from '@react-three/rapier'

//Use global variable temporary
//Implement below variable as state with custom hooks or zustand
const SPEED = 1
const direction = new Vector3()
const frontVector = new Vector3()
const sideVector = new Vector3()
const rotation = new Vector3()

const Player = () => {
  const camera = useThree(state => state.camera)
  const rigidBody = useRef<RapierRigidBody>(null!)
  const controlsRef = useRef<PointerLockControlsImpl>(null!)
  const isLocked = useRef(false)
  const [_, get] = useKeyboardControls()

  useFrame((state) => {
    const { forward, backward, left, right, jump } = get()
    const velocity = rigidBody.current.linvel()

    const rigidPos = rigidBody.current.translation() as Vector3
    state.camera.position.set(rigidPos.x, rigidPos.y, rigidPos.z)

    frontVector.set(0, 0, Number(backward) - Number(forward))
    sideVector.set(Number(left) - Number(right), 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(state.camera.rotation)

    rigidBody.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z }, true)
  })
  
  return (
    <>
      <PointerLockControls 
        onUpdate={() => {
          if(controlsRef.current) {
            controlsRef.current.addEventListener('lock', () => {
              isLocked.current = true
            })
            controlsRef.current.addEventListener('unlock', () => {
              isLocked.current = false
          })}
        }}
        ref={controlsRef}
      />
      <RigidBody ref={rigidBody} position={[-1, 0.4, -1]}>
        <CapsuleCollider args={[0.5, 0.5]}/>
      </RigidBody>
    </>
  )
}

export default Player