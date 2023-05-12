import { useEffect, FC } from 'react'
import Forbidden from '@/utils/auth/Forbidden'
import StyledSpinner from '@/components/StyledSpinner'
import useAuth from '@/utils/auth/useAuth'

const AdminTransition: FC = () => {
  const { onClose, isAdmin } = useAuth()

  useEffect(() => {
    isAdmin !== undefined && !isAdmin && onClose()
  }, [isAdmin])

  return (
    <>
      {
        isAdmin === undefined ? <StyledSpinner /> :
        isAdmin === false ? <Forbidden /> :
          <p>admin</p>
      }
    </>
  )
}

export default AdminTransition