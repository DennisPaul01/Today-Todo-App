import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import useLogin from "../hooks/use-login";
import useRegister from "../hooks/use-register";
import AlertDialog from "../Components/UI/AlertDialog";

import {
  Container,
  Box,
  Text,
  Image,
  Button,
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
} from "@chakra-ui/react";

import Logo from "../Assets/logo.svg";

const LoginPage = () => {
  const authDates = useLogin();
  const registerUser = useRegister();
  const [showError, setShowError] = useState(false);
  const nameInputRegisterRef = useRef();
  const emailInputRegisterRef = useRef();
  const passwordInputRegisterRef = useRef();
  const emailInputLoginRef = useRef();
  const passwordInputLoginRef = useRef();

  const stateUser = useSelector((state) => state.auth.isLoggedIn);
  const statusLogin = useSelector((state) => state.auth.statusLogin);

  const loginHandler = () => {
    authDates(
      emailInputLoginRef.current.value,
      passwordInputLoginRef.current.value
    );
    console.log(statusLogin);
    if (stateUser === false) {
      setShowError(true);
    }
  };

  const registerHandler = () => {
    registerUser(
      nameInputRegisterRef.current.value,
      emailInputRegisterRef.current.value,
      passwordInputRegisterRef.current.value
    );
  };

  const {
    isOpen: isOpenRegister,
    onOpen: onOpenRegister,
    onClose: onCloseRegister,
  } = useDisclosure();
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();

  return (
    <Container maxW="1596" mx="auto" pt="50px">
      <Box
        width="100%"
        bg="white"
        borderRadius="30px"
        overflow="hidden"
        h="90vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={Logo} alt="Logo" width="40%" />
        <Text mt="5" fontFamily="heading" fontSize="32">
          The simplest way is the best way.
        </Text>

        <Text textAlign="center" mt="35">
          A simple list of tasks with manual sorting. Without advertising. No
          reference to date or time.<br></br> You can add or delete tasks, you
          can reorder tasks. Nothing more.
        </Text>
        <Box mt="35">
          <Button
            onClick={onOpenLogin}
            mr="10px"
            h="55"
            bg="blue"
            color="white"
            px="90"
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
            Login
          </Button>
          <Button
            h="55"
            bg="red"
            color="white"
            px="90"
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
            onClick={onOpenRegister}
          >
            Register
          </Button>
        </Box>
      </Box>

      {/* Register Form */}

      <Modal
        isOpen={isOpenRegister}
        onClose={() => {
          setShowError(false);
          onCloseRegister();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          {showError && <AlertDialog errorMessage={statusLogin}></AlertDialog>}
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontSize="xs">First name</FormLabel>
              <Input
                placeholder="First name"
                fontSize="xs"
                ref={nameInputRegisterRef}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontSize="xs">Email</FormLabel>
              <Input
                fontSize="xs"
                ref={emailInputRegisterRef}
                placeholder="Email"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontSize="xs">Password</FormLabel>
              <Input
                fontSize="xs"
                ref={passwordInputRegisterRef}
                placeholder="Password"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" width="100%">
            <Button
              onClick={registerHandler}
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
              Register
            </Button>
            <Button
              onClick={() => {
                setShowError(false);
                onCloseRegister();
              }}
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

      {/* // Login Form */}

      <Modal
        isOpen={isOpenLogin}
        onClose={() => {
          setShowError(false);
          onCloseLogin();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login your account</ModalHeader>
          {showError && <AlertDialog errorMessage={statusLogin}></AlertDialog>}
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={1}>
              <FormLabel fontSize="xs">Email</FormLabel>
              <Input
                fontSize="xs"
                placeholder="Email"
                type="email"
                required
                ref={emailInputLoginRef}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontSize="xs">Password</FormLabel>
              <Input
                fontSize="xs"
                placeholder="Password"
                type="password"
                ref={passwordInputLoginRef}
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" width="100%">
            <Button
              onClick={loginHandler}
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
              Login
            </Button>
            <Button
              onClick={() => {
                setShowError(false);
                onCloseLogin();
              }}
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
    </Container>
  );
};

export default LoginPage;
