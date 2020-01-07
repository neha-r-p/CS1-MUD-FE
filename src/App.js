import React from 'react'
import './App.css'
//Router config
import {
    Switch,
    Route
} from 'react-router-dom'
//Components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AuthRoute from "./components/utils/privateRoute";
import Game from "./components/game/Game";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Switch>
                {/* {public routes} */}
                <Route exact path={"/"} component={Home}/>
                <Route path={"/login"} component={Login}/>
                <Route path={"/register"} component={Register}/>
                <AuthRoute path={"/adventure-game"} component={Game}/>
                {/* {private routes} */}
            </Switch>
        </div>
    );
}

export default App;
