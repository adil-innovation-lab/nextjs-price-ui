import { HStack, Box, Text, Stack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { RiShieldStarLine } from "react-icons/ri";
import { BsTagsFill } from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";

export const Features = () => {
  return (
    <Box
      maxW="1024px"
      margin={[null, null, null, "auto"]}
      px={["20px", "20px", "20px", "60px"]}
      py={["30px", "60px"]}
    >
      <Stack
        direction={["column", "column", "row"]}
        px={["20px", "60px"]}
        spacing={["5", "5", "10"]}
      >
        <HStack spacing="5">
          <RiShieldStarLine
            size={useBreakpointValue(["36px", "72px"])}
            color="#116466"
          />
          <Text
            textAlign="left"
            fontSize={["md", "lg"]}
            fontWeight="bold"
            color="#2C3531"
          >
            30 days money back guarantee
          </Text>
        </HStack>
        <HStack spacing="5">
          <BsTagsFill
            size={useBreakpointValue(["36px", "72px"])}
            color="#116466"
          />
          <Text
            textAlign="left"
            fontSize={["md", "lg"]}
            fontWeight="bold"
            color="#2C3531"
          >
            No setup fees 100% hassle-free
          </Text>
        </HStack>
        <HStack spacing="5">
          <VscDebugRestart
            size={useBreakpointValue(["36px", "72px"])}
            color="#116466"
          />
          <Text
            textAlign="left"
            fontSize={["md", "lg"]}
            fontWeight="bold"
            color="#2C3531"
          >
            No monthly subscription. Pay once and for all
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
};
