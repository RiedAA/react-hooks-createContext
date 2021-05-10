import  React  from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { App } from "./App";

const theme = {primaryColor: "#1460b8",
TitleColor:"#f46363"};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
