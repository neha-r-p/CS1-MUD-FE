import React from 'react'
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import makeStyle from '@material-ui/core/styles/makeStyles'
import {connect} from "react-redux";

const useStyle = makeStyle({
    root: {
        paddingBottom: "10px",
        padding: 10,
        background: 'white'
    },
    lightGray: {
        height: "10px",
        width: "100%",
        borderRadius: 4,
        backgroundColor: "#e4e4e4"
    },
    progress: props => ({
        height: "10px",
        width: `${props.stamina}%`,
        borderRadius: 4,
    }),
    health: {
        background: "#00e422",
    },
    weak: {
        background: "#c9e465",
    },
    skinny: {
        background: "#e4ab4b",
    },
    dead: {
        background: "#e43613",
    },

});

function Stamina(props) {
    const classes = useStyle(props);
    const max = 100
    const min = 0

    function pickColor(s) {
        if(max >= s && s >= 80){
            return classes.health
        }
        if (80 >= s && s >= 50){
            return classes.weak
        }
        if (50 >= s && s >= 25){
            return classes.skinny
        }
        if(25 >= s && s >= 0){
            return classes.dead
        }
    }

    return (
        <div className={classes.root}>
            <Typography>
                <Box textAlign="left">Stamina points</Box>
            </Typography>
            {console.log("`${props.stamina}%`", `${props.stamina}%`)}
            <div className={classes.lightGray}>
                <div className={`${classes.progress} ${pickColor(props.stamina)}`}></div>
            </div>
        </div>
    )
}

const mapStatesToProps = state => {
    return {
        stamina: state.player.stamina,
    }
}

export default connect(mapStatesToProps)(Stamina)