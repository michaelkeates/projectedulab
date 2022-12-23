import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue,
  Input,
  Divider
} from '@chakra-ui/react'
import {
  ChevronRightIcon,
  InfoIcon,
  StarIcon,
  ViewIcon
} from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa'

const Login = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg="blue.300"
        css={{ backdropFilter: 'blur(10px)' }}
        padding="15px;"
        textColor="white"
      >
        Login
      </Box>

      <Section delay={0.1}>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 1, 1]} gap={6} marginTop="20px">
            <form>
              <Input
                type="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                autoFocus
                mt={[2, 4]}
              />
              <Input
                type="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                autoFocus
                mt={[2, 4]}
              />
              <SimpleGrid columns={[2, 2, 2]} gap={1} marginTop="20px">
                <Button
                  rightIcon={<ChevronRightIcon />}
                  colorScheme="green"
                  width="100%"
                  type="submit"
                  textColor="white"
                >
                  Sign Up
                </Button>
                <Button
                  rightIcon={<ChevronRightIcon />}
                  colorScheme="red"
                  width="100%"
                  as="a"
                  href="/"
                  textColor="white"
                >
                  Cancel
                </Button>
              </SimpleGrid>
            </form>
          </SimpleGrid>
          <SimpleGrid columns={[3, 3, 3]} gap={6} marginTop="30px">
            <NextLink href="/login" passHref scroll={false}>
              <Button
                leftIcon={<FaGoogle />}
                colorScheme="yellow"
                width="100%"
                textColor="white"
              >
              </Button>
            </NextLink>
            <NextLink href="/signup" passHref scroll={false}>
              <Button
                leftIcon={<FaGithub />}
                colorScheme="orange"
                width="100%"
                textColor="white"
              >
              </Button>
            </NextLink>
            <NextLink href="/signup" passHref scroll={false}>
              <Button
                leftIcon={<FaFacebook />}
                colorScheme="blue"
                width="100%"
                textColor="white"
              >
              </Button>
            </NextLink>
          </SimpleGrid>
        </Section>
      </Section>
    </Container>
  </Layout>
)

export default Login
export { getServerSideProps } from '../components/chakra'
