import { IconButton, Grid, Input, useColorModeValue } from "@chakra-ui/react";
import { MdFullscreen, MdContentCopy, MdClear } from "react-icons/md";

import React, { useEffect, useState, useRef } from "react";
import { VncScreen } from "react-vnc";

function App() {
  //declare url as variable
  const [url] = useState("wss://IPADDRESS/wsproxy/");
  //useRef hook to create a reference to the VncScreen component to allow for clipboard functionality
  const vncScreenRef = useRef<React.ElementRef<typeof VncScreen>>(null);
  //declare clipboardText as variable, set to empty string
  const [clipboardText, setClipboardText] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  //declare isHighlighted as variable, set to false
  const [isHighlighted, setIsHighlighted] = useState(false);
  const highlightColor = useColorModeValue("yellow.300", "yellow.600");

  //do quick check to make sure url is valid and starts with ws or wss
  const isValid = (vncUrl: string) => {
    if (!vncUrl.startsWith("ws://") && !vncUrl.startsWith("wss://")) {
      return false;
    }

    return true;
  };

  //useEffect hook to add event listener to window to listen for clipboardUpdate event
  useEffect(() => {
    const handleClipboardUpdate = (e) => {
      navigator.clipboard.writeText(e.detail.text);
    };

    window.addEventListener("clipboardUpdate", handleClipboardUpdate);

    return () => {
      window.removeEventListener("clipboardUpdate", handleClipboardUpdate);
    };
  }, []);

  //update clipboardText variable when input value changes
  const handleClipboardInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setClipboardText(e.target.value);
  };

  //add functionality to copy text to clipboard when button is clicked
  const handleClipboardButtonClick = () => {
    if (vncScreenRef.current) {
      vncScreenRef.current.clipboardPaste(clipboardText);
      setIsHighlighted(true);
      setTimeout(() => {
        setIsHighlighted(false);
      }, 2000);
    }
  };

  //add functionality to clear clipboard when button is clicked
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
        {/*only display vncscreen if url is valid, othherwise show simple div message that it isnt provided*/}
        {isValid(url) ? (
          <VncScreen
            url={url}
            background="white"
            scaleViewport={true}
            style={{
              width: "100%",
              height: "80vh",
            }}
            onClipboard={(e) => {
              console.log("onClipboard", e);
              if (e && e.detail && e.detail.text) {
                navigator.clipboard.writeText(e.detail.text);
              }
            }}
            ref={vncScreenRef}
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
            {/*the input box, update the string inside by calling the function on change*/}
            <Input
              mr={2}
              width={{ base: "200px", md: "100%" }}
              type="text"
              value={clipboardText}
              onChange={handleClipboardInputChange}
              marginBottom="20px"
            />
            {/*button when clicked on calls the clear function*/}
            <IconButton
              aria-label="Clear clipboard"
              icon={<MdClear />}
              onClick={handleClearButtonClick}
            />
            {/*button to call the function to copy string to clipboard*/}
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
