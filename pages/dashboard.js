import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue,
  chakra,
  Divider,
  Badge
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
import { DoubleGridItem, WorkGridItem } from '../components/grid-item'
import Image from 'next/image'

import test from '../public/images/computer.png'
import quiz from '../public/images/quiz.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg="blue.400"
        css={{ backdropFilter: 'blur(10px)' }}
        padding="15px;"
        textColor="white"
      >
        Hi! Welcome to the dashboard! To get started click a button below.
      </Box>

      <Section delay={0.1}>
        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 1]} gap={2}>
          <Box
            borderRadius="lg"
            mb={2}
            p={1}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            shadow="lg"
          >
            <WorkGridItem id="uswapplied" thumbnail={quiz} title="Quiz">
              Play and create quizes
            </WorkGridItem>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={[2, 2, 2]} gap={2}>
          <Box
            borderRadius="lg"
            mb={6}
            p={12}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            shadow="lg"
          >
            <WorkGridItem id="uswapplied" thumbnail={quiz} title="Quiz">
              Play and create quizes
            </WorkGridItem>
          </Box>
          <Box
            borderRadius="lg"
            mb={6}
            p={12}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            shadow="lg"
          >
            <DoubleGridItem id="uswapplied" thumbnail={test} title="Remote PC">
              Log into your remote PC
            </DoubleGridItem>
          </Box>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
