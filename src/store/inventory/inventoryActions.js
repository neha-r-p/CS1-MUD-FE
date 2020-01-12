import {GET_ITEMS_START, GET_ITEMS_SUCCESS, GET_ROOMS_ITEMS, PLAYER_DROP, PLAYER_EAT, ROOM_TAKE} from './inventoryTypes'
import axiosWithAuth from "../../components/utils/axiosWithAuth";
import {GET_ROOMS_FAILURE} from "../map/mapTypes";
import {store} from "../../index";

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

export const getItems = () => dispatch => {
    dispatch({type: GET_ITEMS_START})
    axiosWithAuth()
        .get('/api/adv/items')
        .then(res => dispatch({
            type: GET_ITEMS_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({type: GET_ROOMS_FAILURE, payload: err}))
}

export const getRoomsItems = (room_id) => dispatch => {
    dispatch({type: GET_ROOMS_ITEMS, payload: {room_id: room_id}})
}
