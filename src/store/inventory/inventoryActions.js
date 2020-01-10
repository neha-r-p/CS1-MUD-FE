import { PLAYER_DROP, PLAYER_EAT, ROOM_TAKE } from './inventoryTypes'

export const playerDrop = item => dispatch => {
    console.log("drop")
    dispatch({ 
        type: PLAYER_DROP, 
        payload: item 
    })
  }

export const playerEat = item => dispatch => {
    console.log("eat")
  dispatch({
    type: PLAYER_EAT,
    payload: item
  })
}

export const roomTake = item => dispatch => {
    console.log("take")
  dispatch({
    type: ROOM_TAKE,
    payload: item
  })
}
