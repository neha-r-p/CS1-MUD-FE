import {MOVE_PLAYER} from "./playerTypes";
import {ROOM_HEIGHT} from "../../components/map/utils";

const initialState = {
    position: [ROOM_HEIGHT - 3, ROOM_HEIGHT - 15]
}

const playerReducer = (state = initialState, {payload, type}) => {
    switch (type) {
        case MOVE_PLAYER:
            return {
                ...payload
            }
        default:
            return state
    }
}

export default playerReducer