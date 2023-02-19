import React, { useState, useRef } from "react";
import { VncScreen } from "react-vnc";

function App() {
  const [url, setUrl] = useState("wss://192.168.0.103/wsproxy/5702/");
  const [connected, setConnected] = useState(false);
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

  return (
    <>
      <div style={{ margin: "1rem" }}>
        <label htmlFor="url">URL for VNC Stream2</label>
        <Spacer />

        <input
          type="text"
          onChange={({ target: { value } }) => {
            setUrl(value);
          }}
          name="url"
          value={url}
          placeholder="wss://your-vnc-url"
        />
      </div>

      <div style={{ opacity: 0.5, margin: "1rem" }}>
        Since the site is loaded over HTTPS, only `wss://` URLs (SSL encrypted
        websockets URLs) are supported.
      </div>

      <div style={{ margin: "1rem" }}>
        <button
          onClick={() => {
            const { connect, connected, disconnect } =
              vncScreenRef.current ?? {};
            if (connected) {
              disconnect?.();
              return;
            }
            connect?.();
          }}
        >
          Connect / Disconnect
        </button>
      </div>

      <div style={{ margin: "1rem" }}>
        {isValid(url) ? (
          <VncScreen
            url={url}
            scaleViewport
            background="#000000"
            style={{
              width: "75vw",
              height: "75vh",
            }}
            debug
          />
        ) : (
          <div>VNC URL not provided.</div>
        )}
      </div>
    </>
  );
}

export default App;
