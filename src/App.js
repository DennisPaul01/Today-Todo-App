/*
RULES YOU FIND IN THE COMPONENTS
Import Order:
- Third Party Libraries
- Custom Components
- Utils Imports
- Constant imports
- Image Imports
- Create file specific Constants
(Separate each import category by one empty line)

Rules for Components:
- Very first line — Destrucutre Props
- Destructure redux state
- Initialize State Variables 
- Create Refs 
- Initialize hooks ( useDispatch)
- Write all useEffects
- Create const/var/let specific to Component
- Call functions — If there
(Separate each section by one empty line) */

import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

import { Box } from "@chakra-ui/react";

import ApplicationPage from "./Pages/AplicationPage";
import LoginPage from "./Pages/LoginPage";

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
        {stateUser && (
          <Route path="/ap">
            <ApplicationPage></ApplicationPage>
          </Route>
        )}
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Box>
  );
}

export default App;
