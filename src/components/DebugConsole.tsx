import React from 'react'
import { useControls } from 'leva'

export default function DebugConsole() {
  const { name, aNumber } = useControls({ name: 'World', aNumber: 0 })
  return (
    <div>
      Hey {name}, hello! {aNumber}
    </div>
  )
}
