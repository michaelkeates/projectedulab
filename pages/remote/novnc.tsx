import { Box, Flex, HStack, IconButton } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { Sidebar } from "../../components/Sidebar";
import dynamic from "next/dynamic";
import { useState } from "react";
import type { NextPage } from "next";
import { authProtected } from "../../components/protected-route";
// Import the ClipboardInputBox component
import ClipboardInputBox from "../../components/vncclient/clipboardinputbox";
import { useMediaQuery } from "@chakra-ui/react";

const DynamicComponent = dynamic(
  //import the vncclient component
  () => import("../../components/vncclient/vncclient"),
  {
    //server-Side Rendering is disabled
    ssr: false,
  }
);

const noVNC: NextPage = () => {
  const [collapse, setCollapse] = useState(false);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  // Declare a state variable to hold the text from the clipboard
  //const [clipboardText, setClipboardText] = useState("");
  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={10}>
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={isLargerThan768 ? (collapse ? 350 : 100) : 0}
        bg="white"
        alignItems="start"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRadius="3xl"
        className={!isLargerThan768 && collapse ? "sidebar-collapsed" : ""}
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
        <Box maxW="800px" maxH="500px" w="full" h="100vh">
          <DynamicComponent />
          {/* Render the ClipboardInputBox component with the onClipboard prop */}
          {/* <ClipboardInputBox onClipboard={(text) => setClipboardText(text)} /> */}
        </Box>
      </Flex>
    </HStack>
  );
};

export default authProtected(noVNC);
