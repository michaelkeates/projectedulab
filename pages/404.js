import NextLink from 'next/link'
import Section from '../components/section'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  useColorModeValue,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Section delay={0.1}>
        <Heading as="h1" fontFamily="Roboto" fontWeight="">
          Not found
        </Heading>
        <Text>The page you&apos;re looking for was not found.</Text>
        <Divider my={6} />
        <Box my={6} align="center">
          <NextLink href="/" passHref>
            <Button bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
              Return to home
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default NotFound
