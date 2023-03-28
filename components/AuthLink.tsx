//componets/AuthLink.tsx

import Link from 'next/link' //import the Link component from the Next.js framework so we can go to different pages
import { ButtonVariant } from '@mantine/core' //import the ButtonVariant type from Mantine UI
import { Button } from '@chakra-ui/react' //import the Button component from the Chakra UI library

//define a new React function component called AuthLink
const AuthLink: React.FC<{
  //define the props that the component accepts
  icon?: React.ReactNode
  link: string
  color?: string
  children?: React.ReactNode
  variant?: ButtonVariant
  //define the return type of the component
}> = ({ link, children }) => {
  return (
    //render a link that goes to the URL specified by the `link` prop
    <Link href={link} passHref>
      {/*render a Chakra UI Button component*/}
      <Button
        colorScheme='red' //set the color scheme to red
        width="100%" //set the width to 100% of its container
      >
        {children} {/*render the children passed to the component*/}
      </Button>
    </Link>
  )
}

export default AuthLink //export the AuthLink component as the default export of the module