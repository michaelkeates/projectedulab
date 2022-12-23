import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue,
  chakra,
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
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
        padding="15px;"
      >
        Hi! Welcome to Project eduLab!
      </Box>

      <Section delay={0.1}>
        <Heading as="h2" size="1xl" textAlign="center" paddingTop="25px">
          Welcome! To get started click a button below.
        </Heading>
        <Section delay={0.1}>
          <Divider my={6} />
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <NextLink href="/login" passHref scroll={false}>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="blue"
                width="100%"
              >
                Login
              </Button>
            </NextLink>
            <NextLink href="/signup" passHref scroll={false}>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="green"
                width="100%"
              >
                Signup
              </Button>
            </NextLink>
          </SimpleGrid>
        </Section>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
