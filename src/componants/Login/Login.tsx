import { selectUser, userLogin } from '@/App/features/loginSlice'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  FormHelperText,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
const Login = () => {
  const dispatch = useDispatch();
  const {loading , data , error} = useSelector(selectUser)
  const [showPassword, setShowPassword] = useState(false)
  const [user, setUser] = useState({
    identifier: '',
    password: ''
  });

  const [isEmail, setIsEmail] = useState(false)
  const [isPassword, setIsPassword] = useState(false)


  const onSubmitHandler = (e: {}) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }


  const submintHandler = (e: {}) => {
    e.preventDefault();
    if(!user.password && !user.identifier){
      setIsPassword(true);
      setIsEmail(true);
      return ;
    }
    if(!user.identifier){
      setIsEmail(true);
      return ;
    }
    if(!user.password ){
      setIsPassword(true);
      return ;
    }

      setIsEmail(false);
      setIsPassword(false);
      dispatch(userLogin(user))
      console.log(user)
  }
  const passwordErrorText = isPassword ?
    <FormHelperText color={'red.500'}>Password Is Required</FormHelperText>
    : '' ;
    const emailErrorText = isEmail ?
    <FormHelperText color={'red.500'}>Email Is Required</FormHelperText>
    : '' ;

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          as='form'
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          onSubmit={submintHandler}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='identifier'
                value={user.identifier}
                onChange={onSubmitHandler}
                isInvalid={isEmail}
              />
              {emailErrorText}
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}
                  name='password' value={user.password}
                  onChange={onSubmitHandler}
                  isInvalid={isPassword}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {passwordErrorText}
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
              bg={ isEmail|| isPassword ? 'red.500' : 'blue.500'}
                type='submit'
                color={'white'}
                _hover={{
                  bg:isEmail || isPassword ? 'red.600' : 'blue.600'
                }}
                isLoading={loading}
                >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
export default Login