import React from "react";
import TaskStart from "./TaskStart.js";
import TaskDone from "./TaskDone.js";

import {
  Box,
  Button,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  Input,
  FormControl,
  Select,
} from "@chakra-ui/react";

import AddIcon from "../../Assets/add.svg";

const ListTasks = () => {
  const {
    isOpen: isOpenTask,
    onOpen: onOpenTask,
    onClose: onCloseTask,
  } = useDisclosure();

  return (
    <>
      <Box w="100%" h="100%">
        <Box p="20px">
          <Button
            onClick={onOpenTask}
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
        <TaskStart></TaskStart>
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
        <TaskDone></TaskDone>
        <TaskDone></TaskDone>
        <TaskDone></TaskDone>
      </Box>

      <Modal isOpen={isOpenTask} onClose={onCloseTask}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter your task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={1}>
              <FormLabel fontSize="xs">Your task</FormLabel>
              <Input fontSize="xs" placeholder="Email" />
            </FormControl>
            <FormControl mt={1}>
              <FormLabel fontSize="xs">End date</FormLabel>
              <Input fontSize="xs" type="date" placeholder="Email" />
            </FormControl>
            <FormLabel fontSize="xs" mt={2}>
              Type
            </FormLabel>
            <Select size="xs">
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
            </Select>
          </ModalBody>

          <ModalFooter display="flex" width="100%">
            <Button
              bg="blue"
              color="white"
              fontSize="xs"
              px={50}
              mr={3}
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
              Enter
            </Button>
            <Button
              onClick={onCloseTask}
              fontSize="xs"
              px={50}
              _hover={{
                color: "white",
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
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ListTasks;
