import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Grid,
  Input,
} from "@chakra-ui/react";
import { MdMenu, MdFullscreen, MdContentCopy } from "react-icons/md";

import React, { useEffect, useState, useRef } from "react";
import { VncScreen } from "react-vnc";

function App() {
  const [url, setUrl] = useState("wss://test.michaelkeates.co.uk/wsproxy/");
  const vncScreenRef = useRef<React.ElementRef<typeof VncScreen>>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [clipboardText, setClipboardText] = useState(""); // add state for clipboard text

  const isValid = (vncUrl: string) => {
    if (!vncUrl.startsWith("ws://") && !vncUrl.startsWith("wss://")) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    const handleClipboardUpdate = (e) => {
      navigator.clipboard.writeText(e.detail.text);
    };

    window.addEventListener("clipboardUpdate", handleClipboardUpdate);

    return () => {
      window.removeEventListener("clipboardUpdate", handleClipboardUpdate);
    };
  }, []);

  const handleClipboardInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setClipboardText(e.target.value);
  };

  const handleClipboardButtonClick = () => {
    if (vncScreenRef.current) {
      vncScreenRef.current.clipboardPaste(clipboardText);
    }
  };

  return (
    <>
      <Grid
        position="absolute"
        top={4}
        right={6}
        templateColumns="repeat(3, max-content)"
        columnGap={4}
      >
        <Input
          mr={2}
          width={{ base: "100%", md: "100%" }}
          type="text"
          value={clipboardText}
          onChange={handleClipboardInputChange}
        />
        <IconButton
          aria-label="Copy to clipboard"
          icon={<MdContentCopy />}
          onClick={handleClipboardButtonClick}
        />
        <IconButton
          aria-label="Fullscreen"
          icon={<MdFullscreen />}
          //onClick={handleFullscreenClick}
        />
      </Grid>

      {isValid(url) ? (
        <VncScreen
          url={url}
          background="white"
          scaleViewport={true}
          style={{
            width: "100%",
            height: "100%",
          }}
          debug
          ref={vncScreenRef}
          onClipboard={(e) => {
            console.log("onClipboard", e);
            navigator.clipboard.writeText(e.detail.text);
          }}
        />
      ) : (
        <div>VNC URL not provided.</div>
      )}
    </>
  );
}

export default App;
