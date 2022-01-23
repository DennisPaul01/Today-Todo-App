import React, { useRef, useState } from "react";
import { Text, Box, Input, Button } from "@chakra-ui/react";
import useResetPassword from "../../hooks/use-resetPassword";

import { useSelector } from "react-redux";
import AlertDialog from "../UI/AlertDialog";

const AccountDetails = () => {
  const statusLogin = useSelector((state) => state.auth.statusLogin);
  const emailUser = useSelector((state) => state.auth.email);
  const nameUser = useSelector((state) => state.personalData.userName);

  const resetPassword = useResetPassword();
  const newPasswordRef = useRef();
  const resetPasswordHandler = () => {
    resetPassword(newPasswordRef.current.value);
    setShowError(true);
  };
  const [showError, setShowError] = useState(false);
  return (
    <>
      <Box height="100%" minHeight="68vh">
        <Text
          m="20px"
          borderBottom="2px"
          borderBottomColor="greyLight"
          pb="5px"
          fontFamily="heading"
          fontSize="md"
          color="grey"
        >
          Account Details
        </Text>

        <Box boxShadow="xl" p="6" rounded="md" bg="white" mx="20px">
          <Text ml="10px" color="black" fontSize="xs" fontWeight="400">
            Name: {nameUser}
          </Text>
          <Text
            ml="10px"
            color="black"
            fontSize="xs"
            fontWeight="400"
            mt="20px"
          >
            Email: {emailUser}
          </Text>
        </Box>

        <Text
          m="20px"
          borderBottom="2px"
          borderBottomColor="greyLight"
          pb="5px"
          fontFamily="heading"
          fontSize="md"
          color="grey"
          mt="50px"
        >
          Account Details
        </Text>

        <Box
          boxShadow="xl"
          p="3"
          rounded="md"
          bg="white"
          mx="20px"
          display="flex"
          justifyContent="flex-start"
          alignItems={["flex-start", "center"]}
          flexDirection={["column", "row"]}
        >
          <Text ml="10px" fontSize="xs" fontWeight="700" color="red">
            New Password
          </Text>
          <Input
            width={["100%", "40%"]}
            fontSize="xs"
            mx={["0", "3"]}
            my={["3", "0"]}
            ref={newPasswordRef}
          />
          <Button
            onClick={resetPasswordHandler}
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
            Change
          </Button>
        </Box>

        <Box
          boxShadow="xl"
          p="3"
          rounded="md"
          bg="white"
          mx="20px"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          {showError && <AlertDialog errorMessage={statusLogin}></AlertDialog>}
        </Box>
      </Box>
    </>
  );
};

export default AccountDetails;
