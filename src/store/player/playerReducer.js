import {MOVE_PLAYER, REDUCE_STAMINA, INCREASE_STAMINA} from "./playerTypes";
import {PLAYER_X, PLAYER_Y, ROOM_HEIGHT} from "../../components/map/utils";


const initialState = {
    position: [PLAYER_X, PLAYER_Y],
    stamina: 100
}

const playerReducer = (state = initialState, {payload, type}) => {
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
        default:
            return state
    }
}

export default playerReducer