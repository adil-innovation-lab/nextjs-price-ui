import { HStack, Box, Text } from "@chakra-ui/react";
import React from "react";
import { RiShieldStarLine } from "react-icons/ri";
import { BsTagsFill } from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";

export const Features = () => {
  return (
    <Box maxW="1024px" margin="auto" pt="60px" pb="32px">
      <HStack px="48px" spacing="20px">
        <HStack spacing="24px">
          <RiShieldStarLine size="48px" color="purple" />
          <Text textAlign="left" fontSize="18px" fontWeight="700">
            30 days money back guarantee
          </Text>
        </HStack>
        <HStack spacing="24px">
          <BsTagsFill size="48px" color="purple" />
          <Text textAlign="left" fontSize="18px" fontWeight="700">
            30 days money back guarantee
          </Text>
        </HStack>
        <HStack spacing="24px">
          <VscDebugRestart size="48px" color="purple" />
          <Text textAlign="left" fontSize="18px" fontWeight="700">
            30 days money back guarantee
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};
