import React from "react";
import { Box, Text, Badge, Button } from "@chakra-ui/react";
const TaskDone = (props) => {
  const { id, finishDate, statusTask, taskTodo, type } = props;
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
        ml={["5px", "20px"]}
        mt="10px"
        flexDirection={["column", "column", "column", "row"]}
      >
        <Text w={["98%", "98%", "98%", "80%"]} fontSize="xs" color="white">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born
        </Text>
        <Box
          display="flex"
          alignItems="center"
          mt={["10px", "10px", "10px", "0px"]}
        >
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
      </Box>
    </>
  );
};

export default TaskDone;
