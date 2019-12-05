import React from "react";
import "./styles.css";
import "typeface-roboto";
import Routes from "./routes";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: "#fff"
    }
  },
  typography: {
    fontFamily: ["Roboto"].join(",")
  }
});
const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);
export default App;
