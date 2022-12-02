import { FC } from 'react'
import {
 /*  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Grid,
  GridItem,
  VStack,
  Divider */
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Grid,
  GridItem,
  VStack,
  FormErrorMessage,
  Divider,
} from '@chakra-ui/react'
import { FormProps } from '@/types/interfaces/Form'
import { Center } from '@react-three/drei'

const Form: FC<FormProps> = ({
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
  onSubmit,
  isDisabled,
  children
}) => (
  <>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <Grid templateColumns='repeat(7, 1fr)' gap={6}>
        <GridItem colSpan={2} />
        <GridItem colSpan={3}> */}
        <VStack
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
          <VStack w={'full'} maxW={'md'} >
          <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          h='75%'
          w='100%'
          p={4}>
            <Grid gap={4} py={4}>
          <VStack mx={'auto'} maxW={'lg'}>
            <Heading fontSize={'4xl'}>
              <VStack>{children[1]}</VStack>
            </Heading>
          </VStack>
          <Stack px={4}>
          <FormControl
            id='email'
            isRequired
            isInvalid={errors.email ? true : false}
          >
            {<FormLabel>メールアドレス</FormLabel>}
            <Input 
              id='email'
              placeholder='example@example.com'
              {...register('email', {
                required: 'メールアドレスは必須です',
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'メールアドレス形式で入力してください。'
                }})
              }
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            id='password'
            isRequired
            isInvalid={errors.password ? true : false}
          >
            <FormLabel>パスワード</FormLabel>
            <Input 
              id='password'
              type='password'
              placeholder='password'
              {...register('password', {
                required: 'パスワードは必須です',
                pattern: {
                  value: /^[a-zA-Z0-9]{8,24}$/,
                  message: 'パスワードは大文字・小文字・数字です'
                },
                minLength: {
                  value: 8,
                  message: '8文字以上入力して下さい'
                },
                maxLength: {
                  value: 24,
                  message: '24文字以内で入力して下さい'
                }
              })
              }
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <VStack>
          <Button
            mt={4}
            w={'full'}
            colorScheme='teal'
            isLoading={isSubmitting}
            type='submit'
            isDisabled={isDisabled}
          >
            送信
          </Button>
          </VStack>
          <VStack py={4}><Divider /></VStack>
          <VStack>{children[0]}</VStack>
          </Stack>
          </Grid>
          </Box>
          </VStack>
          </VStack>
        {/* </GridItem>
      </Grid> */}
    </form>
  </>
)

export default Form
