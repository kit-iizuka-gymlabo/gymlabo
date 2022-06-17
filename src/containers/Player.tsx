import { useRef, FC } from 'react'
import { useFrame, useThree} from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Vector3, Plane} from 'three';
import { useDrag } from "@use-gesture/react";
import Model from '@/components/molecules/Model';
import PlayerProps from '@/types/interfaces/Player'

const Player: FC<PlayerProps> = ({ modelPath }) => {
  const gltf = useGLTF(modelPath)
  const { camera } = useThree();
  const player = useRef({position: new Vector3(0.0, 0.0, 0.0), rotation: new Vector3(0.0, 0.0, 0.0)});
  camera.position.set(player.current.position.x, 1, player.current.position.z+1);
  const box = useRef({position: new Vector3(0.0, 0.0, 0.0)});

  var _pos = new Vector3();
  const bind = useDrag(
    ({event}) => {
      console.log(event);
      _pos.x = event.intersections[0].point.x;
      _pos.y = event.intersections[0].point.y;
      _pos.z = event.intersections[0].point.z;
      if(box.current!= null) {
        box.current.position.x = _pos.x;
        box.current.position.y = 0.1;
        box.current.position.z = _pos.z;
      }
    }
  );

  const orbitControls = useRef<OrbitControlsImpl>(null);          // <- これどうしたら赤線消える...？ (あとOrbitControlsのrefが必要なのでOrbitControlsを移動させました -> refが扱えればここに置く必要なし)

  const plane = new Plane(new Vector3(0, 1, 0), 0);  

  const move = (speed: number, theta: number) => {
    player.current.position.x += speed * Math.cos(theta);
    player.current.position.z += speed * Math.sin(theta);
    player.current.rotation.y = -(theta+Math.PI/2);
    orbitControls.current.object.position.x += speed * Math.cos(theta);
    orbitControls.current.object.position.z += speed * Math.sin(theta);
    camera.lookAt(player.current.position);
    orbitControls.current.target = player.current.position;
  }

  const calcDirection = (): [number, number]  => {
    const _box = new Vector3(box.current.position.x, box.current.position.y, box.current.position.z);
    const _player = new Vector3(player.current.position.x, player.current.position.y, player.current.position.z);
    var speed: number = 0.0;
    var theta: number = 0.0;
    speed =  Math.sqrt(Math.pow(_box.z - _player.z, 2) + Math.pow(_box.x - _player.x, 2));
    theta = Math.atan2(_box.z - _player.z, _box.x - _player.x);
    return [theta, speed*2];
  }

  // delta をかけることによって速度がデバイスの処理速度に依存しない
  useFrame((_, delta) => {
    if(Math.abs(box.current.position.x - player.current.position.x) + Math.abs(box.current.position.z - player.current.position.z) > 0.2){
      var theta : number, speed: number;
      [theta, speed] = calcDirection();
      if(speed > 3.0) speed = 3.0;
      if(theta != undefined) move(delta*speed, theta);
    }
    orbitControls.current.setAzimuthalAngle( player.current.rotation.y );
  });
  
  return (
    <>
    <OrbitControls
      ref={orbitControls}
      enableRotate={false}
      dampingFactor={0.008}
    />
      <Model 
        gltf={gltf}
        ref={player}
      />
      <mesh ref={box}  position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.05, 0.06, 0.05]} />
        <meshPhongMaterial color="red" />
      </mesh>
      <mesh rotation-x={Math.PI * -0.5} {...bind()}>
      <planeBufferGeometry  args={[1000, 1000]}/>
      <meshPhongMaterial color="white" />
      </mesh>
    </>
  )
}

export default Player