import React, { useEffect, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import useFetchData from "../hooks/use-fetchData";
import useFetchName from "../hooks/use-nameData";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";

import LazySpinner from "../Components/UI/LazySpinner";

const NavBar = React.lazy(() => import("../Components/Navbar/Navbar"));
const SideQuotes = React.lazy(() => import("../Components/Quotes/SideQuotes"));
const HeaderImage = React.lazy(() =>
  import("../Components/HeaderImage/HeaderImage")
);
const ListTasksPersonal = React.lazy(() =>
  import("../Components/ListTasks/ListTasksPersonal")
);
const ListTasksWork = React.lazy(() =>
  import("../Components/ListTasks/ListTasksWork")
);
const AccountDetails = React.lazy(() =>
  import("../Components/AccountDetails/AccountDetails")
);

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
        <Box
          width="100%"
          bg="white"
          borderRadius="30px"
          overflow="hidden"
          className="animationBorder"
        >
          <Suspense fallback={<LazySpinner></LazySpinner>}>
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
          </Suspense>
        </Box>
      </Container>
    </>
  );
};

export default ApplicationPage;
