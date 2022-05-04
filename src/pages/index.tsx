import { NextPage } from 'next'
import { Grid } from '@mui/material'
import DrawCanvas from '@/containers/DrawCanvas'
import DrawerStyle from '@/styles/DrawCanvas'
import ModelModal from '@/components/ModelModal'

const IndexPage: NextPage = () => (
  <>
    <ModelModal />
    <Grid container>
      <Grid item xs={12}>      
        <DrawerStyle>
          <DrawCanvas />
        </DrawerStyle>
      </Grid>
    </Grid>
  </>
)

export default IndexPage