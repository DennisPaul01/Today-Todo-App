import React from "react";
import { Box } from "@chakra-ui/react";
import { Route, Switch, Redirect } from "react-router-dom";
import ApplicationPage from "./Pages/AplicationPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Box width="100%" height="100vh" bg="blue">
      <Switch>
        <Route path="/" exact>
          <LoginPage></LoginPage>
        </Route>
        <Route path="/ap">
          <ApplicationPage></ApplicationPage>
        </Route>
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Box>
  );
}

export default App;
