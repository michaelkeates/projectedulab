//pages/sign-in/email-password.tsx

import { NextPage } from "next"; //import Next.js types
import { useRouter } from "next/router"; //import router hook
import { useState } from "react"; //import React hook
import { Divider, PasswordInput, SimpleGrid, TextInput } from "@mantine/core"; //import UI components from Mantine library
import { showNotification } from "@mantine/notifications"; //import notification function from Mantine library
import { useSignInEmailPassword } from "@nhost/nextjs"; //import signIn function from Nhost library
import AuthLink from "../../components/AuthLink"; //import AuthLink component
import SignInLayout from "../../layouts/SignInLayout"; //import SignInLayout component
import { Flex, HStack, Button, Text, Box } from "@chakra-ui/react"; //import UI components from Chakra-UI library

export const SignInPasswordPage: NextPage = () => { //create functional component
  const router = useRouter(); //initialize router hook
  const { signInEmailPassword } = useSignInEmailPassword(); //initialize signIn function from Nhost library
  const [email, setEmail] = useState(""); //initialize state for email
  const [password, setPassword] = useState(""); //initialize state for password

  const signIn = async () => { //create async function for user sign in
    const result = await signInEmailPassword(email, password); //call signInEmailPassword function from Nhost library with email and password inputs
    if (result.isError) { //if there is an error with user sign in
      showNotification({ //show notification using Mantine library
        color: "red",
        title: "Error",
        message: "Invalid email or password",
      });
    } else if (result.needsEmailVerification) { //if user's email needs to be verified
      showNotification({ //show notification using Mantine library
        color: "red",
        title: "Error",
        message:
          "You need to verify your email first. Please check your mailbox and follow the confirmation link to complete the registration.",
      });
    } else { //if user is successfully signed in
      router.replace("/"); //redirect user to homepage
    }
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
        h="full"
        bg="gray.100"
        overflow="hidden"
        transition="width 0.3s ease-in-out"
      >
      </Box>
      <Flex
        as="main"
        w="full"
        minH={{ base: "100vh", md: "auto" }}
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
        zIndex={1}
        right={1}
      >
        <SignInLayout> {/*import SignInLayout component*/}
          <SimpleGrid cols={1} spacing={6}>
            <Text fontSize={{ base: "6vw", md: 30 }} color="gray.600">
              Login
            </Text> {/*create text for login*/}
            <TextInput
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            /> {/*add input for email*/}
            <PasswordInput
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            /> {/*add input for password*/}
            <SimpleGrid cols={2} spacing={6}>
              <AuthLink link="/sign-in" variant="white">
                &#8592; Go Back
              </AuthLink> {/*use authlink component with link and variant propsk*/}
              <Button colorScheme="green" onClick={signIn}>
                Login
              </Button>
            </SimpleGrid>
          </SimpleGrid>
        </SignInLayout>
      </Flex>
    </HStack>
  );
};

export default SignInPasswordPage;
