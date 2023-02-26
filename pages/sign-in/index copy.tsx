import { NextPage } from 'next'
import { FaLock } from 'react-icons/fa'

import { Divider } from '@mantine/core'

import AuthLink from '../../components/AuthLink'
import OAuthLinks from '../../components/OauthLinks'
import SignInLayout from '../../layouts/SignInLayout'
import {Flex, Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

export const SignInPage: NextPage = () => {
  return (
    <SignInLayout title="Welcome">

      <Divider my="sm" />

      <AuthLink variant="subtle" link="/sign-in/email-password">
        Continue with email + password
      </AuthLink>
      <Button colorScheme='blue'>Button</Button>
    </SignInLayout>
  )
}

export default SignInPage
