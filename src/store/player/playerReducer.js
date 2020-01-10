import {
  MOVE_PLAYER,
  REDUCE_STAMINA,
  INCREASE_STAMINA,
  GET_CURRENT_ROOM,
  INIT_PLAYER_START,
  INIT_PLAYER_SUCCESS,
  INIT_PLAYER_FAILURE
} from './playerTypes'
import { PLAYER_X, PLAYER_Y, ROOM_HEIGHT } from '../../components/map/utils'

const initialState = {
  position: [PLAYER_X, PLAYER_Y],
  stamina: 100,
  title: "",
  description: ""
}

const playerReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case MOVE_PLAYER:
      return {
        ...state,
        position: payload.position
      }
    case REDUCE_STAMINA:
      return {
        ...state,
        stamina: payload.stamina
      }
    case INCREASE_STAMINA:
      return {
        ...state,
        stamina: payload.stamina
      }
    case GET_CURRENT_ROOM:
        return {
            ...state,
            title: payload.title,
            description: payload.description
        }
    case INIT_PLAYER_START:
        return {
            ...state
        }
    case INIT_PLAYER_SUCCESS:
        return {
            ...state,
            title: payload.title,
            description: payload.description
        }
    case INIT_PLAYER_FAILURE:
        return {
            ...state,
            error: payload
        }
    default:
      return state
  }
}

export default playerReducer
