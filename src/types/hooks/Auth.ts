import { FormInput } from '@/types/interfaces/Form'

type Auth = {
  handleSignUp: (input: FormInput) => Promise<void>
  handleLogIn: (input: FormInput) => Promise<void>
  handleLogOut: () => Promise<void>
  onClose: () => Promise<void>
}

export default Auth