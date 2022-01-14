import React from "react";
import { Box, Text, Badge, Button, CloseButton } from "@chakra-ui/react";
const TaskStart = () => {
  return (
    <>
      <Box
        w="96%"
        d="flex"
        boxShadow="base"
        p="6"
        rounded="md"
        bg="white"
        alignItems="center"
        ml="20px"
      >
        <Text w="80%" fontSize="xs">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born
        </Text>
        <Badge bg="green" px="10px" color="white">
          18.10.2021
        </Badge>
        <Button
          mx="10px"
          h="35"
          bg="blue"
          color="white"
          px="40px"
          fontSize="xs"
          _hover={{
            backgroundColor: "blue",
            outline: "none",
            border: "none",
          }}
          _active={{
            backgroundColor: "blue",
            outline: "none",
            border: "none",
          }}
        >
          Done
        </Button>
        <CloseButton
          bg="red"
          color="white"
          _hover={{
            backgroundColor: "red",
            outline: "none",
            border: "none",
          }}
          _active={{
            backgroundColor: "red",
            outline: "none",
            border: "none",
          }}
          _after={{ outline: "none", border: "none" }}
          _before={{ outline: "none", border: "none" }}
        />
      </Box>
    </>
  );
};

export default TaskStart;
