import { FC } from 'react'
import {
  Flex,
  Box,
  Button,
  ButtonGroup,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import FormLink from '@/components/atoms/FormLink'
import useAuth from '@/hooks/useAuth'

const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { handleLogOut } = useAuth()

  return (
    <>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box>
          <Button
            onClick={onOpen}
            colorScheme='blackAlpha'
            size='lg'
            zIndex={1}
          >
            <HamburgerIcon />
          </Button>
        </Box>
        <Spacer />
        <ButtonGroup gap='2' zIndex={1}>
          <Button colorScheme='teal' variant='outline'>
            <FormLink url='/SignUp' text='SignUp'/>
          </Button>
          <Button colorScheme='teal' variant='outline'>
            <FormLink url='/LogIn' text='LogIn'/>
          </Button>
        </ButtonGroup>
      </Flex>
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
          <Button onClick={handleLogOut}>ログアウト</Button>
        </DrawerBody>
        <DrawerFooter>

        </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header