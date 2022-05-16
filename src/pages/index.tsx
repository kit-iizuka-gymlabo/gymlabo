import { NextPage } from 'next'
import path from '@/configs/model.json'
import Poster from '@/containers/Poster'
import Header from '@/containers/Header'
import DrawCanvas from '@/containers/DrawCanvas'

const IndexPage: NextPage = () => (
  <>
    <Header />
    <DrawCanvas>
      <Poster
        modelPath={path.model_path}
      />
    </DrawCanvas>
  </>
)

export default IndexPage