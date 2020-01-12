import {
    //   MOVE_PLAYER,
    //   REDUCE_STAMINA,
    //   INCREASE_STAMINA,
    GET_CURRENT_ROOM,
    INIT_PLAYER_START,
    INIT_PLAYER_SUCCESS,
    INIT_PLAYER_FAILURE, PLAYER_MOVE_START, PLAYER_MOVE_SUCCESS, PLAYER_MOVE_FAILURE
} from './playerTypes'
import axiosWithAuth from '../../components/utils/axiosWithAuth'
import {PLAYER_X, PLAYER_Y} from "../../components/map/utils";
import {GET_ROOMS_ITEMS} from "../inventory/inventoryTypes";
import {getItems} from "../inventory/inventoryActions";

export const initPlayer = () => dispatch => {
    dispatch({type: INIT_PLAYER_START})
    axiosWithAuth()
        .get('/api/adv/init/')
        .then(res => {
            dispatch({type: INIT_PLAYER_SUCCESS, payload: res.data})
        })
        .catch(error => dispatch({type: INIT_PLAYER_FAILURE, payload: error}))
}

export const currentRoom = player => dispatch => {
    dispatch({
        type: GET_CURRENT_ROOM,
        payload: player
    })
}

export const move = (data) => (dispatch, getState)=> {
    dispatch({type: PLAYER_MOVE_START})

    axiosWithAuth()
        .post('/api/adv/move/', {"direction": data.direction, x: data.x, y: data.y})
        .then(res => {
            const room_id = getState().map.rooms.filter(item => res.data.title === item.fields.title)
            console.log("SUCCESS ", room_id[0].pk)
            dispatch({
                type: PLAYER_MOVE_SUCCESS,
                payload: {
                    title: res.data.title,
                    description: res.data.description,
                    players: res.data.players,
                    stamina: res.data.stamina,
                    position: res.data.error_msg !== "You cannot move that way." ? [res.data.x, res.data.y] : [data.position[0], data.position[1]],
                    room_id: room_id[0].pk
                }
            })
            dispatch({type: GET_ROOMS_ITEMS, payload: {room_id: room_id[0].pk}})
        })
        .catch(err => dispatch({type: PLAYER_MOVE_FAILURE, err}))
}
