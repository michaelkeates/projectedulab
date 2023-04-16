import { NotificationsProvider } from "@mantine/notifications";
import { NhostClient, NhostProvider } from "@nhost/nextjs";
import { NhostApolloProvider } from "@nhost/react-apollo";
import type { AppProps } from "next/app";
import { BACKEND_URL } from "../helpers";
import "../styles/globals.css?inline";
import { ChakraProvider } from "@chakra-ui/react";

//@ts-ignore
const nhost = new NhostClient({
  backendUrl: BACKEND_URL,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>
        <NotificationsProvider position="top-right" zIndex={2077}>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </NotificationsProvider>
      </NhostApolloProvider>
    </NhostProvider>
  );
}

export default MyApp;