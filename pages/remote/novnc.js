import NextLink from 'next/link'
import {
  Container,
  Box,
  SimpleGrid,
  Button,
  Divider
} from '@chakra-ui/react'
import {
  ChevronRightIcon,
} from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const vnc = () => (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg="red.400"
          css={{ backdropFilter: 'blur(10px)' }}
          padding="15px;"
          textColor="white"
        >
          noVNC Page.
        </Box>
  
        <Section delay={0.1}>
            <Divider my={6} />
            <SimpleGrid columns={[2, 2, 2]} gap={6}>
              <NextLink href="/login" passHref scroll={false}>
                <Button
                  rightIcon={<ChevronRightIcon />}
                  colorScheme="blue"
                  width="100%"
                  textColor="white"
                >
                  Login
                </Button>
              </NextLink>
              <NextLink href="/signup" passHref scroll={false}>
                <Button
                  rightIcon={<ChevronRightIcon />}
                  colorScheme="green"
                  width="100%"
                  textColor="white"
                >
                  Signup
                </Button>
              </NextLink>
            </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )  

export default vnc
export { getServerSideProps } from '../../components/chakra'
