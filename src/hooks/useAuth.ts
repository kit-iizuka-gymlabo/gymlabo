import { createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { app } from '@/utils/firebase'
import Auth from '@/types/hooks/Auth'
import { FormInput } from '@/types/interfaces/Form'
import { AuthContextProps } from '@/types/interfaces/AuthProvider'

export const AuthContext = createContext<Partial<AuthContextProps>>({})

const useAuth = (): Auth => {
  const toast = useToast()
  const router = useRouter()
  const auth = getAuth(app)
  const context = useContext(AuthContext)
  const { user } = context
  const isLoggedIn = !!user

  const handleSignUp = async(input: FormInput) => {
    await createUserWithEmailAndPassword(auth, input.email, input.password)
    .then(() => {
      router.push('/')
    })
    .catch((error) => {
      if (`${error.message}`.indexOf('already') !== -1) {
        toast({
          title: '注意：既に登録済みのアカウントです',
          position: 'top',
          status: 'warning',
          isClosable: true,
          onCloseComplete: onClose
        }) 
      }
    })
  }

  const handleLogIn = async(input: FormInput) => {
    await signInWithEmailAndPassword(auth, input.email, input.password)
    router.push('/')
  }

  const handleLogOut = async() => {
    await signOut(auth)
    await router.push('/')
  }

  const onClose = async() => {
    await router.push('/')
  }

  return {
    handleSignUp,
    handleLogIn,
    handleLogOut,
    onClose,
    isLoggedIn
  }
}

export default useAuth