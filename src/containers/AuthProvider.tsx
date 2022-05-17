import { useState, useEffect, FC } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'
import { AuthContext } from '@/hooks/useAuth'
import { app } from '@/utils/firebase'
import { UserType } from '@/types/interfaces/AuthProvider'

const AuthProvider: FC = ({ children }) => {
  const router = useRouter()
  const auth = getAuth(app)
  const [user, setUser] = useState<UserType>(null)
  const isAvailableForViewing =
    router.pathname === '/LogIn' ||
    router.pathname === '/SignUp'
  const value = { user }

  useEffect(() => {
    const authStateChanged = onAuthStateChanged(auth, async (user) => {
      setUser(user)
      !user && !isAvailableForViewing && (await router.push('/LogIn'))
    })
    return () => {
      authStateChanged()
    }
  }, [])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider