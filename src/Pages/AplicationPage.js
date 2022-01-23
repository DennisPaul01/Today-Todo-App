import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../Components/Navbar/Navbar";
import HeaderImage from "../Components/HeaderImage/HeaderImage";
import SideQuotes from "../Components/Quotes/SideQuotes";
import ListTasksPersonal from "../Components/ListTasks/ListTasksPersonal";
import ListTasksWork from "../Components/ListTasks/ListTasksWork";
import useFetchData from "../hooks/use-fetchData";
import useFetchName from "../hooks/use-nameData";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import AccountDetails from "../Components/AccountDetails/AccountDetails";

const ApplicationPage = () => {
  const fetchData = useFetchData();
  const fetchName = useFetchName();

  useEffect(() => {
    fetchData();
    fetchName();
  }, []);

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
                <Route path="/ap/personal">
                  <ListTasksPersonal />
                </Route>
                <Route path="/ap/work">
                  <ListTasksWork />
                </Route>
                <Route path="/ap/account">
                  <AccountDetails></AccountDetails>
                </Route>
                <Route path="/ap/">
                  <Redirect to="/ap/personal"></Redirect>
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
