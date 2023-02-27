import type { NextPage } from "next";
import { useState } from "react";

import { Input, Title } from "@mantine/core";
import { Box, Flex, HStack, IconButton, Text, Button } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { Sidebar } from "../components/Sidebar";

import { authProtected } from "../components/protected-route";

// * Reference: https://blog.codepen.io/2021/09/01/331-next-js-apollo-server-side-rendering-ssr/

const Home: NextPage = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={10}>
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={collapse ? 350 : 100}
        bg="white"
        alignItems="start"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRadius="3xl"
      >
        <Sidebar collapse={collapse} />
      </Flex>
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
        <IconButton
          aria-label="Menu Colapse"
          icon={<MdMenu />}
          position="absolute"
          top={6}
          left={6}
          onClick={() => setCollapse(!collapse)}
        />
        <Text fontSize={80} color="gray.300">
          Welcome!
        </Text>
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
          Hi! View your remote desktop below. If you are having issues, please
          keep your mouth shut!
        </Box>
      </Flex>
    </HStack>
  );
};

export default authProtected(Home);
