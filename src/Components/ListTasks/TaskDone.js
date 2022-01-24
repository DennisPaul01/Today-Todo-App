import React from "react";

import useDeleteData from "../../hooks/use-deleteData";
import useFetchData from "../../hooks/use-fetchData";

import { Box, Text, Badge, Button } from "@chakra-ui/react";

const TaskDone = (props) => {
  const { id, finishDate, taskTodo } = props;

  const deleteTask = useDeleteData();
  const fetchData = useFetchData();

  const deleteTaskHandler = () => {
    deleteTask(id);
    fetchData();
  };
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
          {taskTodo}
        </Text>
        <Box
          display="flex"
          alignItems="center"
          mt={["10px", "10px", "10px", "0px"]}
        >
          <Badge bg="grey" px="10px" color="white">
            {finishDate}
          </Badge>
          <Button
            onClick={deleteTaskHandler}
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
