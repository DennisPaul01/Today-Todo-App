import React from "react";
import { Box, Text, Badge, Button, CloseButton } from "@chakra-ui/react";
import useDeleteData from "../../hooks/use-deleteData";
import useModifyData from "../../hooks/use-modifyData";
const TaskStart = (props) => {
  const { id, finishDate, taskTodo } = props;
  const deleteTask = useDeleteData();
  const modifyTask = useModifyData();

  const deleteTaskHandler = (e) => {
    e.preventDefault();
    deleteTask(id);
  };

  const modifyTaskHandler = (e) => {
    e.preventDefault();
    modifyTask(id);
  };
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
          {taskTodo}
        </Text>
        <Box
          display="flex"
          alignItems="center"
          mt={["10px", "10px", "10px", "0px"]}
        >
          <Badge bg="green" px="10px" color="white">
            {finishDate}
          </Badge>
          <Button
            onClick={modifyTaskHandler}
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
            onClick={deleteTaskHandler}
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
