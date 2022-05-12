import { FC } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import Meta from '@/components/organisms/Meta'
import Header from '@/components/organisms/Header'
import meta from '@/static/configs/meta.json'
import LayoutProps from '@/types/interfaces/Layout'

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <> 
      <Meta 
        detail={meta.detail}
        path={meta.path}
      />
      <Header
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
      {children}
    </>
  )
}

export default Layout