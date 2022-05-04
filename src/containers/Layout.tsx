import { FC } from 'react'
import Meta from '@/components/Meta'
import Header from '@/containers/Header'
import meta from '@/static/configs/meta.json'
import HOCProps from '@/types/interfaces/HOC'

const Layout: FC<HOCProps> = ({ children }) => (
  <> 
    <Meta 
      detail={meta.detail}
      path={meta.path}
    />
    <Header />
    {children}
  </>
)

export default Layout