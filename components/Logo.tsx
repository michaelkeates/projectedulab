import { Box, Flex, Icon } from "@chakra-ui/react";
import { BiSquareRounded } from "react-icons/bi";

export const Logo = ({ collapse }) => (
  <Flex
    w="full"
    alignItems="center"
    justifyContent="space-between"
    flexDirection={collapse ? "row" : "column"}
    gap={4}
  >
    <Box display="flex" alignItems="center" gap={2}>
      <Icon as={BiSquareRounded} fontSize={30} color="blackAlpha.700" />
    </Box>
  </Flex>
);
