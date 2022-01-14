import React from "react";
import { Box, Text, Badge, Button } from "@chakra-ui/react";
const TaskDone = () => {
  return (
    <>
      <Box
        w="96%"
        d="flex"
        boxShadow="base"
        p="6"
        rounded="md"
        bg="blueLighter"
        alignItems="center"
        ml="20px"
      >
        <Text w="80%" fontSize="xs" color="white">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born
        </Text>
        <Badge bg="grey" px="10px" color="white">
          18.10.2021
        </Badge>
        <Button
          mx="10px"
          h="35"
          bg="red"
          color="white"
          px="40px"
          fontSize="xs"
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
        >
          Delete
        </Button>
      </Box>
    </>
  );
};

export default TaskDone;
