import React, { ReactNode } from 'react'
import { Header, Footer, Meta } from 'components'
import meta from 'static/configs/meta.json'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Meta 
      detail={meta.detail}
      path={meta.path}
    />
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout