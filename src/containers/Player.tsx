import { useRef, useEffect, FC } from 'react'
import { useFrame, useThree} from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei'
import { BoxBufferGeometry, Mesh, Material, Vector3, Plane} from 'three';
import { useDrag } from "@use-gesture/react";
import Model from '@/components/molecules/Model';

import PlayerProps from '@/types/interfaces/Player'

const Player: FC<PlayerProps> = ({ modelPath }) => {
  const gltf = useGLTF(modelPath)
  const { camera } = useThree();
  camera.position.set(0, 2, 2.5);
  const player = useRef({position: new Vector3(0.0, 0.0, 0.0), rotation: new Vector3(0.0, 0.0, 0.0)});
  const box = useRef({position: new Vector3(0.0, 0.0, 0.0)});

  var _pos = new Vector3();
  const bind = useDrag(
    ({active, event}) => {
      event.ray.intersectPlane(plane, _pos);
      if(box.current!= null) {
        box.current.position.x = _pos.x;
        box.current.position.y = 0;
        box.current.position.z = _pos.z;
      }
    }
  );

  const orbitControls = useRef<OrbitControlsImpl>(null);          // <- これどうしたら赤線消える...？ (あとOrbitControlsのrefが必要なのでOrbitControlsを移動させました -> refが扱えればここに置く必要なし)

  const plane = new Plane(new Vector3(0, 1, 0), 0);  

  const move = (speed: number, radian: number) => {
    player.current.position.x += speed * Math.cos(radian);
    player.current.position.z += speed * Math.sin(radian);
    player.current.rotation.y = -radian;
    orbitControls.current.object.position.x += speed * Math.cos(radian);
    orbitControls.current.object.position.z += speed * Math.sin(radian);
    console.log(orbitControls.current.object.position);
    camera.lookAt(player.current.position);
    orbitControls.current.target = player.current.position;
  }

  const calcDirection = () => {
    const _box = new Vector3(box.current.position.x, box.current.position.y, box.current.position.z);
    const _player = new Vector3(player.current.position.x, player.current.position.y, player.current.position.z);
    var speed: number = 0.0;
    var radian: number = 0.0;
    speed = 2.2;
    radian = Math.atan2(_box.z - _player.z, _box.x - _player.x);
    return radian;
  }

  const cameraMove = () => {
    var orbitAngle = orbitControls.current.getAzimuthalAngle();
    var playerAngle = player.current.rotation.y;
    var distance = (player.current.rotation.y-Math.PI/2) - orbitAngle;
    orbitControls.current.setAzimuthalAngle( orbitAngle += 0.2 * distance);
  }

  // delta をかけることによって速度がデバイスの処理速度に依存しない
  useFrame((_, delta) => {
    if(Math.abs(box.current.position.x - player.current.position.x) + Math.abs(box.current.position.z - player.current.position.z) > 0.2){
      const radian = calcDirection();
      if(radian != undefined) move(delta*2.2, radian);
    }
    cameraMove();
  });
  
  return (
    <>
    <OrbitControls
      ref={orbitControls}
      enableRotate={false}
    />
      <Model 
        gltf={gltf}
        ref={player}
      />
      <mesh ref={box}  position={[0, 0.25, 0]}>
        <boxGeometry args={[0.2, 0.5, 0.2]} />
        <meshPhongMaterial color="yellow" />
      </mesh>
      <mesh rotation-x={Math.PI * -0.5} {...bind()}>
      <planeBufferGeometry  args={[1000, 1000]}/>
      <meshPhongMaterial color="white" />
      </mesh>
    </>
  )
}

export default Player