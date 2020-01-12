import {
    GET_ITEMS_START,
    GET_ITEMS_SUCCESS, PLAYER_DROP_FAILURE,
    PLAYER_DROP_START,
    PLAYER_DROP_SUCCESS,
    PLAYER_EAT_FAILURE,
    PLAYER_EAT_START,
    PLAYER_EAT_SUCCESS,
    ROOM_TAKE_FAILURE,
    ROOM_TAKE_START,
    ROOM_TAKE_SUCCESS
} from './inventoryTypes'

import axiosWithAuth from "../../components/utils/axiosWithAuth";

import {GET_ROOMS_FAILURE} from "../map/mapTypes";

export const playerDrop = data => (dispatch) => {
    dispatch({type: PLAYER_DROP_START})
    axiosWithAuth()
        .post("/api/adv/drop", {"item_id": data.item, "room_id": data.room_id})
        .then(res => dispatch({type: PLAYER_DROP_SUCCESS, payload: {"item_id": data.item, "room_id": data.room_id}}))
        .catch(err => dispatch({type: PLAYER_DROP_FAILURE, payload: err}))


}

export const roomTake = item => dispatch => {
    dispatch({type: ROOM_TAKE_START})
    axiosWithAuth()
        .post("/api/adv/pick-up", {"item_id": item})
        .then(res => dispatch({type: ROOM_TAKE_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: ROOM_TAKE_FAILURE, payload: err}))
}

export const playerEat = data => dispatch => {
    dispatch({type: PLAYER_EAT_START})
    axiosWithAuth()
        .post("/api/adv/eat", {"item_id": data.item, "room_id": data.room_id})
        .then(res => dispatch({type: PLAYER_EAT_SUCCESS, payload:  {"item_id": data.item}}))
        .catch(err => dispatch({type: PLAYER_EAT_FAILURE, payload: err}))
}

export const getItems = () => (dispatch, getState) => {
    dispatch({type: GET_ITEMS_START})
    axiosWithAuth()
        .get('/api/adv/items')
        .then(res => {
            dispatch({
                type: GET_ITEMS_SUCCESS,
                payload: {
                    items: res.data,
                    room_id: getState().player.room_id,
                    player_id: getState().player.player_id
                }
            })
        })
        .catch(err => dispatch({type: GET_ROOMS_FAILURE, payload: err}))
}

