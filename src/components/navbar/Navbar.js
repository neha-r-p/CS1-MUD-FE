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
import spiders_logo from "../../assets/spiders_logo.png"
//redux
import {connect} from "react-redux";
import {logout} from "../../store/auth/AuthActions";


const useStyles = makeStyles({
    root: {
        height: 64,
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
        marginTop: 10
    },
})

function Navbar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar variant="dense">
                    <img src={creatures} alt="Logo" onClick={() =>props.history.push('/')}/>
                    <div className={classes.title} onClick={() =>props.history.push('/')}>
                        <img src={spiders_logo} width={350}/>
                    </div>
                    {!props.isAuth && <Button component={Link} to={'/login'} color={"secondary"}>Login</Button>}
                    {!props.isAuth && <Button component={Link} to={'/register'} color={"secondary"}>Register</Button>}
                    {props.isAuth && <Button component={Link} to={'/adventure-game'} color={"secondary"}>Game</Button>}
                    {props.isAuth &&
                    <Button onClick={() => props.logout(props.history)} color={"secondary"}>Log out</Button>}
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