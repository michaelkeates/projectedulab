import {
  IconProps,
  List,
  ListItem,
  Text,
  Button,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineShoppingBag,
  MdMailOutline,
  MdOutlineFlag,
  MdCalendarToday,
  MdOutlineSupervisorAccount,
  MdOutlineSettingsInputComposite,
  MdOutlineChatBubbleOutline,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import { NavItem } from "./NavItem";
import { useAuthenticated, useSignOut } from "@nhost/nextjs";
import NextLink from "next/link";
import {
  AiOutlineSearch,
  AiFillHome,
  AiFillQuestionCircle,
  AiTwotoneSnippets,
  AiTwotoneExperiment,
  AiTwotoneSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiSquareRounded } from "react-icons/bi";

export const Navigation = ({ collapse }) => {
  const isAuthenticated = useAuthenticated();
  const { signOut } = useSignOut();

  return (
    <Flex
      //w="full"
      //alignItems="center"
      //justifyContent="space-between"
      flexDirection={collapse ? "column" : "column"}
      //gap={4}
      paddingTop="55px"
    >
      <NextLink href="/" passHref>
        <IconButton
          variant="ghost"
          aria-label="search"
          icon={<AiFillHome />}
          fontSize={26}
          color="yellow.400"
        />
      </NextLink>
      <NextLink href="/create" passHref>
        <IconButton
          variant="ghost"
          aria-label="search"
          icon={<AiFillQuestionCircle />}
          fontSize={26}
          color="blue.400"
        />
      </NextLink>
      <NextLink href="/quiz" passHref>
        <IconButton
          variant="ghost"
          aria-label="search"
          icon={<AiTwotoneSnippets />}
          fontSize={26}
          color="red.400"
        />
      </NextLink>
      <NextLink href="/remote/novnc" passHref>
        <IconButton
          variant="ghost"
          aria-label="search"
          icon={<AiTwotoneExperiment />}
          fontSize={26}
          color="orange.400"
        />
      </NextLink>
        <NextLink href="/profile" passHref>
          <IconButton
            variant="ghost"
            aria-label="search"
            icon={<AiTwotoneSetting />}
            fontSize={26}
            color="blackAlpha.400"
          />
        </NextLink>
        <IconButton
          variant="ghost"
          aria-label="search"
          icon={<AiOutlineLogout />}
          fontSize={26}
          color="red.400"
          onClick={signOut}
        />
    </Flex>
  );
};
