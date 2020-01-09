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
        border: '4px solid white',
        height: 195
    },
    key: {
        margin: '3px',
    },
    keys: {
        padding: 10
    },
    display: {
        background: 'white',
        borderTop: '4px solid #e1c9c9',
        height: 30,
        marginTop: 15,
    },
    disable: {
        pointerEvents: "none",
    }
})

function Direction() {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            {/*<Typography variant={"subtitle1"}><Box textAlign={"left"}>Choose a direction:</Box></Typography>*/}
            <div className={classes.keys}>
                <Key direction={0}/>
                <div>
                    <Key direction={260}/>
                    <Key direction={180}/>
                    <Key direction={90} name={"right"}/>
                </div>
            </div>
            <div className={classes.display}>
                You go west
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