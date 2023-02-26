import { IconProps, List, ListItem, Text, Button } from "@chakra-ui/react";
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

export const Navigation = ({ collapse }) => {
  const isAuthenticated = useAuthenticated();
  const { signOut } = useSignOut();

  return (
    <List w="full" my={8}>
      <ListItem>
      <NextLink href="/" passHref>
          <Button colorScheme="blue" width="100%" marginBottom="5%">
            Home
          </Button>
        </NextLink>
        <NextLink href="/remote/novnc" passHref>
          <Button colorScheme="blue" width="100%" marginBottom="5%">
            Virtual Machines
          </Button>
        </NextLink>
        <NextLink href="/profile" passHref>
          <Button colorScheme="blue" width="100%" marginBottom="5%">
            Settings
          </Button>
        </NextLink>
        {isAuthenticated && (
          <Button colorScheme="red" onClick={signOut} width="100%">
            Logout
          </Button>
        )}
      </ListItem>
    </List>
  );
};
