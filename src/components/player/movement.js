import React from 'react'
import {MOVE_PLAYER, REDUCE_STAMINA} from "../../store/player/playerTypes";
import {PLAYER_X, PLAYER_Y, ROOM_HEIGHT, ROOM_WIDTH, TAIL_SIZE} from "../map/utils";
import {store} from '../../index'
import {GAME_HEIGHT, GAME_WIDTH} from "../game/utils";

function getNewPosition(direction) {
    const oldPos = store.getState().player.position
    switch (direction) {
        case 'w':
            return [oldPos[0] - TAIL_SIZE * 5, oldPos[1]]
        case 'e':
            return [oldPos[0] + TAIL_SIZE * 5, oldPos[1]]
        case 'n':
            return [oldPos[0], oldPos[1] - TAIL_SIZE * 5]
        case 's':
            return [oldPos[0], oldPos[1] + TAIL_SIZE * 5]
    }
}

function observeBoundaries(oldPos, newPos) {
    return (newPos[0] >= PLAYER_X  && newPos[0] < (GAME_WIDTH - 100)  - PLAYER_X) &&
    (newPos[1] >= 0 && newPos[1] < GAME_HEIGHT - ROOM_HEIGHT) ? newPos : oldPos
}

function dispatchMove(direction) {
    const oldPos = store.getState().player.position
    const stamina = store.getState().player.stamina
    if (stamina > 0) {
        store.dispatch({type: REDUCE_STAMINA, payload: {stamina: stamina - 1}})
        store.dispatch({type: MOVE_PLAYER, payload: {position: observeBoundaries(oldPos, getNewPosition(direction))}})
    } else {
        store.dispatch({type: MOVE_PLAYER, payload: {position: [PLAYER_X, PLAYER_Y]}})
        store.dispatch({type: REDUCE_STAMINA, payload: {stamina: 100}})
    }

}

export function handleKeyDown(e, d) {
    e.preventDefault()
    switch (e.keyCode ? e.keyCode : d) {
        //left key, west
        case 37:
            return dispatchMove('w')
        //up key, north
        case 38:
            return dispatchMove('n')
        //right key, east
        case 39:
            return dispatchMove('e')
        //down key, south
        case 40:
            return dispatchMove('s')
        default:
            console.log(e.keyCode)
    }
}

