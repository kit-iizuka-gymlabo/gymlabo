import { useRef, useEffect } from 'react'
import { useFrame, useThree} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import { useKey } from 'react-use'
import { BoxBufferGeometry, Mesh, Material, Vector3 } from 'three';


type PlayerPositionRef = Mesh<BoxBufferGeometry, Material | Material[]>;

// キーが押されていることを表す
var isForwardMove: boolean = false;
var isRightMove: boolean = false;
var isBackMove:  boolean = false;
var isLeftMove:  boolean = false;


const Player = () => {

  const { camera } = useThree();
  const playerPos = useRef<PlayerPositionRef>(null);
  const orbitControls = useRef<OrbitControls>();          // <- これどうしたら赤線消える...？ (あとOrbitControlsのrefが必要なのでOrbitControlsを移動させました -> refが扱えればここに置く必要なし)

  const speed: number = 2.2;
  const vec = new Vector3();  // カメラとプレイヤーの角度・位置計算用

  const moveForward = (distance: number) => {
    if(playerPos.current != null){
      vec.setFromMatrixColumn(camera.matrix, 0);
      vec.crossVectors(camera.up, vec);
      camera.position.addScaledVector(vec, distance)
      orbitControls.current.target.addScaledVector(vec, distance);
      playerPos.current.position.addScaledVector(vec, distance);
      playerPos.current.rotation.y = orbitControls.current.getAzimuthalAngle();
    }
  };

  const moveRight = (distance: number) => {
    if(playerPos.current != null){
      vec.setFromMatrixColumn(camera.matrix, 0);
      camera.position.addScaledVector(vec, distance)
      orbitControls.current.target.addScaledVector(vec, distance);
      playerPos.current.position.addScaledVector(vec, distance);
      playerPos.current.rotation.y = orbitControls.current.getAzimuthalAngle();
    }
  };

  // キー操作 (もっとシンプルにできるはず)
  useKey('w', ()=>{isForwardMove = true}, {event: 'keydown'}); useKey('w', ()=>{isForwardMove = false;}, {event: 'keyup'});
  useKey('a', ()=>{isLeftMove    = true}, {event: 'keydown'}); useKey('a', ()=>{isLeftMove  = false},    {event: 'keyup'}); 
  useKey('s', ()=>{isBackMove    = true}, {event: 'keydown'}); useKey('s', ()=>{isBackMove  = false},    {event: 'keyup'});
  useKey('d', ()=>{isRightMove   = true}, {event: 'keydown'}); useKey('d', ()=>{isRightMove = false},    {event: 'keyup'}); 

  useKey('ArrowUp',    ()=>{isForwardMove = true}, {event: 'keydown'}); useKey('ArrowUp',    ()=>{isForwardMove = false;}, {event: 'keyup'});
  useKey('ArrowLeft',  ()=>{isLeftMove    = true}, {event: 'keydown'}); useKey('ArrowLeft',  ()=>{isLeftMove  = false},    {event: 'keyup'}); 
  useKey('ArrowDown',  ()=>{isBackMove    = true}, {event: 'keydown'}); useKey('ArrowDown',  ()=>{isBackMove  = false},    {event: 'keyup'});
  useKey('ArrowRight', ()=>{isRightMove   = true}, {event: 'keydown'}); useKey('ArrowRight', ()=>{isRightMove = false},    {event: 'keyup'}); 

  // delta をかけることによって速度がデバイスの処理速度に依存しない
  useFrame((_, delta) => {
      if(isForwardMove) moveForward(delta * speed);
      if(isBackMove)    moveForward(-delta * speed);
      if(isRightMove)   moveRight(delta * speed);
      if(isLeftMove)    moveRight(-delta * speed);
  });

  return (
    <>
    <OrbitControls
      ref={orbitControls}
      target={playerPos.current?.position}
      enablePan={false}
      enableZoom={true}
      enableRotate={true}
      minPolarAngle={Math.PI/3}
      maxPolarAngle={Math.PI/2}
    />
      <mesh ref={playerPos} position={[0, 0.25, 0]}>
        <boxGeometry args={[0.2, 0.5, 0.2]} />
        <meshPhongMaterial color="yellow" />
      </mesh>
    </>
  )
}

export default Player