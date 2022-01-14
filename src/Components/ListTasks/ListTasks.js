import React from "react";
import { Box, Button, Text, Image } from "@chakra-ui/react";
import AddIcon from "../../Assets/add.svg";

const ListTasks = () => {
  return (
    <>
      <Box w="100%" h="100%">
        <Box p="20px">
          <Button
            boxShadow="xs"
            height="65px"
            width="100%"
            bg="blue"
            color="white"
            fontFamily="heading"
            fontSize="xs"
            fontWeight="normal"
            outline="none"
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
            _after={{ outline: "none", border: "none" }}
            _before={{ outline: "none", border: "none" }}
          >
            Add new task <Image src={AddIcon} ml="10px"></Image>
          </Button>
        </Box>
        <Text
          m="20px"
          borderBottom="2px"
          borderBottomColor="greyLight"
          pb="5px"
          fontFamily="heading"
          fontSize="md"
          color="grey"
        >
          To do
        </Text>
        <Text
          m="20px"
          borderBottom="2px"
          borderBottomColor="greyLight"
          pb="5px"
          fontFamily="heading"
          fontSize="md"
          color="grey"
        >
          Done
        </Text>
      </Box>
    </>
  );
};

export default ListTasks;
