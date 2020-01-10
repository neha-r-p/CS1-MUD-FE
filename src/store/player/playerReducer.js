import {
    MOVE_PLAYER,
    REDUCE_STAMINA,
    INCREASE_STAMINA,
    GET_CURRENT_ROOM,
    INIT_PLAYER_START,
    INIT_PLAYER_SUCCESS,
    INIT_PLAYER_FAILURE, PLAYER_MOVE_START, PLAYER_MOVE_SUCCESS, PLAYER_MOVE_FAILURE
} from './playerTypes'
import {PLAYER_X, PLAYER_Y, ROOM_HEIGHT} from '../../components/map/utils'

const initialState = {
    position: [PLAYER_X, PLAYER_Y],
    stamina: 100,
    title: "",
    description: "",
    isLoading: false,
    error: ""
}

const playerReducer = (state = initialState, {payload, type}) => {
    switch (type) {
        case MOVE_PLAYER:
            return {
                ...state,
                position: payload.position
            }
        case PLAYER_MOVE_START:
            return {
                ...state,
                isLoading: true,
            }
        case PLAYER_MOVE_SUCCESS:
            console.log("MOVE_PLAYER SUCCESS *******", payload)
            return {
                ...state,
                isLoading: false,
                position: payload.position,
                title: payload.title,
                description: payload.description,
                players: payload.players,
                // stamina: payload.stamina
            }
        case PLAYER_MOVE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
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
  