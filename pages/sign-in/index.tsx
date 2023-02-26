import { NextPage } from "next";
import { FaLock } from "react-icons/fa";

import { Divider } from "@mantine/core";

import AuthLink from "../../components/AuthLink";
import OAuthLinks from "../../components/OauthLinks";
import SignInLayout from "../../layouts/SignInLayout";
import { Box, Flex, HStack, IconButton, Text, Button } from "@chakra-ui/react";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

export const SignInPage: NextPage = () => {
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
        <Text fontSize={90} color="gray.300">
          Welcome
        </Text>
        <Text fontSize={20} color="gray.300" marginBottom="2%" textAlign="center" paddingLeft="20%" paddingRight="20%">
          Project eduLab is a project that aims to produce an alternative 'proof
          of concept' online educational web learning platform for the fufilment
          of the requirements of the course IS3D660 for the University of South
          Wales
        </Text>
        <AuthLink variant="subtle" link="/sign-in/email-password">
          Continue
        </AuthLink>
      </Flex>
    </HStack>
  );
};

export default SignInPage;
