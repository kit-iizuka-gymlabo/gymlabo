import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useToast } from '@chakra-ui/react'
import Form from '@/features/Form/Form'
import FormLink from '@/features/Form/FormLink'
import useAuth from '@/utils/auth/useAuth'
import { FormInput } from '@/features/Form/type'

const SignUpForm: FC = () => {
  const toast = useToast()
  const { handleSignUp, onClose, isLoggedIn } = useAuth()
  const { register, handleSubmit, formState } = useForm<FormInput>()

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
        onSubmit={handleSignUp}
        isDisabled={false}
      >
        <FormLink 
          url={'/LogIn'}
          text={'既に登録している人はこちら'}
        />
      </Form>
    </>
  )
}

export default SignUpForm