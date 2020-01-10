import React from 'react'
import Map from '../map/Map'
import Direction from '../direction/Direction'
import RoomInventory from '../inventory/RoomInventory';
import PlayerInventory from '../inventory/PlayerInventory';
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'
import Stamina from "../stamina/Stamina";
import {GAME_HEIGHT, GAME_WIDTH} from "./utils";

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
        border: '1px solid black'
    }
})

function Game() {
    const classes = useStyles()

   return(
       <div className={classes.container}>
           <Map />
           <div className={classes.containerRight}>
               <Stamina/>
               <Direction />
               <RoomInventory />
               <PlayerInventory />
           </div>

       </div>
   )
}

export default Game