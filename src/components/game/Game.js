import React, { useEffect } from 'react'
import Map from '../map/Map'
import Direction from '../direction/Direction'
import RoomInventory from '../inventory/RoomInventory';
import PlayerInventory from '../inventory/PlayerInventory';
import RoomInfo from '../roomInfo/RoomInfo';
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'
import Stamina from "../stamina/Stamina";
import {GAME_HEIGHT, GAME_WIDTH} from "./utils";
//store
import {connect} from "react-redux";
import {initPlayer} from "../../store/player/playerActions"

const useStyles = makeStyles({
    container: {
        position: 'relative',
        width: GAME_WIDTH + 200,
        height: GAME_HEIGHT,
        margin: '20px auto',
        display: 'flex',
        justifyContent: 'center'
    },
    containerRight: {
        display: 'flex',
        width: '400px',
        flexDirection: 'column',
        // justifyContent: 'space-between',
        border: '4px solid #543636'
    }
})

function Game(props) {
    const classes = useStyles()

    useEffect(() => {
        props.initPlayer()
    }, [])


   return(
       <div className={classes.container}>
           <Map />
           <div className={classes.containerRight}>
               <Stamina/>
               <Direction />
               <RoomInventory />
               <RoomInfo />
               <PlayerInventory />
           </div>

       </div>
   )
}


export default connect(null, {initPlayer})(Game)