import type { NextPage } from "next";
import { useState } from "react";

import { Input, Title } from "@mantine/core";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import {
  useAccessToken,
  useAuthenticated,
  useChangeEmail,
  useChangePassword,
  useSignOut,
} from "@nhost/nextjs";
import { useAuthQuery } from "@nhost/react-apollo";

import { authProtected } from "../components/protected-route";
import { BOOKS_QUERY } from "../helpers";

import { Sidebar } from "../components/Sidebar";

// * Reference: https://blog.codepen.io/2021/09/01/331-next-js-apollo-server-side-rendering-ssr/

const Home: NextPage = () => {
  const [collapse, setCollapse] = useState(false);
  const isAuthenticated = useAuthenticated();
  //const [email] = useState("");
  const [email] = useState("your current email");
  const [password] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const accessToken = useAccessToken();
  const { signOut } = useSignOut();
  const { changeEmail, ...changeEmailResult } = useChangeEmail();
  const { changePassword, ...changePasswordResult } = useChangePassword();
  const { loading, data, error } = useAuthQuery(BOOKS_QUERY);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuStateChange = (state: { isOpen: boolean }) => {
    setIsMenuOpen(state.isOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={{ base: 2, md: 5 }}>
      <Box
        position="absolute"
        top={0}
        left={0}
        marginLeft="3vh"
        marginTop="5vh"
        zIndex={1}
        w={isMenuOpen ? "250px" : "0"}
        h="full"
        bg="gray.100"
        overflow="hidden"
        transition="width 0.3s ease-in-out"
      >
        <Sidebar collapse={false} />
      </Box>
      <Flex
        as="main"
        w="full"
        h="full"
        minH={{ base: "100vh", md: "auto" }}
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
        zIndex={1}
        right={1}
        style={{
          transform: isMenuOpen ? "translateX(80px)" : "none",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <IconButton
          aria-label="Menu"
          icon={<MdMenu />}
          position="absolute"
          top={4}
          left={4}
          onClick={toggleMenu}
        />
        <Text fontSize={100} color="gray.300">
          Welcome
        </Text>
        {isAuthenticated ? (
          <>
            User authenticated: {isAuthenticated ? "yes" : "no"}
            <Button onClick={signOut}>Logout</Button>
            <Input
              value={email}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <Button onClick={() => changeEmail(email)}>Change email</Button>
            <div>{JSON.stringify(changeEmailResult)}</div>
            <Button onClick={() => changePassword(password)}>
              Change password
            </Button>
            <Input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <div>{JSON.stringify(changePasswordResult)}</div>
            <Title>Guarded Server-side Page</Title>
            <div>Access token: {accessToken}</div>
          </>
        ) : (
          <div>go to /sign-in</div>
        )}

        {isAuthenticated && (
          <ul>
            <div>Helloooooo!</div>
            <Button onClick={signOut}>Logout</Button>
          </ul>
        )}
        {!loading && error && <div>ok {JSON.stringify(error)}</div>}
      </Flex>
    </HStack>
  );
};

export default authProtected(Home);
