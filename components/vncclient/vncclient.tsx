import { IconButton, Grid, Input } from "@chakra-ui/react";
import { MdFullscreen, MdContentCopy, MdClear } from "react-icons/md";

import React, { useEffect, useState, useRef } from "react";
import { VncScreen } from "react-vnc";
import { FullScreen } from "@chiragrupani/fullscreen-react";

function App() {
  const [url, setUrl] = useState("wss://test.michaelkeates.co.uk/wsproxy/");
  const vncScreenRef = useRef<React.ElementRef<typeof VncScreen>>(null);
  const [clipboardText, setClipboardText] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);

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

  const handleClearButtonClick = () => {
    setClipboardText("");
  };

  return (
    <>
      <Grid
        position="absolute"
        top={4}
        right={6}
        templateColumns="repeat(4, max-content)"
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
          aria-label="Clear clipboard"
          icon={<MdClear />}
          onClick={handleClearButtonClick}
        />
        <IconButton
          aria-label="Copy to clipboard"
          icon={<MdContentCopy />}
          onClick={handleClipboardButtonClick}
        />
        <IconButton
          aria-label="Fullscreen"
          icon={<MdFullscreen />}
          onClick={(e) => setIsFullScreen(true)}
        />
      </Grid>
      <br></br>
      <FullScreen
        isFullScreen={isFullScreen}
        onChange={(isFullScreen) => {
          setIsFullScreen(isFullScreen);
        }}
      >
        {isValid(url) ? (
          <VncScreen
            url={url}
            background="white"
            scaleViewport={true}
            style={{
              width: "100%",
              height: isFullScreen ? window.innerHeight : "800px",
            }}
            debug
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
      </FullScreen>
    </>
  );
}

export default App;