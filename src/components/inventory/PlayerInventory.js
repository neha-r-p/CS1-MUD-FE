import React, {useState, useEffect} from 'react'
import Item from './Item'
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'
//store
import {connect} from 'react-redux'
import {getItems} from "../../store/inventory/inventoryActions";

const useStyles = makeStyles({
    root: {
        color: '#FFF',
        backgroundColor: '#FF800A',
        minWidth: '200px',
        height: '250px'
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

const PlayerInventory = props => {
    const classes = useStyles()

    const [playerItems, setPlayerItems] = useState(props.playerItems)

    useEffect(() => {
        const playerItems = props.playerItems
        const numOfItems = playerItems.length - 1
        const emptyItems = new Array(14 - numOfItems).fill(null)
        setPlayerItems(playerItems.concat(emptyItems))
    }, [props.playerItems])

    return (
        <div className={classes.root}>
            <h3>INVENTORY</h3>
            <div className={classes.itemBoxes}>
                {playerItems.length > 0 && playerItems.map(item =>
                    item ? (
                        <Item key={item.pk} item={item.fields} item_id={item.pk} inRoom={false}/>
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
        playerItems: state.inventory.playerItems
    }
}

export default connect(mapStateToProps)(PlayerInventory)
