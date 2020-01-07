import React from 'react'
import {Link, withRouter} from "react-router-dom";
//Components
// import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//Styles
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
//logo
import creatures from "../../assets/creatures3_.png"

const useStyles = makeStyles({
    root: {
        height: 64,
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        textAlign: 'left'
    },
})

function Navbar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar variant="dense">
                    <img src={creatures} alt="Logo" />
                    <Typography variant={"h5"}
                                className={classes.title}
                                onClick={() => props.history.push("/")}>
                        The Adventuriest Adventure Game
                    </Typography>
                    <Button component={Link} to={'/login'} color={"secondary"}>Login</Button>
                    <Button component={Link} to={'/register'} color={"secondary"}>Register</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withRouter(Navbar)