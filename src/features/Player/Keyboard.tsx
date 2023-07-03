import { FC } from 'react'
import { KeyboardControls } from '@react-three/drei'

const Keyboard: FC = ({ children }) => {
  return (
    <KeyboardControls map={[
      { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
      { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
      { name: 'left', keys: ['ArrowLeft', 'KeyA'] },
      { name: 'right', keys: ['ArrowRight', 'KeyD'] },
      { name: 'jump', keys: ['Space'] }
    ]}>
        {children}
    </KeyboardControls>
  )
}

export default Keyboard