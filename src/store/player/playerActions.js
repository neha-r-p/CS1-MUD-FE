import {PLAYER_MOVE_FAILURE, PLAYER_MOVE_START, PLAYER_MOVE_SUCCESS} from "./playerTypes";
import axiosWithAuth from "../../components/utils/axiosWithAuth";


export const move = (direction) => dispatch => {
    dispatch({type: PLAYER_MOVE_START})
    axiosWithAuth()
        .post('/api/adv/move/', direction)
        .then(res => dispatch({type: PLAYER_MOVE_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: PLAYER_MOVE_FAILURE, err}))
}