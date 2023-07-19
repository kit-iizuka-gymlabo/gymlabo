import * as THREE from 'three'
import { useMemo } from 'react'
import { useControls, buttonGroup, button } from 'leva'
import EditableMesh from '@/features/Canvas/EditableMesh'
import { useThree } from '@react-three/fiber'
import { TransformControls} from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'
import { useHotkeys } from '@mantine/hooks';

const target = proxy({ current: null, mode: 0 });
const modes = ['translate', 'rotate', 'scale'];

export default function CollisionEditor() {
  const snap = useSnapshot(target);
  const scene = useThree((target) => target.scene);

  useHotkeys([
    ['Tab', () => target.mode = (target.mode + 1) % modes.length],
  ]);

  const but = useMemo(() => {
    return {
      "新規作成": button((get: any) => alert(`Number value is ${get('number').toFixed(2)}`))
    }
  }, []);

  const buttongroup = useControls(() => ({
    ' ': buttonGroup({
      'translate': ()=> target.mode = 0,
      'rotate':    ()=> target.mode = 1,
      'scale':     ()=> target.mode = 2,
    }),
  }));

  const create = useControls('新規作成 B', but)

  return (
    <>
      <EditableMesh 
        target={target}
        snap={snap}
        name={"aaa"}
        modes={modes}
      />
    </>
  )
}