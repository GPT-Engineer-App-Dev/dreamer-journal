import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Index from "./pages/Index.jsx";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={toggleColorMode}
      position="fixed"
      top="4"
      right="4"
      zIndex="docked"
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

function App() {
  return (
    <Router>
      <ColorModeToggle />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
