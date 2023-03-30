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
<Flex flexDirection="column" align="center" h="100vh">
  <Box
    w="full"
    h="full"
    flexGrow={1}
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <DynamicComponent />
  </Box>
  {/* Render the ClipboardInputBox component with the onClipboard prop */}
  {/* <ClipboardInputBox onClipboard={(text) => setClipboardText(text)} /> */}
</Flex>

  );
};

export default authProtected(noVNC);
