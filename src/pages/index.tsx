import { Grid } from '@mui/material'
import DrawCanvas from '@/containers/DrawCanvas'
import DrawerStyle from '@/styles/Drawcanvas'

const IndexPage = () => (
  <>
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