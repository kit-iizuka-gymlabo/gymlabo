import { FC } from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import HeaderProps from '@/types/interfaces/Header'

const Header: FC<HeaderProps> = ({ isOpen, onOpen, onClose}) => (
  <>
    <Button onClick={onOpen}>
      <HamburgerIcon />
    </Button>
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
       <DrawerCloseButton />
       <DrawerHeader>GYMLABO</DrawerHeader>
       <DrawerBody>

       </DrawerBody>
       <DrawerFooter>

       </DrawerFooter>
      </DrawerContent>
    </Drawer>
    </>
)

export default Header