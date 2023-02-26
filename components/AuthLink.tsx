import Link from 'next/link'

import { ButtonVariant } from '@mantine/core'
import { Button } from '@chakra-ui/react'

const AuthLink: React.FC<{
  icon?: React.ReactNode
  link: string
  color?: string
  children?: React.ReactNode
  variant?: ButtonVariant
}> = ({ icon, color, link, variant, children }) => {
  return (
    <Link href={link} passHref>
      <Button
      colorScheme='blue'
      width="100%"
      >
        {children}
      </Button>
    </Link>
  )
}

export default AuthLink
