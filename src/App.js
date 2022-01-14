import { Box } from "@chakra-ui/react";

import ApplicationPage from "./Pages/AplicationPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Box width="100%" height="100vh" bg="blue">
      {/* <ApplicationPage></ApplicationPage> */}
      <LoginPage></LoginPage>
    </Box>
  );
}

export default App;
