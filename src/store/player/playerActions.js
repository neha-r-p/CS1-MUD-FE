import {
  //   MOVE_PLAYER,
  //   REDUCE_STAMINA,
  //   INCREASE_STAMINA,
  GET_CURRENT_ROOM,
  INIT_PLAYER_START,
  INIT_PLAYER_SUCCESS,
  INIT_PLAYER_FAILURE
} from './playerTypes'
import axiosWithAuth from '../../components/utils/axiosWithAuth'

export const initPlayer = () => dispatch => {
  dispatch({ type: INIT_PLAYER_START })
  axiosWithAuth()
    .get('/api/adv/init/')
    .then(res => {
      console.log('player res data', res.data)
      dispatch({ type: INIT_PLAYER_SUCCESS, payload: res.data })
    })
    .catch(error => dispatch({ type: INIT_PLAYER_FAILURE, payload: error }))
}

export const currentRoom = player => dispatch => {
    console.log("current room", player)
    dispatch({
        type: GET_CURRENT_ROOM,
        payload: player
    })
}