import NextLink from 'next/link'
import {
  Container,
  Heading,
  Button,
  Box,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import {
  ChevronRightIcon,
  PhoneIcon,
  EmailIcon,
  InfoIcon
} from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem, WorkGridItem } from '../components/grid-item'

import thumbusw from '../public/images/works/usw_logo.png'
import thumbcc from '../public/images/works/cc_logo.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
        padding="15px;"
      >
        Check out my qualifications and skills! 🧍
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading
            as="h3"
            variant="page-title"
            fontFamily="Roboto"
            fontWeight="500"
            marginTop="1rem"
            marginBottom="2rem"
          >
            Michael Keates
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 1 }}
          textAlign="center"
        ></Box>
      </Box>

      <SimpleGrid colums={[1, 1, 2]} gap={2}>
        <Section delay={0.1}>
          <Heading
            as="h3"
            fontFamily="Roboto"
            fontWeight="500"
            fontSize={20}
            mb={2}
          >
            Background
          </Heading>
          <Paragraph>
            I am a organised and highly creative individual that thrives on
            working at the utmost level of professionalism. I will always work
            to the best of my abilities under any sort of circumstances and
            under any level of pressure for something that I truly love. I am an
            ambitious individual with a strong attention to detail and possess
            the ability to adapt to situations quickly, efficently and
            creatively. I am currently in my third year of studying BSc (Hons)
            Applied Computing at the University of South Wales.
          </Paragraph>
        </Section>
      </SimpleGrid>
      <Heading
          as="h3"
          fontFamily="Roboto"
          fontWeight="500"
          fontSize={20}
          mb={2}
          marginTop="1rem"
        >
          Contact
        </Heading>
      <SimpleGrid columns={[2, 3, 3]} gap={2}>
        <Section delay={0.3}>
          <Box
            borderRadius="lg"
            mb={1}
            p={1}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding="10px;"
          >
            <BioSection>
              <EmailIcon marginRight="0.5rem" />
              <a href="mailto: mail@michaelkeates.co.uk">
                Send Email
              </a>
            </BioSection>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Box
            borderRadius="lg"
            mb={1}
            p={1}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding="10px;"
          >
            <BioSection>
              <PhoneIcon marginRight="0.5rem" />
              <a href="tel:+447495137974">Make a call</a>
            </BioSection>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Box
            borderRadius="lg"
            mb={1}
            p={1}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding="10px;"
          >
            <BioSection>
              <InfoIcon marginRight="0.5rem" />
              Newport, Wales
            </BioSection>
          </Box>
        </Section>
      </SimpleGrid>

      <Heading
        as="h3"
        fontFamily="Roboto"
        fontWeight="500"
        fontSize={20}
        mb={4}
        marginTop="1rem"
      >
        Qualifications
      </Heading>

      <SimpleGrid columns={[2, 2, 3]} gap={2}>
        <Section delay={0.3}>
          <Box
            borderRadius="lg"
            mb={6}
            p={4}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            opacity="20%"
          >
            <WorkGridItem
              id="uswapplied"
              thumbnail={thumbusw}
              title="BSc (Hons) Applied Computing"
            >
              University of South Wales (2022-2023)
            </WorkGridItem>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Box
            borderRadius="lg"
            mb={6}
            p={4}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <WorkGridItem
              id="uswhnd"
              thumbnail={thumbusw}
              title="HND Computing"
            >
              University of South Wales (2020-2022)
            </WorkGridItem>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Box
            borderRadius="lg"
            mb={6}
            p={4}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <WorkGridItem
              id="coleggwentbtec"
              thumbnail={thumbcc}
              title="BTEC Computing"
            >
              Coleg Gwent (2019-2020)
            </WorkGridItem>
          </Box>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Heading
          as="h3"
          fontFamily="Roboto"
          fontWeight="500"
          fontSize={20}
          mb={4}
        >
          Skills
        </Heading>
        <SimpleGrid columns={[2, 2, 4]} gap={1} fontSize="12px;">
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding="10px;"
          >
            Java
          </Box>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding="10px;"
          >
            Flutter
          </Box>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding="10px;"
          >
            Android
          </Box>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding="10px;"
          >
            iOS
          </Box>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding="10px;"
          >
            Xamarin
          </Box>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding="10px;"
          >
            C#
          </Box>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding="10px;"
          >
            Python
          </Box>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding="10px;"
          >
            ReactJS
          </Box>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding="10px;"
          >
            Graphic Design
          </Box>
        </SimpleGrid>
      </Section>
      <Section delay={0.2}>
        <Heading
          as="h3"
          fontFamily="Roboto"
          fontWeight="500"
          fontSize={20}
          mb={4}
        >
          Interests
        </Heading>
        <SimpleGrid columns={[2, 2, 4]} gap={1} fontSize="12px;">
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding="10px;"
          >
            Coding 👨🏾‍💻
          </Box>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding="10px;"
          >
            Photography 📷
          </Box>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding="10px;"
          >
            Travelling 🧳
          </Box>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            padding="10px;"
          >
            Gym 💪
          </Box>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
