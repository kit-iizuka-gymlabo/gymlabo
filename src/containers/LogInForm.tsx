import { FC } from 'react'
import { useForm } from 'react-hook-form'
import Form from '@/components/organisms/Form'
import FormLink from '@/components/atoms/FormLink'
import FormAlert from '@/containers/FormAlert'
import useAuth from '@/hooks/useAuth'
import { FormInput } from '@/types/interfaces/Form'

const LogInForm: FC = () => {
  const { handleLogIn } = useAuth()
  const { register, handleSubmit, formState } = useForm<FormInput>()

  return (
    <>
      <FormAlert />
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