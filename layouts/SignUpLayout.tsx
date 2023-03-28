//components/layout/SignUpLayout.tsx
import Link from 'next/link' //import Link component from Next.js
import { Anchor, Center, Text } from '@mantine/core' //import Anchor, Center, and Text components from Mantine library
import AuthLayout from './AuthLayout' //import AuthLayout component from AuthLayout file in the same directory

export const SignUpLayout: React.FC<{ title?: string; children: React.ReactNode }> = (props) => { //define SignUpLayout functional component with title and children props
  return (
    <AuthLayout
      {...props} //spread all props from parent component
      footer={ //create footer component
        <Center> {/*center the text*/}
          <Text>
            Already have an account?{' '} {/*add text*/}
            <Anchor component={Link} href="/sign-in/email-password"> {/*add anchor component with Link and href props*/}
              Log in
            </Anchor>
          </Text>
        </Center>
      }
    />
  )
}

export default SignUpLayout //export SignUpLayout as default