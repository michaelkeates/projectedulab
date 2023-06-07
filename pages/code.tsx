import type { NextPage } from "next";
import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { authProtected } from "../components/protected-route";
import { Sidebar } from "../components/Sidebar";
import CodeEditor from "../components/CodeEditor";

const Home: NextPage = () => {
  const [collapse, setCollapse] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuStateChange = (state: { isOpen: boolean }) => {
    setIsMenuOpen(state.isOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        h="full"
        minH={{ base: "100vh", md: "auto" }}
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
        <Box>
          <CodeEditor />
        </Box>
      </Flex>
    </HStack>
  );
};

export default authProtected(Home);
