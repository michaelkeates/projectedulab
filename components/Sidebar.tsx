import React from "react";
import { Box } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Sidebar = ({ collapse }) => (
    <Box w="10">
      <Logo collapse={collapse} />
      <Navigation collapse={collapse} />
    </Box>
);