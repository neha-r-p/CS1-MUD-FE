import React from 'react'
import {Link, withRouter} from "react-router-dom";
//Components
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//Styles
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import authReducer from "../../store/auth/AuthReducers";
import {logout} from "../../store/auth/AuthActions";

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
                    <Avatar alt="Logo" src={'/logo512.png'}/>
                    <Typography variant={"h5"}
                                className={classes.title}
                                onClick={() => props.history.push("/")}>
                        Logo
                    </Typography>
                    {console.log("AUTH ", props.isAuth)}
                    {!props.isAuth && <Button component={Link} to={'/login'} color={"secondary"}>Login</Button>}
                    {!props.isAuth && <Button component={Link} to={'/register'} color={"secondary"}>Register</Button>}
                    {props.isAuth && <Button component={Link} to={'/adventure-game'} color={"secondary"}>Game</Button>}
                    {props.isAuth && <Button  onClick={() => props.logout(props.history)} color={"secondary"}>Log out</Button>}
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export default connect(mapStateToProps, {logout})(withRouter(Navbar))