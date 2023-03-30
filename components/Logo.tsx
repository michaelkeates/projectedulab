import { Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
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
      {collapse && (
        <Text fontWeight="bold" fontSize={16}>
          Project eduLab
        </Text>
      )}
    </Box>
  </Flex>
);
