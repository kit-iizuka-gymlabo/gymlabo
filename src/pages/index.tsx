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
        modelPath={path.model_path}
      />
      <Player />
    </DrawCanvas>
  </>
)

export default IndexPage