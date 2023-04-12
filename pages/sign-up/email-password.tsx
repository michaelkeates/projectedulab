// Importing necessary modules and components from Next.js, React, Mantine, Chakra UI, and nhost
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import {
  Divider,
  Modal,
  PasswordInput,
  SimpleGrid,
  TextInput,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useSignUpEmailPassword } from "@nhost/nextjs";
import { Flex, HStack, Text, Button, Box } from "@chakra-ui/react";
import AuthLink from "../../components/AuthLink";
import SignUpLayout from "../../layouts/SignUpLayout";

//define a Next.js functional component called SignUpPasswordPage
export const SignUpPasswordPage: NextPage = () => {
  //using Next.js useRouter hook to access the router object
  const router = useRouter();
  //using nhost's useSignUpEmailPassword hook to get the signUpEmailPassword function
  const { signUpEmailPassword } = useSignUpEmailPassword();
  //using useState hook to manage state for email, password, confirmPassword, and emailVerificationToggle
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailVerificationToggle, setEmailVerificationToggle] = useState(false);
  //using useMemo hook to check if the password and confirmPassword match
  const differentPassword = useMemo(
    () =>
      password &&
      password !== confirmPassword &&
      "Should match the given password",
    [password, confirmPassword]
  );
  //define a signUp function to handle user sign up
  const signUp = async () => {
    //using nhost's signUpEmailPassword function to sign up the user with the email and password provided
    const result = await signUpEmailPassword(email, password);
    //display an error notification if the sign up process encounters an error
    if (result.isError) {
      showNotification({
        color: "red",
        title: "Error",
        message: result.isError,
      });
    //display a verification email modal if the user needs to verify their email address
    } else if (result.needsEmailVerification) {
      setEmailVerificationToggle(true);
    //redirect the user to the home page if sign up is successful
    } else {
      router.replace("/");
    }
  };
  //return JSX to render the sign up page UI
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
        {/*rendering a sign up layout component*/}
        <SignUpLayout>
          {/*rendering a verification email modal*/}
          <Modal
            title="Verification email sent"
            transition="fade"
            centered
            transitionDuration={600}
            opened={emailVerificationToggle}
            onClose={() => {
              setEmailVerificationToggle(false);
            }}
          >
            A email has been sent to {email}. Please follow the link to verify
            your email address and to complete your registration.
          </Modal>
          <SimpleGrid cols={1} spacing={6}>
            <Text fontSize={{ base: "6vw", md: 30 }} color="gray.600">
              Signup
            </Text>
            {/* Form inputs for email, password, and confirm password */}
            <TextInput
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordInput
              placeholder="Confirm Password"
              error={differentPassword}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* Signup button and link to go back to sign-in page */}
            <SimpleGrid cols={1} spacing={6}>
              <Button colorScheme="green" onClick={signUp}>
                Signup
              </Button>
              <AuthLink link="/sign-in" variant="white">
                &#8592; Go Back
              </AuthLink>
            </SimpleGrid>
          </SimpleGrid>
        </SignUpLayout>
      </Flex>
    </HStack>
  );
};

export default SignUpPasswordPage;
