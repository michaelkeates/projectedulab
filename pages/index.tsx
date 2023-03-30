import type { NextPage } from "next";
import { useState } from "react";
import NextLink from "next/link";
import { Title } from "@mantine/core";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  Button,
  Grid,
  Stack,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { Sidebar } from "../components/Sidebar";

import { authProtected } from "../components/protected-route";

// * Reference: https://blog.codepen.io/2021/09/01/331-next-js-apollo-server-side-rendering-ssr/

const Home: NextPage = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={{ base: 2, md: 5 }}>
      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
      >
        <Stack
          direction="column"
          spacing={4}
          align="center"
          position="absolute"
          top={6}
          left={6}
        >
          <Sidebar collapse={collapse} />
        </Stack>
        <Text fontSize={{ base: "8vw", md: 80 }} color="gray.300">
          Welcome
        </Text>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg="blue.400"
          css={{ backdropFilter: "blur(10px)" }}
          padding="15px;"
          textColor="white"
        >
          Hi! Select one of the options below to get started.
        </Box>
        <Grid templateColumns="repeat(2, 1fr)" gap={2}>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg="blue.400"
            css={{ backdropFilter: "blur(10px)" }}
            padding="15px;"
            textColor="white"
          >
            <Title order={3}>Create Quiz</Title>
            <br></br>
            <NextLink href="create" passHref>
              <Button colorScheme="blue" width="100%" marginBottom="5%">
                Let's Go!
              </Button>
            </NextLink>
          </Box>
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
            <Title order={3}>Take Quiz</Title>
            <br></br>
            <NextLink href="quiz" passHref>
              <Button colorScheme="red" width="100%" marginBottom="5%">
                Let's Go!
              </Button>
            </NextLink>
          </Box>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg="orange.400"
            css={{ backdropFilter: "blur(10px)" }}
            padding="15px;"
            textColor="white"
          >
            <Title order={3}>Virtual Machines</Title>
            <br></br>
            <NextLink href="remote/novnc" passHref>
              <Button colorScheme="orange" width="100%" marginBottom="5%">
                Let's Go!
              </Button>
            </NextLink>
          </Box>
        </Grid>
      </Flex>
    </HStack>
  );
};

export default authProtected(Home);
