//components/vncclient/vncclient.tsx
//import dependencies and types from react-vnc
import React, { useEffect, useState } from 'react';
import { VncScreen } from 'react-vnc';

//define the props for the vncclient component
interface VncClientProps {
  container?: Element;
  url: string;
}

//define the vnclient component
const VncClient: React.FunctionComponent<VncClientProps> = (
  props,
): JSX.Element => {
  const [url, setUrl] = useState('');

  //useEffect to set the url
  useEffect(() => {
    setUrl(props.url);
  }, [props]);

  //return the vncscreen component
  //return if the url is not empty
  return url.length > 0 ? (
    //parameters for the vncscreen component
    <>
      <VncScreen
        //url={url}
        url="wss://192-168-0-103.766ecefd3d1b629d31ca998f4ee69f4730787fdf.myunraid.net/wsproxy/5700/"
        scaleViewport={true}
        background="#000000"
        resizeSession={true}
        dragViewport={true}
        clipViewport={true}
        style={{
          width: '100%',
          //height: '32vh',
          height: '60vh'
        }}
      />
    </>
  ) : (
    <div>VNC URL not provided</div>
  );
};

//export the vnclient component
export default VncClient;