import { HStack, Box, Text } from "@chakra-ui/react";
import React from "react";
import { RiShieldStarLine } from "react-icons/ri";
import { BsTagsFill } from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";

export const Features = () => {
  return (
    <Box maxW="1024px" margin="auto" pt="60px" pb="8">
      <HStack px="12" spacing="5">
        <HStack spacing="6">
          <RiShieldStarLine size="48px" color="purple" />
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            30 days money back guarantee
          </Text>
        </HStack> 
        <HStack spacing="6">
          <BsTagsFill size="48px" color="purple" />
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            30 days money back guarantee
          </Text>
        </HStack>
        <HStack spacing="6">
          <VscDebugRestart size="48px" color="purple" />
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            30 days money back guarantee
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};
