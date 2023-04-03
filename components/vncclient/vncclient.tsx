import { IconButton, Grid, Input, useColorModeValue } from "@chakra-ui/react";
import { MdFullscreen, MdContentCopy, MdClear } from "react-icons/md";

import React, { useEffect, useState, useRef } from "react";
import { VncScreen } from "react-vnc";

function App() {
  const [url, setUrl] = useState("wss://test.michaelkeates.co.uk/wsproxy/");
  const vncScreenRef = useRef<React.ElementRef<typeof VncScreen>>(null);
  const [clipboardText, setClipboardText] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const highlightColor = useColorModeValue("yellow.300", "yellow.600");

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
      setIsHighlighted(true);
      setTimeout(() => {
        setIsHighlighted(false);
      }, 2000);
    }
  };

  const handleClearButtonClick = () => {
    setClipboardText("");
  };

  return (
    <>
      <Grid
        position="absolute"
        top={4}
        right={6}
        templateColumns="repeat(1, max-content)"
        columnGap={4}
      >
        <IconButton
          aria-label="Fullscreen"
          icon={<MdFullscreen />}
          onClick={(e) => setIsFullScreen(true)}
        />
      </Grid>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isValid(url) ? (
          <VncScreen
            url={url}
            background="white"
            scaleViewport={true}
            style={{
              width: "100%",
              height: "80vh",
            }}
            debug
            ref={vncScreenRef}
            onClipboard={(e) => {
              console.log("onClipboard", e);
              if (e && e.detail && e.detail.text) {
                navigator.clipboard.writeText(e.detail.text);
              }
            }}
          />
        ) : (
          <div>VNC URL not provided.</div>
        )}
        <div style={{ width: "100%", marginTop: "20px" }}>
          <Grid
            templateColumns="repeat(3, max-content)"
            columnGap={4}
            justifyContent="center"
            alignItems="center"
          >
            <Input
              mr={2}
              width={{ base: "200px", md: "100%" }}
              type="text"
              value={clipboardText}
              onChange={handleClipboardInputChange}
            />
            <IconButton
              aria-label="Clear clipboard"
              icon={<MdClear />}
              onClick={handleClearButtonClick}
            />
            <IconButton
              aria-label="Copy to clipboard"
              icon={<MdContentCopy />}
              onClick={handleClipboardButtonClick}
              bg={isHighlighted ? highlightColor : "gray.100"}
            />
          </Grid>
        </div>
      </div>
    </>
  );
}

export default App;
