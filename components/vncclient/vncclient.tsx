//import needed modules/dependencies including react-vnc
import React, { useState, useRef } from "react";
import { VncScreen } from "react-vnc";
import { Button, Grid, IconButton } from "@chakra-ui/react";
import {
  AiOutlineSearch,
  AiFillHome,
  AiFillQuestionCircle,
  AiTwotoneSnippets,
  AiTwotoneExperiment,
  AiTwotoneSetting,
  AiOutlineLogout,
} from "react-icons/ai";

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
      <div>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} marginTop="-25px">
          <IconButton
            variant="ghost"
            aria-label="search"
            icon={<AiTwotoneSetting />}
            fontSize={26}
            color="blackAlpha.400"
            onClick={handleConnectClick}
          />
          <IconButton
            variant="ghost"
            aria-label="search"
            icon={<AiTwotoneSetting />}
            fontSize={26}
            color="blackAlpha.400"
            onClick={handleFullScreenClick}
          />
        </Grid>
      </div>

      <div id="vnc-screen-container">
        {isValid(url) ? (
          //if url is valid, display the vnc screen with styling, else display a message
          <VncScreen
            url={url}
            scaleViewport
            background="#ffffff"
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
      </div>
    </>
  );
}

export default App;
