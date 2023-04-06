//import NextPage type from "next"
import type { NextPage } from "next";

//import useState hook from React, allowing to switch between two states for sidebar, closed or open
import { useState } from "react";

//import NextLink, Box, Flex, HStack, IconButton, Text, Button, and Grid components from Chakra UI
import NextLink from "next/link";
import { Box, Flex, HStack, IconButton, Text, Button, Grid } from "@chakra-ui/react";

//import MdMenu icon from react-icons/md
import { MdMenu } from "react-icons/md";

//import authProtected function from protected-route.js file so user cannot access Home page without being authenticated first
import { authProtected } from "../components/protected-route";

//import Sidebar component from Sidebar.js file
import { Sidebar } from "../components/Sidebar";

//create Home component with NextPage type
const Home: NextPage = () => {
  
  //use useState hook to create collapse and isMenuOpen state variables and their setter functions
  const [collapse, setCollapse] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //function to set isMenuOpen state variable based on menu open or close state
  const handleMenuStateChange = (state: { isOpen: boolean }) => {
    setIsMenuOpen(state.isOpen);
  };

  //function to toggle isMenuOpen state variable on button click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //return JSX for Home component, this is what you see in page
  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={{ base: 2, md: 5 }}>
      <Box
        position="absolute"
        top={0}
        left={0}
        marginLeft="3vh"
        marginTop="5vh"
        zIndex={1}
        w={isMenuOpen ? "250px" : "0"}
        h="full"
        bg="gray.100"
        overflow="hidden"
        transition="width 0.3s ease-in-out"
      >
        <Sidebar collapse={false} />
      </Box>
      <Flex
        as="main"
        w="full"
        minH={{ base: "100vh", md: "auto" }}
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
        zIndex={1}
        right={1}
        style={{
          transform: isMenuOpen ? "translateX(80px)" : "none",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <IconButton
          aria-label="Menu"
          icon={<MdMenu />}
          position="absolute"
          top={4}
          left={4}
          onClick={toggleMenu}
        />
        <Text fontSize={{ base: "8vw", md: 80 }} color="gray.300">
          Welcome
        </Text>
        <Box
          borderRadius="lg"
          mb={{ base: 6, md: 8 }}
          p={{ base: 2, md: 3, lg: 4 }}
          textAlign="center"
          bg="blue.400"
          padding="15px;"
          textColor="white"
          marginLeft="2"
          marginRight="2"
          fontSize={{ base: "4vw", md: 21 }}
        >
          Hi! Select one of the options below to get started.
        </Box>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={2}
          marginLeft="2"
          marginRight="2"
        >
          <Box
            borderRadius="lg"
            mb={{ base: 6, md: 8 }}
            p={{ base: 2, md: 3, lg: 4 }}
            textAlign="center"
            bg="blue.400"
            css={{ backdropFilter: "blur(10px)" }}
            padding="15px;"
            textColor="white"
          >
            <Text fontSize={{ base: "6vw", md: 24 }}>Create a Question</Text>
            <NextLink href="create" passHref>
              <Button
                colorScheme="blue"
                width="100%"
                marginBottom="5%"
                fontSize={{ base: "4vw", md: 16 }}
                mb={{ base: 6, md: 8 }}
                p={{ base: 2, md: 3, lg: 4 }}
                marginTop="25px"
              >
                Let's Go!
              </Button>
            </NextLink>
          </Box>
          <Box
            borderRadius="lg"
            mb={{ base: 6, md: 8 }}
            p={{ base: 2, md: 3, lg: 4 }}
            textAlign="center"
            bg="red.400"
            css={{ backdropFilter: "blur(10px)" }}
            padding="15px;"
            textColor="white"
          >
            <Text fontSize={{ base: "6vw", md: 24 }}>Take Quiz</Text>
            <NextLink href="quiz" passHref>
              <Button
                colorScheme="red"
                width="100%"
                marginBottom="5%"
                fontSize={{ base: "4vw", md: 16 }}
                mb={{ base: 6, md: 8 }}
                p={{ base: 2, md: 3, lg: 4 }}
                marginTop="25px"
              >
                Let's Go!
              </Button>
            </NextLink>
          </Box>
          <Box
            borderRadius="lg"
            mb={{ base: 6, md: 8 }}
            p={{ base: 2, md: 3, lg: 4 }}
            textAlign="center"
            bg="green.400"
            css={{ backdropFilter: "blur(10px)" }}
            padding="15px;"
            textColor="white"
          >
            <Text fontSize={{ base: "6vw", md: 24 }}>Code Editor</Text>
            <NextLink href="code" passHref>
              <Button
                colorScheme="green"
                width="100%"
                marginBottom="5%"
                fontSize={{ base: "4vw", md: 16 }}
                mb={{ base: 6, md: 8 }}
                p={{ base: 2, md: 3, lg: 4 }}
                marginTop="25px"
              >
                Let's Go!
              </Button>
            </NextLink>
          </Box>
          <Box
            borderRadius="lg"
            mb={{ base: 6, md: 8 }}
            p={{ base: 2, md: 3, lg: 4 }}
            textAlign="center"
            bg="orange.400"
            css={{ backdropFilter: "blur(10px)" }}
            padding="15px;"
            textColor="white"
          >
            <Text fontSize={{ base: "6vw", md: 24 }}>Virtual Machine</Text>
            <NextLink href="remote/novnc" passHref>
              <Button
                colorScheme="orange"
                width="100%"
                marginBottom="5%"
                fontSize={{ base: "4vw", md: 16 }}
                mb={{ base: 6, md: 8 }}
                p={{ base: 2, md: 3, lg: 4 }}
                marginTop="25px"
              >
                Let's Go!
              </Button>
            </NextLink>
          </Box>
        </Grid>
      </Flex>
    </HStack>
  );
};

//export Home component wrapped in authProtected so that it can only be accessed by authenticated users
export default authProtected(Home);
