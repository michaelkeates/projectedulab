import React, { useState, useRef } from "react";
import { VncScreen } from "react-vnc";

function App() {
  const [url, setUrl] = useState("wss://192.168.0.103/wsproxy/5702/");
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
    const { connect, connected, disconnect } =
      vncScreenRef.current ?? {};

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
        <button onClick={handleConnectClick}>
          {connected ? "Disconnect" : "Connect"}
        </button>

        <button onClick={handleFullScreenClick}>Full Screen</button>
      </div>

      <div
        style={{ margin: "1rem", height: "75vh" }}
        id="vnc-screen-container"
      >
        {isValid(url) ? (
          <VncScreen
            url={url}
            scaleViewport
            background="#000000"
            style={{
              width: "100%",
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