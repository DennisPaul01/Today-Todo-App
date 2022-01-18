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
        ml={["5px", "20px"]}
        mt="10px"
        flexDirection={["column", "column", "column", "row"]}
      >
        <Text w={["98%", "98%", "98%", "80%"]} fontSize="xs">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born
        </Text>
        <Box
          display="flex"
          alignItems="center"
          mt={["10px", "10px", "10px", "0px"]}
        >
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
      </Box>
    </>
  );
};

export default TaskStart;
