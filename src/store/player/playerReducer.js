import {MOVE_PLAYER, REDUCE_STAMINA} from "./playerTypes";
import {ROOM_HEIGHT} from "../../components/map/utils";

const initialState = {
    position: [ROOM_HEIGHT * 3, ROOM_HEIGHT - 15],
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
        default:
            return state
    }
}

export default playerReducer