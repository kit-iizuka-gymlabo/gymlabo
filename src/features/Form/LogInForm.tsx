import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useToast } from '@chakra-ui/react'
import Form from '@/features/Form/Form'
import FormLink from '@/features/Form/FormLink'
import useAuth from '@/utils/auth/useAuth'
import { FormInput } from '@/features/Form/type'

const LogInForm: FC = () => {
  const toast = useToast()
  const { handleLogIn, onClose, isLoggedIn } = useAuth()
  const { register, handleSubmit, formState } = useForm<FormInput>()
  const isDisabled = isLoggedIn ? true : false

  useEffect(() => {
    if (isLoggedIn) {
      toast({
        title: '注意：既にログイン済みです',
        position: 'top',
        status: 'warning',
        isClosable: true,
        onCloseComplete: onClose
      })
    }
  }, [])

  return (
    <>
      <Form
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onSubmit={handleLogIn}
        isDisabled={isDisabled}
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