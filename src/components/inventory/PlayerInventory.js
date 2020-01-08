import React, { useState } from 'react'
import Item from './Item'
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    color: '#FFF',
    backgroundColor: '#543636',
    width: '30%',
    minWidth: '200px'
  }
})

const PlayerInventory = () => {
  const classes = useStyles()

  const [playerItems, setPlayerItems] = useState(dummyItems)
  console.log('items', playerItems)

  return (
    <div className={classes.root}>
      <h3>Player Inventory:</h3>
      {playerItems.map(item => (
        <Item key={item.item_id} item={item} />
      ))}
    </div>
  )
}

export default PlayerInventory

const dummyItems = [
  {
    item_id: 1,
    item_name: 'apple',
    item_description: 'red delicious',
    has_player: 1,
    in_room: 0
  },
  {
    item_id: 2,
    item_name: 'apple',
    item_description: 'granny smith',
    has_player: 1,
    in_room: 0
  }
]
