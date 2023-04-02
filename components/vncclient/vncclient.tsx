//import needed modules/dependencies including react-vnc
import React, { useState, useRef } from "react";
import { VncScreen } from "react-vnc";

function App() {
  //declare the url to connect to as a state variable
  const [url, setUrl] = useState("wss://test.michaelkeates.co.uk/wsproxy/");

  //declare the state variables
  const vncScreenRef = useRef<React.ElementRef<typeof VncScreen>>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  //declare the function to check if the url is valid else return false
  //wss is like https but for websockets and ws is like http but for websockets
  const isValid = (vncUrl: string) => {
    if (!vncUrl.startsWith("ws://") && !vncUrl.startsWith("wss://")) {
      return false;
    }

    return true;
  };

  //display the buttons using good ole div
  return (
    <>
      {/*<div>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} marginTop="-25px" marginBottom="25px">
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
  </div>*/}


        {isValid(url) ? (
          //if url is valid, display the vnc screen with styling, else display a message
          <VncScreen
            url={url}
            background="white"
            scaleViewport={true}
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
