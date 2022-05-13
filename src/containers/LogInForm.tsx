import { FC, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthContext } from '@/containers/AuthProvider'
import Form from '@/components/organisms/Form'
import FormLink from '@/components/atoms/FormLink'
import useAuth from '@/hooks/useAuth'
import { FormInput } from '@/types/interfaces/Form'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react'

const LogInForm: FC = () => {
  const cancelRef = useRef(null)
  const { handleLogIn, onClose } = useAuth()
  const { user } = useAuthContext()
  const { register, handleSubmit, formState } = useForm<FormInput>()
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
      <Form
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onSubmit={handleLogIn}
      >
        <FormLink
          url={'/SignUp'}
          text={'ユーザー登録はこちら'}
        />
      </Form>
    </>
  )
}

export default LogInForm