import { useRouter } from 'next/router'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { app } from '@/utils/firebase'
import Auth from '@/types/hooks/Auth'
import { FormInput } from '@/types/interfaces/Form'

const useAuth = (): Auth => {
  const router = useRouter()
  const auth = getAuth(app)

  const handleSignUp = async(input: FormInput) => {
    await createUserWithEmailAndPassword(auth, input.email, input.password)
    router.push('/')
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
    onClose
  }
}

export default useAuth