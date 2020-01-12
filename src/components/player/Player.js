import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import character from './char.png'
import {ROOM_HEIGHT, ROOM_WIDTH} from "../map/utils";
import {connect} from "react-redux";
import handleMovement, {handleKeyDown} from "./movement";
import {move} from "../../store/player/playerActions";

const useStyles = makeStyles({
    player: props => ({
        position: 'absolute',
        left: props.position[0],
        top: props.position[1],
        backgroundImage: `url('${character}')`,
        backgroundPosition: '0 0',
        backgroundRepeat: 'no-repeat',
        width: ROOM_WIDTH,
        height: ROOM_HEIGHT,
    })
})

function Player(props) {
    const classes = useStyles(props)

    function handleKey(e) {
        handleKeyDown(e, undefined, props.move)
    }

    React.useEffect(() => {
        window.addEventListener('keydown', handleKey)

        return () => {
            window.removeEventListener('keydown', handleKey)
        }
    }, []);


    return (
        <>
            {console.log("PLAYER ", props.position)}
            <div className={classes.player}/>
        </>
    )
}

const mapStateToProps = state => {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps, {move})(Player)