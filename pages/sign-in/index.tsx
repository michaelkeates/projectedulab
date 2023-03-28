//pages/sign-in/index.tsx
//import dependencies/packages
import { NextPage } from "next";
//import AuthLink from components so code is not repeated can be reused in other pages
import AuthLink from "../../components/AuthLink";
//import Chakra UI components for styling
import { Flex, HStack, Text } from "@chakra-ui/react";

//create a NextPage component
export const SignInPage: NextPage = () => {
  //return the JSX to be rendered
  return (
    //create a HStack component to hold the main content and add the AuthLink component below which is a button that was imported from the components folder
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
        <Text fontSize={{ base: "8vw", md: 90 }} color="gray.300">
          Welcome
        </Text>
        <Text
          fontSize={{ base: "3vw", md: 20 }}
          color="gray.300"
          marginBottom="2%"
          textAlign="center"
          paddingLeft="20%"
          paddingRight="20%"
        >
          Project eduLab is a project that aims to produce an alternative 'proof
          of concept' online educational web learning platform for the
          fulfilment of the requirements of the course IS3D660 for the
          University of South Wales
        </Text>
        <AuthLink variant="subtle" link="/sign-in/email-password">
          Continue
        </AuthLink>
      </Flex>
    </HStack>
  );
};
//text for title changed to "base" to make it responsive for mobile devices using 'breakpoints'
//export the page
export default SignInPage;
