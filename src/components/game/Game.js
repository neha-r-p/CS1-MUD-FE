import React from 'react'
import Map from '../map/Map'
import Direction from '../direction/Direction'
import RoomInventory from '../inventory/RoomInventory';
import PlayerInventory from '../inventory/PlayerInventory';
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
    container: {
        position: 'relative',
        width: '1100px',
        height: '630px',
        margin: '20px auto',
        display: 'flex',
    },
    containerRight: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '300px',
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
               <Direction />
               <RoomInventory />
               <PlayerInventory />
           </div>

       </div>
   )
}

export default Game