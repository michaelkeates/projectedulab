//components/AuthLink.tsx
//import necessary components from @mantine/core
import { Container, Divider, SimpleGrid } from '@mantine/core'

//dfine a functional component called AuthLayout that takes two props:
//footer: Optional React node to be displayed at the bottom of the layout
//children: Required React node(s) to be displayed in the layout
export const AuthLayout: React.FC<{
  footer?: React.ReactNode
  children: React.ReactNode
}> = ({ footer, children }) => {
  return (
    <Container>
      {/*wrapper component for centering content on the page */}
      <SimpleGrid cols={1} spacing={6}>
        {children} {/*render the children nodes passed to the AuthLayout component */}
      </SimpleGrid>
      {/*if the footer prop is passed to the component, display it */}
      {footer && (
        <>
          {/*divider component with margin-top and margin-bottom set to "sm" */}
          <Divider my="sm" />
          {/*render the footer node passed to the AuthLayout component */}
          {footer}
        </>
      )}
    </Container>
  )
}

export default AuthLayout //export the AuthLayout component as the default export of this module
