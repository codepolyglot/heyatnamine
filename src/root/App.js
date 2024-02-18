import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Dashboard from "./Dashboard";

// Define your custom theme
const theme = extendTheme({
  // Add your theme configurations here
  // For example, you can change the colors
  colors: {
    primary: "#FF0000",
    secondary: "#00FF00",
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Dashboard />
    </ChakraProvider>
  );
};

export default App;
