import { NextPage } from 'next'
import { FaLock } from 'react-icons/fa'

import { Divider } from '@mantine/core'

import AuthLink from '../../components/AuthLink'
import OAuthLinks from '../../components/OauthLinks'
import SignInLayout from '../../layouts/SignInLayout'

import { Box } from '@chakra-ui/react'

export const SignInPage: NextPage = () => {
  return (
    <SignInLayout title="Sign In">

      <Divider my="sm" />

      <AuthLink variant="subtle" link="/sign-in/email-password">
        Continue with email + password
      </AuthLink>
    </SignInLayout>
  )
}

export default SignInPage
