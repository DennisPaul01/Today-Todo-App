import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Image, Text, Flex, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../Store/userAuth-slice";
import Logo from "../../Assets/logo.svg";
import Personal from "../../Assets/person_24px.svg";
import Work from "../../Assets/work_24px.svg";

const NavBar = () => {
  const [headerMenuBurger, setHeaderMenuBurger] = useState("block");
  const [headerMenuClose, setHeaderMenuClose] = useState("none");

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <Box
        height="100%"
        borderRight="2px"
        borderRightColor="greyLight"
        display={["block", "block"]}
      >
        <Flex
          flexDirection="column"
          pl="40px"
          height="100%"
          alignItems={"left"}
          display={["none", "block"]}
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
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              pb="30px"
              mt="20px"
            >
              <Box as="button">
                <Text color="black" fontSize="sm" fontWeight="400">
                  <Link to="/ap/account">Account</Link>
                </Text>
              </Box>
              <Box as="button">
                <Text
                  color="black"
                  fontSize="sm"
                  fontWeight="400"
                  onClick={logoutHandler}
                >
                  Logout
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
        <Box display={["block", "none"]}>
          <Box
            height="100px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Image src={Logo} alt="Logo" width="70%" ml="20px" />
            </Box>
            <IconButton
              aria-label="Open Menu"
              size="md"
              mr={2}
              bg="white"
              display={headerMenuBurger}
              onClick={() => {
                setHeaderMenuClose("block");
                setHeaderMenuBurger("none");
              }}
              icon={<HamburgerIcon />}
            />

            <IconButton
              aria-label="Open Menu"
              size="sm"
              mr={2}
              icon={<CloseIcon />}
              display={headerMenuClose}
              bg="white"
              onClick={() => {
                setHeaderMenuBurger("block");
                setHeaderMenuClose("none");
              }}
            />
          </Box>
          {headerMenuClose === "block" && (
            <Box
              display="flex"
              flexDirection="column"
              width="100%"
              alignItems="center"
              bg="white"
            >
              <Box as="button" display="flex">
                <Text color="black" fontSize="sm" fontWeight="400">
                  <Link to="/ap/1"> Personal list</Link>
                </Text>
              </Box>
              <Box as="button" display="flex" mt="10px">
                <Text color="black" fontSize="sm" fontWeight="400">
                  <Link to="/ap/2">Work list</Link>
                </Text>
              </Box>

              <Box as="button" display="flex">
                <Text color="black" fontSize="sm" fontWeight="400">
                  <Link to="/ap/account">Account</Link>
                </Text>
              </Box>

              <Box as="button" display="flex">
                <Text
                  color="black"
                  fontSize="sm"
                  fontWeight="400"
                  onClick={logoutHandler}
                >
                  Logout
                </Text>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
