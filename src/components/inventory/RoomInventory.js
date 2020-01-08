import React, { useState } from 'react'
import Item from './Item'
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
    root: {
        color: '#FFF',
        backgroundColor: '#B89090',
        width: '30%',
        minWidth: '200px',
    }
})

const RoomInventory = () => {
    const classes = useStyles()

    const [ roomItems, setRoomItems ] = useState([])
    return (
        <div className={classes.root}>
            <h3>Room Inventory</h3>
        </div>
    )
}

export default RoomInventory
