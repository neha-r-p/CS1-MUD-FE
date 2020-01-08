import React from 'react'
import Map from '../map/Map'
import Direction from '../direction/Direction'
import RoomInventory from '../inventory/RoomInventory';
import PlayerInventory from '../inventory/PlayerInventory';
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '1000px',
        height: '600px',
    },
    containerRight: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',
        border: '1px solid black'
    }
})

function Game() {
    const classes = useStyles()

   return(
       <div className={classes.container}>
           GAME PAGE
           <Map />
           <div className={classes.containerRight}>
               <Direction />
               <RoomInventory />
               <PlayerInventory />
           </div>

       </div>
   )
}

export default Game