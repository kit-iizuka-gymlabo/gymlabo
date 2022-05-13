import { NextPage } from 'next'
import path from '@/configs/model.json'
import Poster from '@/containers/Poster'
import DrawCanvas from '@/components/organisms/DrawCanvas'

const IndexPage: NextPage = () => (
  <>
    <DrawCanvas>
      <Poster
        modelPath={path.model_path}
      />
    </DrawCanvas>
  </>
)

export default IndexPage