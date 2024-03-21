import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


import { BrowserRouter } from "react-router-dom";
import { ChakraProvider,extendTheme } from "@chakra-ui/react";


 const customTheme= extendTheme({
  styles:{
    global:{
      body:{
        bg:'white'
      }
    }
  }
 })

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ChakraProvider theme={customTheme}>
      <App />
      </ChakraProvider>
   
);
