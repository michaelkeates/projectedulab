//import needed modules/dependencies including react-vnc
import React, { useState, useRef } from "react";
import { VncScreen } from "react-vnc";
import { Button, Grid } from "@chakra-ui/react";
import NextLink from "next/link";

function App() {
  //declare the url to connect to as a state variable
  const [url, setUrl] = useState("wss://test.michaelkeates.co.uk/wsproxy/");

  //declare the state variables
  const [connected, setConnected] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const vncScreenRef = useRef<React.ElementRef<typeof VncScreen>>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  //declare the spacer component to add space between buttons
  const Spacer = () => (
    <div style={{ width: "2rem", display: "inline-block" }} />
  );

  //declare the function to check if the url is valid else return false
  //wss is like https but for websockets and ws is like http but for websockets
  const isValid = (vncUrl: string) => {
    if (!vncUrl.startsWith("ws://") && !vncUrl.startsWith("wss://")) {
      return false;
    }

    return true;
  };

  //declare the function to handle the connect/disconnect button
  const handleConnectClick = () => {
    const { connect, connected, disconnect } = vncScreenRef.current ?? {};

    // if connected, disconnect, else connect and set the state variable to true/false depeding on the connection status
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
      if (!document.fullscreenElement) {
        elem.requestFullscreen().catch((err) => {
          console.log(
            `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
          );
        });
        setIsFullScreen(true);
      } else {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }

    document.addEventListener("fullscreenchange", () => {
      if (document.fullscreenElement) {
        setFullscreen(true);
      } else {
        setFullscreen(false);
      }
    });
  };

  //display the buttons using good ole div
  return (
    <>

        {/*<Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Button
            onClick={handleConnectClick}
            colorScheme="blue"
            width="100%"
            marginBottom="5%"
          >
            {connected ? "Disconnect" : "Disconnect"}
          </Button>
         <Button
            //onClick={handleFullScreenClick}
            colorScheme="red"
            width="100%"
            marginBottom="5%"
          >
  Full Screen
  </Button>
          <NextLink href="fullscreen" passHref>
            <Button colorScheme="red" width="100%" marginBottom="5%">
              FullScreen
            </Button>
          </NextLink>
  </Grid>*/}



        {isValid(url) ? (
          //if url is valid, display the vnc screen with styling, else display a message
          <VncScreen
            url={url}
            scaleViewport
            background="#000000"
            style={{
              //width: "700px",
              width: "100%",
              //height: "500px",
              height: "100%",
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

    </>
  );
}

export default App;
