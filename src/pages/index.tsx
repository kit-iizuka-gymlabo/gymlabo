import { NextPage } from 'next'
import path from '@/configs/model.json'
import Poster from '@/containers/Poster'
import Header from '@/containers/Header'
import DrawCanvas from '@/containers/DrawCanvas'
import Player from '@/containers/Player'

const IndexPage: NextPage = () => (
  <>
    <Header />
    <DrawCanvas>
      <Poster
        modelPath={path.posters[0].model_path}
      />
      <Player
        modelPath={path.player.model_path}
      />
    </DrawCanvas>
  </>
)

export default IndexPage