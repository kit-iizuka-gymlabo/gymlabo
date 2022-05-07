import { FC } from 'react'
import Meta from '@/components/organisms/Meta'
import Header from '@/components/organisms/Header'
import useDrawerStore from '@/hooks/useDrawerStore'
import meta from '@/static/configs/meta.json'
import LayoutProps from '@/types/interfaces/Layout'

const Layout: FC<LayoutProps> = ({ children }) => {
  const store = useDrawerStore()

  return (
    <> 
      <Meta 
        detail={meta.detail}
        path={meta.path}
      />
      <Header
        drawerState={store.drawerState}
        openDrawer={store.openDrawer}
        closeDrawer={store.closeDrawer}
      />
      {children}
    </>
  )
}

export default Layout