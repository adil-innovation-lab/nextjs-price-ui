import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Box as="section" pb="112px">
      <Box
        bg="#6B46C1"
        color="#F7FAFC"
        pt="90px"
        pb="198px"
        px="32px"
      >
        <Heading fontWeight="800" fontSize="48px">
          Simple pricing for your business
        </Heading>
        <Text fontWeight="500" fontSize="24px" pt="16px">
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
};
