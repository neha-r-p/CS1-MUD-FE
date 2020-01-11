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

export const initPlayer = () => dispatch => {
    dispatch({type: INIT_PLAYER_START})
    axiosWithAuth()
        .get('/api/adv/init/')
        .then(res => {
            console.log('player res data', res.data)
            dispatch({type: INIT_PLAYER_SUCCESS, payload: res.data})
        })
        .catch(error => dispatch({type: INIT_PLAYER_FAILURE, payload: error}))
}

export const currentRoom = player => dispatch => {
    console.log("current room", player)
    dispatch({
        type: GET_CURRENT_ROOM,
        payload: player
    })
}

export const move = (data) => dispatch => {
    dispatch({type: PLAYER_MOVE_START})
    axiosWithAuth()
        .post('/api/adv/move/', {"direction": data.direction, x: data.x, y: data.y})
        .then(res => {
            console.log("**********", res)
            dispatch({
                type: PLAYER_MOVE_SUCCESS,
                payload: {
                    title: res.data.title,
                    description: res.data.description,
                    players: res.data.players,
                    stamina: res.data.stamina,
                    position: data.position
                }
            })
        })
        .catch(err => dispatch({type: PLAYER_MOVE_FAILURE, err}))
}
