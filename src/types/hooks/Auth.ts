import { FormInput } from '@/types/interfaces/Form'
import { AuthContextProps } from '@/types/interfaces/AuthProvider'

type Auth = {
  handleSignUp: (input: FormInput) => Promise<void>
  handleLogIn: (input: FormInput) => Promise<void>
  handleLogOut: () => Promise<void>
  onClose: () => Promise<void>
  isLoggedIn: boolean
}

export default Auth