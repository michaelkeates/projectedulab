import { Box, Flex, HStack, IconButton, Stack } from "@chakra-ui/react";
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
