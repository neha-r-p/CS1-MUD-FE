import React, {useState, useEffect} from 'react'
import Item from './Item'
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'
//store
import {connect} from 'react-redux'


const useStyles = makeStyles({
    root: {
        color: '#FFF',
        backgroundColor: '#F7B801',
        minWidth: '200px',
        height: '175px'
    },
    itemBoxes: {
        display: 'flex',
        margin: '10px',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    itemBox: {
        display: 'flex',
        width: '46px',
        height: '46px',
        backgroundColor: '#ffe1b2',
        margin: '3px',
        border: '1px solid #92734F'
    }
})

const RoomInventory = props => {
    const classes = useStyles()

    const [roomItems, setRoomItems] = useState(props.roomItems)

    useEffect(() => {
        const roomItems = props.roomItems
        const numOfItems = roomItems.length - 1
        const emptyItems = new Array(9 - numOfItems).fill(null)
        setRoomItems(roomItems.concat(emptyItems))
    }, [props.roomItems])

    return (
        <div className={classes.root}>
            <h3>CURRENT ROOM</h3>
            <div className={classes.itemBoxes}>
                {roomItems.length > 0 && roomItems.map(item =>
                    item ? (
                        <Item key={item.pk} item={item.fields} item_id={item.pk} inRoom={true}/>
                    ) : (
                        <div className={classes.itemBox}></div>
                    )
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        roomItems: state.inventory.roomItems,
        room_id: state.player.room_id,
    }
}

export default connect(mapStateToProps)(RoomInventory)
