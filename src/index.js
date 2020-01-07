import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//Router config
import { BrowserRouter as Router } from "react-router-dom";
//Theme
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";

//store
import { createStore, applyMiddleware } from "redux";
import combineReducers from "./store/index";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(combineReducers, applyMiddleware(thunk));

//Theme config
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fe0014"
    },
    secondary: {
      main: "#fff7f7"
    }
  }
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
