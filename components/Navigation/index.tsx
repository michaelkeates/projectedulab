//components/Navigation/index.tsx

//import styling components from chakra
import { IconButton, Flex } from "@chakra-ui/react";
//import useSignOut hook from nhost
import { useSignOut } from "@nhost/nextjs";
//import NextLink component from next to allow for navigation between pages
import NextLink from "next/link";
//import icons
import {
  AiFillHome,
  AiFillQuestionCircle,
  AiTwotoneSnippets,
  AiTwotoneExperiment,
  AiOutlineLogout,
  AiTwotoneCode,
} from "react-icons/ai";

//create Navigation component
export const Navigation = ({ collapse }) => {
  //use useSignOut hook to sign out user
  const { signOut } = useSignOut();

  //return JSX for Navigation component to display navigation bar
  return (
    <Flex
      flexDirection={collapse ? "column" : "column"}
      paddingTop="55px"
    >
      <NextLink href="/" passHref>
        <IconButton
          variant="ghost"
          aria-label="search"
          icon={<AiFillHome />}
          fontSize={26}
          color="yellow.400"
          colorScheme={"blackAlpha"}
        />
      </NextLink>
      <NextLink href="/create" passHref>
        <IconButton
          variant="ghost"
          aria-label="search"
          icon={<AiFillQuestionCircle />}
          fontSize={26}
          color="blue.400"
          colorScheme={"blackAlpha"}
        />
      </NextLink>
      <NextLink href="/quiz" passHref>
        <IconButton
          variant="ghost"
          aria-label="search"
          icon={<AiTwotoneSnippets />}
          fontSize={26}
          color="red.400"
          colorScheme={"blackAlpha"}
        />
      </NextLink>
      <NextLink href="/code" passHref>
        <IconButton
          variant="ghost"
          aria-label="search"
          icon={<AiTwotoneCode />}
          fontSize={26}
          color="green.400"
          colorScheme={"blackAlpha"}
        />
      </NextLink>
      <NextLink href="/remote/novnc" passHref>
        <IconButton
          variant="ghost"
          aria-label="search"
          icon={<AiTwotoneExperiment />}
          fontSize={26}
          color="orange.400"
          colorScheme={"blackAlpha"}
        />
      </NextLink>
      <IconButton
        variant="ghost"
        aria-label="search"
        icon={<AiOutlineLogout />}
        fontSize={26}
        color="red.400"
        onClick={signOut}
        colorScheme={"blackAlpha"}
      />
    </Flex>
  );
};
