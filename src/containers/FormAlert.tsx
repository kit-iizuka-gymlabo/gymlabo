import { FC, useRef } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react'
import { useAuthContext } from '@/containers/AuthProvider'
import useAuth from '@/hooks/useAuth'

const FormAlert: FC = () => {
  const cancelRef = useRef(null)
  const { onClose } = useAuth()
  const { user } = useAuthContext()
  const isLoggedIn = !!user

  return (
    <>
      <AlertDialog
        isOpen={isLoggedIn}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              注意 
            </AlertDialogHeader>
            <AlertDialogBody>
              既にログインしています
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                トップに戻る
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default FormAlert