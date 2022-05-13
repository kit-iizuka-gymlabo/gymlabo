import { FC } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import Meta from '@/components/organisms/Meta'
import Header from '@/components/organisms/Header'
import meta from '@/configs/meta.json'
import useAuth from '@/hooks/useAuth'

const Layout: FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { handleLogOut } = useAuth()

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
        handleLogOut={handleLogOut}
      />
      {children}
    </>
  )
}

export default Layout