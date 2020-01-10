import React, { useEffect } from 'react'
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'
import apple from '../../assets/apple.png'
import orange from '../../assets/orange.png'
import banana from '../../assets/banana.png'
//store
import { connect } from 'react-redux'
import {
  playerEat,
  playerDrop,
  roomTake
} from '../../store/inventory/inventoryActions'
import {store} from '../../index'
import {INCREASE_STAMINA} from "../../store/player/playerTypes"

const useStyles = makeStyles({
  itemBox: {
    display: 'flex',
    width: '46px',
    height: '46px',
    backgroundColor: '#ffe1b2',
    margin: '3px',
    border: '1px solid #92734F'
  }
})

function Item({ item, inRoom, roomTake, playerEat, playerDrop }) {
  const classes = useStyles()
  const { item_name, item_id } = item

  function chooseImg() {
    switch (item_name) {
      case 'apple':
        return apple
      case 'banana':
        return banana
      case 'orange':
        return orange
    }
  }

  const handleClick = (e, item) => {
    if (inRoom && e.nativeEvent.which === 1) {
      roomTake(item)
    } else if (!inRoom && e.nativeEvent.which === 1) {
      playerEat(item)
      const stamina = store.getState().player.stamina
      console.log("stamina from items", stamina)
      store.dispatch({type: INCREASE_STAMINA, payload: {stamina: stamina <= 95 ? stamina + 5 : 100}})
    } else if (!inRoom && e.type === 'contextmenu') {
      e.preventDefault()
      playerDrop(item)
    }
  }

  return (
    <div className={classes.itemBox}>
      <img
        src={chooseImg()}
        alt={item_name}
        style={{ width: '90%', height: '90%', margin: '1px auto' }}
        onClick={e => handleClick(e, item_id)}
        onContextMenu={e => handleClick(e, item_id)}
      />
    </div>
  )
}

export default connect(null, { playerEat, playerDrop, roomTake })(Item)
