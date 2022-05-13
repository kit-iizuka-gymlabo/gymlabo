import { FC } from 'react'
import { useForm } from 'react-hook-form'
import Form from '@/components/organisms/Form'
import FormLink from '@/components/atoms/FormLink'
import FormAlert from '@/containers/FormAlert'
import useAuth from '@/hooks/useAuth'
import { FormInput } from '@/types/interfaces/Form'

const SignUpForm: FC = () => {
  const { handleSignUp } = useAuth()
  const { register, handleSubmit, formState } = useForm<FormInput>()


  return (
    <>
      <FormAlert />
      <Form
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onSubmit={handleSignUp}
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