import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import { Divider, PasswordInput, SimpleGrid, TextInput } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useSignInEmailPassword } from "@nhost/nextjs";

import AuthLink from "../../components/AuthLink";
import SignInLayout from "../../layouts/SignInLayout";

import { Box, Flex, HStack, IconButton, Text, Button } from "@chakra-ui/react";

export const SignInPasswordPage: NextPage = () => {
  const router = useRouter();
  const { signInEmailPassword } = useSignInEmailPassword();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async () => {
    const result = await signInEmailPassword(email, password);
    if (result.isError) {
      showNotification({
        color: "red",
        title: "Error",
        //message: result.error.message
        message: "Invalid email or password",
      });
    } else if (result.needsEmailVerification) {
      showNotification({
        color: "red",
        title: "Error",
        message:
          "You need to verify your email first. Please check your mailbox and follow the confirmation link to complete the registration.",
      });
    } else {
      router.replace("/");
    }
  };
  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={10}>
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
        <SignInLayout title="Login">
          <SimpleGrid cols={1} spacing={6}>
            <TextInput
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <PasswordInput
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <SimpleGrid cols={2} spacing={6}>
              <AuthLink link="/sign-in" variant="white">
                &#8592; Go Back
              </AuthLink>
              <Button onClick={signIn}>Login</Button>
            </SimpleGrid>
          </SimpleGrid>
          <Divider />
        </SignInLayout>
      </Flex>
    </HStack>
  );
};

export default SignInPasswordPage;
