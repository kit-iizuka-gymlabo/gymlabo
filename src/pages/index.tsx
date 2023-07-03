import { NextPage } from 'next'
import Map from '@/features/Canvas/Map'
import Player from '@/features/Player/Player'
import Keyboard from '@/features/Player/Keyboard'
import Poster from '@/features/Poster/Poster'
import Header from '@/components/Header'
import DrawCanvas from '@/features/Canvas/DrawCanvas'

const IndexPage: NextPage = () => (
  <>
    <Header />
    <DrawCanvas>
      <Map modelPath='/gymlabo.glb'/>
      <Keyboard>
        <Player />
      </Keyboard>
    </DrawCanvas>
  </>
)

export default IndexPage