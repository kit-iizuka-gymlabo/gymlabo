import { FC } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import FormLink from '@/features/Form/FormLink'
import { AuthButtonProps } from '@/utils/auth/type'

const AuthButton: FC<AuthButtonProps> = ({ isLoggedIn, handleLogOut }) => (
  <>
    <ButtonGroup gap='2' zIndex={1}>
      {isLoggedIn ?
        <Button colorScheme='teal' onClick={handleLogOut}>
          LogOut
        </Button> : 
      <>
        <Button colorScheme='teal' variant='outline'>
          <FormLink url='/SignUp' text='SignUp'/>
        </Button>
        <Button colorScheme='teal' variant='outline'>
          <FormLink url='/LogIn' text='LogIn'/>
        </Button>
      </>
      }
    </ButtonGroup>
  </>
)

export default AuthButton