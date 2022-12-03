import { FC } from 'react'
import {
  Image,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  chakra,
  Container,
  Stack,
  Text,
  Flex,
  Spacer,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,  
  Divider
} from '@chakra-ui/react'
import PosterModalProps from '@/types/interfaces/PosterModal'

const PosterModal: FC<PosterModalProps> = ({ isOpen, onClose }) => (
  <>
    <Modal isOpen={isOpen} onClose={onClose} size={'3xl'} scrollBehavior={'inside'}>
      <ModalOverlay backdropFilter='blur(2px)'/>
        <ModalContent>
          <ModalCloseButton/>
          <ModalHeader mt={'8px'} align={'center'} fontSize={{ base: '35px'}}>GYMLABO</ModalHeader>
          <ModalBody>
            <Stack align={'center'}>
              <Image
                rounded={'md'}
                alt={'GYMLABO Image'}
                src={'/gymlab.jpg'}
                fit={'cover'}
                w={'90%'}
                h={'250px'}
                align={'center'}
              />
            </Stack>
            <Container maxW={'80%'}>
              <SimpleGrid
              columns={{ base: 1}}
              spacing={{ base: 8}}
              py={{ base: 18}}>
                <Stack spacing={{ base: 3}}>
                  <Stack
                  spacing={{ base: 4}}
                  direction={'column'}
                  divider={<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />}
                  >
                    <Box>
                      <Text
                        fontSize={{ base: '20px'}}
                        mb={'2'}>
                        概要タイトル
                      </Text>
                      <List>
                        <ListItem>
                          <Text as={'span'} color='gray'>
                            注意書きとか（リスト形式）１
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text as={'span'} color='gray'>
                            注意書きとか（リスト形式）２
                          </Text>
                        </ListItem>
                      </List>
                    </Box>
                  </Stack>
                  <Divider />
                  <Stack>
                    <Flex>
                      <Text align={'center'}>詳細</Text>
                    </Flex>
                  </Stack>
                  {/* <Divider /> */}
                  <Stack align={'center'}>
                    <Button
                      rounded={'md'}
                      w={'50%'}
                      my={'2'}
                      size={'lg'}
                      py={'5'}
                      bg={useColorModeValue('gray.900', 'gray.50')}
                      color={useColorModeValue('white', 'gray.900')}
                      _hover={{
                        bg: 'gray',
                        boxShadow: 'lg'
                      }}>
                      ボタン
                    </Button>
                  </Stack>
                </Stack>
              </SimpleGrid>
            </Container>
          </ModalBody>
          {/* <ModalFooter></ModalFooter> */}
        </ModalContent>
    </Modal>
  </>
)

export default PosterModal