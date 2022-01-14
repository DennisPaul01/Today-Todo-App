import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Text, Flex } from "@chakra-ui/react";

import Logo from "../../Assets/logo.svg";
import Personal from "../../Assets/person_24px.svg";
import Work from "../../Assets/work_24px.svg";

const NavBar = () => {
  return (
    <>
      <Box h="90vh" borderRight="2px" borderRightColor="greyLight">
        <Flex
          flexDirection="column"
          pl="40px"
          height="100%"
          justifyContent="space-between"
        >
          <Box>
            <Box pt="10">
              <Image src={Logo} alt="Logo" width="60%" />
            </Box>
            <Box pt="10">
              <Text fontSize="sm">
                Hello{" "}
                <span style={{ color: "#4285F4", fontWeight: "700" }}>
                  Dennis,
                </span>
              </Text>
            </Box>
            <Box pt="10">
              <Text fontSize="xs" color="grey">
                Workspaces
              </Text>
              <Box as="button" display="flex" pt="30px">
                <Image src={Personal} bg="blue" borderRadius="2"></Image>
                <Text color="black" fontSize="xs" fontWeight="400" pl="10px">
                  <Link to="/ap/1"> Personal list</Link>
                </Text>
              </Box>
              <Box as="button" display="flex" mt="10px" pt="10px">
                <Image
                  src={Work}
                  bg="green"
                  borderRadius="2"
                  w="100"
                  padding="5px"
                ></Image>
                <Text color="black" fontSize="xs" fontWeight="400" pl="10px">
                  <Link to="/ap/2">Work list</Link>
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            pb="30px"
          >
            <Box as="button">
              <Text color="black" fontSize="sm" fontWeight="400">
                <Link to="/ap/account">Account</Link>
              </Text>
            </Box>
            <Box as="button">
              <Text color="black" fontSize="sm" fontWeight="400">
                Logout
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
