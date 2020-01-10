import {MOVE_PLAYER, REDUCE_STAMINA, INCREASE_STAMINA} from "./playerTypes";
import {PLAYER_X, PLAYER_Y, ROOM_HEIGHT} from "../../components/map/utils";
import {PLAYER_MOVE_FAILURE, PLAYER_MOVE_START, PLAYER_MOVE_SUCCESS} from "./playerTypes";

const initialState = {
    position: [PLAYER_X, PLAYER_Y],
    isLoading: false,
    stamina: 100
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
            return {
                ...state,
                isLoading: false,
            }
        case PLAYER_MOVE_FAILURE:
            return {
                ...state,
                isLoading: false,
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