import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../Components/Navbar/Navbar";
import HeaderImage from "../Components/HeaderImage/HeaderImage";
import SideQuotes from "../Components/Quotes/SideQuotes";
import ListTasks from "../Components/ListTasks/ListTasks";

import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import AccountDetails from "../Components/AccountDetails/AccountDetails";

const ApplicationPage = () => {
  return (
    <>
      <Container maxW="1596" mx="auto" pt="50px">
        <Box width="100%" bg="white" borderRadius="30px" overflow="hidden">
          <Grid
            templateRows={["1fr", "1fr", "1fr", "200px 1.4fr "]}
            templateColumns={[
              "100%",
              "200px 1.8fr 0.0fr ",
              "200px 1.8fr 0.0fr ",
              "300px 1.8fr 0.7fr ",
            ]}
          >
            <GridItem rowSpan={3} colSpan={0}>
              <NavBar />
            </GridItem>
            <GridItem colSpan={2}>
              <HeaderImage />
            </GridItem>
            <GridItem colSpan={1}>
              <Switch>
                <Route path="/ap/1">
                  <ListTasks />
                </Route>
                <Route path="/ap/account">
                  <AccountDetails></AccountDetails>
                </Route>
                <Route path="/ap/">
                  <Redirect to="/ap/1"></Redirect>
                </Route>
              </Switch>
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
