import React from "react";
import { Box } from "@chakra-ui/react";
import { Route, Switch, Redirect } from "react-router-dom";
import ApplicationPage from "./Pages/AplicationPage";
import LoginPage from "./Pages/LoginPage";

import { useSelector } from "react-redux";

function App() {
  const stateUser = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Box width="100%" bg="blue" minHeight="100vh">
      <Switch>
        {!stateUser && (
          <Route path="/" exact>
            <LoginPage></LoginPage>
          </Route>
        )}
        {/* {stateUser && ( */}
        <Route path="/ap">
          <ApplicationPage></ApplicationPage>
        </Route>
        {/* )} */}
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Box>
  );
}

export default App;
