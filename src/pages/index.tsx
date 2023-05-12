import { NextPage } from 'next'
import Poster from '@/features/Poster/Poster'
import Header from '@/components/Header'
import DrawCanvas from '@/features/Canvas/DrawCanvas'

const IndexPage: NextPage = () => (
  <>
    <Header />
    <DrawCanvas>
      <Poster
        modelPath={'/kyutech_map.glb'}
      />
    </DrawCanvas>
  </>
)

export default IndexPage