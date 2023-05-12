import { FormInput } from '@/features/Form/type'
import type { User } from 'firebase/auth'

export type Auth = {
  handleSignUp: (input: FormInput) => Promise<void>
  handleLogIn: (input: FormInput) => Promise<void>
  handleLogOut: () => Promise<void>
  onClose: () => Promise<void>
  isLoggedIn: boolean
  isAdmin: boolean | undefined 
}

export type AuthButtonProps = {
  isLoggedIn: boolean,
  handleLogOut: () => Promise<void>
}

export type UserType = User | null

export type AuthContextProps = {
  user: UserType
  isAdmin: boolean
}