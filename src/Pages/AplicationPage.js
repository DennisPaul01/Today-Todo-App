import React from "react";

import NavBar from "../Components/Navbar/Navbar";
import HeaderImage from "../Components/HeaderImage/HeaderImage";
import SideQuotes from "../Components/Quotes/SideQuotes";
import ListTasks from "../Components/ListTasks/ListTasks";

import { Box, Container, Grid, GridItem } from "@chakra-ui/react";

const ApplicationPage = () => {
  return (
    <>
      <Container maxW="1596" mx="auto" pt="50px">
        <Box width="100%" bg="white" borderRadius="30px" overflow="hidden">
          <Grid
            h="90vh"
            templateRows="0.6fr 1.4fr "
            templateColumns="0.6fr 1.8fr 0.7fr; "
          >
            <GridItem rowSpan={3} colSpan={0}>
              <NavBar />
            </GridItem>
            <GridItem colSpan={2}>
              <HeaderImage />
            </GridItem>
            <GridItem colSpan={1}>
              <ListTasks />
            </GridItem>
            <GridItem colSpan={1}>
              <SideQuotes />
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ApplicationPage;
