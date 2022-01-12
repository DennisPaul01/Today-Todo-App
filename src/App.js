import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello! This one it will be a Today App</p>
        <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box>
      </header>
    </div>
  );
}

export default App;
