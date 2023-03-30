import { Box, Flex, HStack, IconButton } from "@chakra-ui/react";
import { MdMenu, MdFullscreen } from "react-icons/md";
import { Sidebar } from "../../components/Sidebar";
import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import type { NextPage } from "next";
import { authProtected } from "../../components/protected-route";

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
  const mainRef = useRef<HTMLDivElement>(null);

  const handleFullscreenClick = () => {
    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.requestFullscreen();
    }
  };

  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={{ base: 2, md: 5 }}>
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={collapse ? 300 : 0}
        bg="white"
        alignItems="start"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="max-width ease-in-out .2s"
        borderRadius="3xl"
        //hidden={collapse}
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
        ref={mainRef}
      >
        <IconButton
          aria-label="Menu Collapse"
          icon={<MdMenu />}
          position="absolute"
          top={6}
          left={6}
          onClick={() => setCollapse(!collapse)}
        />
        <IconButton
          aria-label="Full Screen"
          icon={<MdFullscreen />}
          position="absolute"
          top={6}
          right={6}
          onClick={handleFullscreenClick}
        />
        <Box
          maxW={{ base: "100%", sm: "500px", md: "800px", lg: "90%" }}
          maxH={{ base: "auto", sm: "250px", md: "450px", lg: "90%" }}
          w="full"
          h="full"
        >
          <DynamicComponent />
          {/* Render the ClipboardInputBox component with the onClipboard prop */}
          {/* <ClipboardInputBox onClipboard={(text) => setClipboardText(text)} /> */}
        </Box>
      </Flex>
    </HStack>
  );
};

export default authProtected(noVNC);
