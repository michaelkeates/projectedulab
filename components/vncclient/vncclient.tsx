import React, { useState, useRef } from "react";
import { VncScreen } from "react-vnc";
import type { NextPage } from "next";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  Button,
  Grid,
} from "@chakra-ui/react";

function App() {
  //const [url, setUrl] = useState("wss://192.168.0.91/websockify");
  const [url, setUrl] = useState(
    "wss://test.michaelkeates.co.uk/wsproxy/5702/"
  );
  //const [url, setUrl] = useState("wss://test.michaelkeates.co.uk/websockify");
  const [connected, setConnected] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const vncScreenRef = useRef<React.ElementRef<typeof VncScreen>>(null);

  const Spacer = () => (
    <div style={{ width: "2rem", display: "inline-block" }} />
  );

  const isValid = (vncUrl: string) => {
    if (!vncUrl.startsWith("ws://") && !vncUrl.startsWith("wss://")) {
      return false;
    }

    return true;
  };

  const handleConnectClick = () => {
    const { connect, connected, disconnect } = vncScreenRef.current ?? {};

    if (connected) {
      disconnect?.();
      setConnected(false);
    } else if (!connected) {
      connect?.();
      setConnected(true);
    }
  };

  const handleFullScreenClick = () => {
    const elem = document.getElementById("vnc-screen-container");
    if (elem) {
      if (!fullscreen) {
        elem.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setFullscreen(!fullscreen);
    }
  };

  return (
    <>
      <div style={{ margin: "1rem" }}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Button
            onClick={handleConnectClick}
            colorScheme="blue"
            width="100%"
            marginBottom="5%"
          >
            {connected ? "Disconnect" : "Connect"}
          </Button>
          <Button
            onClick={handleFullScreenClick}
            colorScheme="red"
            width="100%"
            marginBottom="5%"
          >
            Full Screen
          </Button>
        </Grid>
      </div>

      <div style={{ margin: "1rem", height: "100%" }} id="vnc-screen-container">
        {isValid(url) ? (
          <VncScreen
            url={url}
            scaleViewport
            background="#000000"
            style={{
              width: "900px",
              height: "900px",
            }}
            debug
            ref={vncScreenRef}
            onClipboard={(e) => {
              console.log("onClipboard", e);
            }}
          />
        ) : (
          <div>VNC URL not provided.</div>
        )}
      </div>
    </>
  );
}

export default App;
