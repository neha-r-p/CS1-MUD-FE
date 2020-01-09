import React from 'react'
import Fab from "@material-ui/core/Fab";
import {Navigation} from "@material-ui/icons";
import makeStyle from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import handleMovement, {handleKeyDown} from "../player/movement";
import Player from "../player/Player";

const useStyle = makeStyle({
    root: {
        // height: 140
        background: 'white'
    },
    key: {
        margin: '3px',
        width: 40,
        height: 'auto'
    },
    keys: {
        padding: 10
    },
    title:{
        borderBottom: '1px solid black',
        borderTop: '1px solid black',
        paddingLeft: 10
    }
})

function Direction() {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            {/*<Typography variant={"subtitle1"} className={classes.title}><Box textAlign={"left"}>Choose a direction:</Box></Typography>*/}
            <div className={classes.keys}>
                <Key direction={0}/>
                <div>
                    <Key direction={260}/>
                    <Key direction={180}/>
                    <Key direction={90} name={"right"}/>
                </div>
            </div>
        </div>
    )
}

function Key(props) {
    const classes = useStyle()

    const simulateKey = (e) => {
        switch (props.direction) {
            case 0:
                return handleKeyDown(e, 38)
            case 90:
                return handleKeyDown(e, 39)
            case 180:
                return handleKeyDown(e, 40)
            case 260:
                return handleKeyDown(e, 37)
        }
    }

    return (
        <Fab color="primary" aria-label={`${props.direction}`} className={`${classes.key}`}
             onClick={(e) => simulateKey(e)}>
            <Navigation style={{transform: `rotate(${props.direction}deg)`}}/>
        </Fab>
    )
}


export default Direction