import React, { useState } from "react";
import TaskStart from "./TaskStart.js";
import TaskDone from "./TaskDone.js";
import useTaskAdd from "../../hooks/use-taskAdd.js";
import AlertDialog from "../UI/AlertDialog";
import { useSelector } from "react-redux";

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
import useFetchData from "../../hooks/use-fetchData";
import AddIcon from "../../Assets/add.svg";

const ListTasksPersonal = () => {
  const addTask = useTaskAdd();
  const [showModal, setShowModal] = useState(false);
  const [taskTodo, setTaskTodo] = useState();
  const [finishDate, setfinishDate] = useState();
  const [type, setType] = useState("Personal");
  const [messageError, setMessageError] = useState("");

  const fetchData = useFetchData();
  const taskCheck = useSelector((state) => state.database.tasks);

  const today = new Date();
  const dateAddedTask =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dataTime = dateAddedTask + " " + time;

  const {
    isOpen: isOpenTask,
    onOpen: onOpenTask,
    onClose: onCloseTask,
  } = useDisclosure();

  const addTaskHandler = () => {
    if (taskTodo == null) {
      setShowModal(true);
      setMessageError("ERROR INPUT");
      console.log(messageError);
    }

    if (finishDate == null) {
      setShowModal(true);
      setMessageError("ERROR DATE");
    }

    if (finishDate != null && taskTodo != null) {
      addTask({
        taskTodo,
        finishDate,
        addedDate: dataTime,
        type,
        statusTask: false,
      });
      setTaskTodo(null);
      setfinishDate(null);
      setShowModal(false);
      onCloseTask();
    }
    fetchData();
  };

  const taskUnfinised = taskCheck
    .filter((task) => task.statusTask === false && task.type === "Personal")
    .map((task) => {
      return (
        <TaskStart
          key={task.id}
          id={task.id}
          finishDate={task.finishDate}
          statusTask={task.statusTask}
          taskTodo={task.taskTodo}
          type={task.type}
        ></TaskStart>
      );
    });

  const taskFinished = taskCheck
    .filter((task) => task.statusTask === true && task.type === "Personal")
    .map((task) => {
      return (
        <TaskDone
          key={task.id}
          id={task.id}
          finishDate={task.finishDate}
          statusTask={task.statusTask}
          taskTodo={task.taskTodo}
          type={task.type}
        ></TaskDone>
      );
    });
  return (
    <>
      <Box w="100%" h="100%" minHeight="70vh">
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

        {taskUnfinised}
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
        {taskFinished}

        {/* <TaskDone></TaskDone>
        <TaskDone></TaskDone> */}
      </Box>

      <Modal isOpen={isOpenTask} onClose={onCloseTask}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize="sm">Enter your task</Text>
            {showModal && <AlertDialog errorMessage={messageError} />}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={1}>
              <FormLabel fontSize="xs">Your task</FormLabel>
              <Input
                fontSize="xs"
                placeholder="Task"
                onChange={(event) => {
                  setTaskTodo(event.target.value);
                }}
              />
            </FormControl>
            <FormControl mt={1}>
              <FormLabel fontSize="xs">End date</FormLabel>
              <Input
                fontSize="xs"
                type="date"
                placeholder="Task"
                onChange={(event) => {
                  setfinishDate(event.target.value);
                }}
              />
            </FormControl>
            <FormLabel fontSize="xs" mt={2}>
              Type
            </FormLabel>
            <Select
              size="xs"
              onChange={(event) => {
                console.log(event.target.value);
                setType(event.target.value);
              }}
            >
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
              onClick={addTaskHandler}
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

export default ListTasksPersonal;
