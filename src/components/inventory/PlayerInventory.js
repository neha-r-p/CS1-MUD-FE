import React, { useState } from 'react'
import Item from './Item'
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'
//store
import { connect } from 'react-redux'

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

  const numOfItems = playerItems.length - 1
  const emptyItems = new Array(14 - numOfItems).fill(null)

  const completePlayerItems = playerItems.concat(emptyItems)

  return (
    <div className={classes.root}>
      <h3>INVENTORY</h3>
      <div className={classes.itemBoxes}>
        {completePlayerItems.map(item =>
          item ? (
            <Item key={item.item_id} item={item} />
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

// const dummyItems = [
//   {
//     item_id: 1,
//     item_name: 'apple',
//     item_description: 'red delicious',
//     has_player: 1,
//     in_room: 0
//   },
//   {
//     item_id: 2,
//     item_name: 'apple',
//     item_description: 'granny smith',
//     has_player: 1,
//     in_room: 0
//   },
//   {
//     item_id: 3,
//     item_name: 'orange',
//     item_description: 'navel',
//     has_player: 1,
//     in_room: 0
//   }
// ]
