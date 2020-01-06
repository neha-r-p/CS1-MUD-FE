import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
//Router config
import {BrowserRouter as Router} from 'react-router-dom'
//Theme
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, responsiveFontSizes, ThemeProvider} from '@material-ui/core/styles';


//Theme config
let theme = createMuiTheme({
    palette: {
        primary: {
            main: "#fe0014",
        },
        secondary: {
            main: "#fff7f7",
        }
    }
});

theme = responsiveFontSizes(theme);


ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </Router>,
    document.getElementById('root'))

serviceWorker.unregister()
