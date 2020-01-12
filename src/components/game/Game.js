import React, {useEffect} from 'react'
import Map from '../map/Map'
import Direction from '../direction/Direction'
import RoomInventory from '../inventory/RoomInventory';
import PlayerInventory from '../inventory/PlayerInventory';
import RoomInfo from '../inventory/RoomInfo';
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'
import Stamina from "../stamina/Stamina";
import {GAME_HEIGHT, GAME_WIDTH} from "./utils";
//store
import {connect} from "react-redux";
import {initPlayer} from "../../store/player/playerActions"
import {getItems} from "../../store/inventory/inventoryActions";


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    container: {
        position: 'relative',
        paddingLeft: 43,
        paddingTop: 13,
        width: GAME_WIDTH,
        height: GAME_HEIGHT + 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
        border: '4px solid #543636'
    },
    containerRight: {
        display: 'flex',
        width: '300px',
        flexDirection: 'column',
        border: '4px solid #543636'
    }
})

function Game(props) {
    const classes = useStyles()
    props.initPlayer()

    useEffect(() => {
        props.getItems()
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Map/>
            </div>
            <div className={classes.containerRight}>
                <Stamina/>
                <Direction/>
                <RoomInventory/>
                <RoomInfo/>
                <PlayerInventory/>
            </div>
        </div>
    )
}


export default connect(null, {initPlayer, getItems})(Game)