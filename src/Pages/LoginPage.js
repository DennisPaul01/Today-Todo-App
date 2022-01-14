import React from "react";
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

      <Modal isOpen={isOpenRegister} onClose={onCloseRegister}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontSize="xs">First name</FormLabel>
              <Input placeholder="First name" fontSize="xs" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontSize="xs">Email</FormLabel>
              <Input fontSize="xs" placeholder="Email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontSize="xs">Password</FormLabel>
              <Input fontSize="xs" placeholder="Password" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontSize="xs">Confirm Password</FormLabel>
              <Input fontSize="xs" placeholder="Confirm Password" />
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" width="100%">
            <Button
              onClick={onCloseLogin}
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
              onClick={onCloseRegister}
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

      <Modal isOpen={isOpenLogin} onClose={onCloseLogin}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={1}>
              <FormLabel fontSize="xs">Email</FormLabel>
              <Input fontSize="xs" placeholder="Email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontSize="xs">Password</FormLabel>
              <Input fontSize="xs" placeholder="Password" />
            </FormControl>
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
              Login
            </Button>
            <Button
              onClick={onCloseLogin}
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
