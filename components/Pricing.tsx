import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CheckIcon } from "../icons/Icons";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="5" {...rest} alignItems="center">
      <Icon as={CheckIcon} h={"100%"} w={"100%"} />
      <Text textAlign={["left"]} w={"100%"} fontSize={["md","xl"]}>{children}</Text>
    </HStack>
  );
};

export const Pricing = () => {
  return (
    <Box mx={6}>
      <Box
        maxW="994px"
        margin="auto"
        mt="-256px"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg="#D1E8E2" p="60px" w={[null,null,null,"50%"]}>
            <Text fontSize={["xl","2xl"]} fontWeight="extrabold">
              Premium PRO
            </Text>
            <Heading as="h3" fontSize={["5xl","5xl","6xl"]}>
              $329
            </Heading>
            <Text color="#171923" fontSize={["md","lg"]} fontWeight="medium" mt="2">
              billed only once
            </Text>
            <Button bg="#FFCB9A" size="lg" w={["100%"]} mt="6" _hover={{bg: "#2C3531", color: "white"}}>
              Get Started
            </Button>
          </Box>
          <Box px={["20px","60px"]} py={["30px","60px"]} fontSize={["lg","xl"]} bg="white">
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="5" pt="6">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
