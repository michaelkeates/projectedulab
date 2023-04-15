import { NotificationsProvider } from "@mantine/notifications";
import { NhostClient, NhostProvider } from "@nhost/nextjs";
import { NhostApolloProvider } from "@nhost/react-apollo";
import type { AppProps } from "next/app";
import { BACKEND_URL } from "../helpers";
import "../styles/globals.css?inline";
import { ChakraProvider } from "@chakra-ui/react";

const devTools =
  typeof window !== "undefined" && !!process.env.NEXT_PUBLIC_DEBUG;
//if (devTools) {
//  inspect({
//    url: 'https://stately.ai/viz?inspect',
//    iframe: false
//  })
//}

const nhost = new NhostClient({ backendUrl: BACKEND_URL, devTools });
function MyApp({ Component, pageProps }: AppProps) {
  // * Monorepo-related. See: https://stackoverflow.com/questions/71843247/react-nextjs-type-error-component-cannot-be-used-as-a-jsx-component
  // const AnyComponent = Component as any
  return (
    <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider graphqlUrl={BACKEND_URL}>
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
