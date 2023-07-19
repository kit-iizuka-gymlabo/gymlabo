import { FC  } from 'react'
import Meta from '@/components/Meta'

const Layout: FC = (props: any) => (
  <> 
    <Meta 
      title='GYMLABO'
      description='GYMLABOの3Dマップ'
      root='http://localhost:3000'
      icon='/gymlab.jpg'
      favicon='/favicon.ico'
      thumbnail='/test.png'
    />
  </>
)

export default Layout