import NextLink from "next/link";
import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  ButtonGroup,
  Wrap,
  WrapItem,
  useColorModeValue,
  chakra,
  Divider,
  Stack,
} from "@chakra-ui/react";
//import {
//  ChevronRightIcon,
//  InfoIcon,
//  StarIcon,
//  ViewIcon
//} from '@chakra-ui/icons'
//import Paragraph from '../../components/paragraph'
//import Layout from '../../components/layouts/article'
//import Section from '../../components/section'
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  //import the vncclient component
  () => import("../../components/vncclient/vncclient"),
  {
    //server-Side Rendering is disabled
    ssr: false,
  }
);

type LayoutProps = {
  title: string;
  // Other props go here
};

const Home = () => (
  <Container maxW={968}>
    <Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      bg="red.400"
      css={{ backdropFilter: "blur(10px)" }}
      padding="15px;"
      textColor="white"
    >
      Hi! View your remote desktop below. If you are having issues, please keep
      your mouth shut!
    </Box>
    <Stack direction='column'>

  <Wrap spacing={4}>
    <WrapItem>
      <Button colorScheme='gray'>Gray</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='red'>Red</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='orange'>Orange</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='yellow'>Yellow</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='green'>Green</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='teal'>Teal</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='blue'>Blue</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='cyan'>Cyan</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='purple'>Purple</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='pink'>Pink</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='linkedin'>Linkedin</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='facebook'>Facebook</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='messenger'>Messenger</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='whatsapp'>Whatsapp</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='twitter'>Twitter</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='telegram'>Telegram</Button>
    </WrapItem>
  </Wrap>
</Stack>

<NextLink href="/dashboard" passHref>
            <Button colorScheme='blue'>
              Return to home
            </Button>
          </NextLink>

    <Divider my={6} />
    <SimpleGrid columns={[1, 1, 1]} gap={6}>
      <DynamicComponent />
    </SimpleGrid>
  </Container>
);

export default Home;
