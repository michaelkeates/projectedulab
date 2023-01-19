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
//import {
//  ChevronRightIcon,
//  InfoIcon,
//  StarIcon,
//  ViewIcon
//} from '@chakra-ui/icons'
//import Paragraph from '../../components/paragraph'
//import Layout from '../../components/layouts/article'
//import Section from '../../components/section'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(
  () => import('../../components/vncclient/vncclient'),
  {
    ssr: false
  }
)

type LayoutProps = {
  title: string
  // Other props go here
}

const Home = () => (
    <Container maxW={968}>
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
        Hi! View your remote desktop below. If you are having issues, please
        keep your mouth shut!
      </Box>


        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <DynamicComponent url={'.'} />
        </SimpleGrid>
    </Container>

)

export default Home

