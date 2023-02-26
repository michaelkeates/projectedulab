import type { NextPage } from "next";
import { useState } from "react";

import { Input, Title } from "@mantine/core";
import { Box, Flex, HStack, IconButton, Text, Button } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { Sidebar } from "../components/Sidebar";
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

// * Reference: https://blog.codepen.io/2021/09/01/331-next-js-apollo-server-side-rendering-ssr/

const Home: NextPage = () => {
  const [collapse, setCollapse] = useState(false);
  const isAuthenticated = useAuthenticated();
  const [email] = useState("");
  const [password] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const accessToken = useAccessToken();
  const { signOut } = useSignOut();
  const { changeEmail, ...changeEmailResult } = useChangeEmail();
  const { changePassword, ...changePasswordResult } = useChangePassword();
  const { loading, data, error } = useAuthQuery(BOOKS_QUERY);
  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={10}>
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={collapse ? 350 : 100}
        bg="white"
        alignItems="start"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRadius="3xl"
      >
        <Sidebar collapse={collapse} />
      </Flex>
      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
      >
        <IconButton
          aria-label="Menu Colapse"
          icon={<MdMenu />}
          position="absolute"
          top={6}
          left={6}
          onClick={() => setCollapse(!collapse)}
        />
        <Text fontSize={100} color="gray.300">
          Welcome
        </Text>
      </Flex>
    </HStack>
  );
};

export default authProtected(Home);
