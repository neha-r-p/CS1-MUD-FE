import React from 'react'
import {PLAYER_X, PLAYER_Y, ROOM_HEIGHT, ROOM_WIDTH, TAIL_SIZE} from "../map/utils";
import {store} from '../../index'
import {GAME_HEIGHT, GAME_WIDTH, LAST_ROOM} from "../game/utils";
//animation
import confetti from "canvas-confetti";


function getNewPosition(direction) {
    const oldPos = store.getState().player.position
    switch (direction) {
        case 'w_to':
            return [oldPos[0] - ROOM_WIDTH * 2, oldPos[1]]
        case 'e_to':
            return [oldPos[0] + ROOM_WIDTH * 2, oldPos[1]]
        case 'n_to':
            return [oldPos[0], oldPos[1] - ROOM_WIDTH * 2]
        case 's_to':
            return [oldPos[0], oldPos[1] + ROOM_WIDTH * 2]
    }
}

function generateMap() {
    const rooms = store.getState().map.rooms
    let map = []
    if (rooms.length > 0) {
        let row = []
        let y = 9
        for (let i = 0; i < rooms.length; i++) {
            const item = []
            const room = rooms[i]
            const fields = room.fields
            if (fields) {
                console.log("!(fields.y === y) ", !(fields.y === y))
                if (!(fields.y === y)) {
                    if (!(y % 2 === 0)) {
                        map.unshift(row.reverse())
                    } else {
                        // row.reverse()
                        map.unshift(row)

                    }
                    y--
                    row = []
                    row.unshift(fields)
                } else {
                    row.unshift(fields)
                }
            }

        }
        map.unshift(row)
        console.log("MAP ", map.reverse())
    }
    return map
}

function observeBoundaries(newPos) {
    return (newPos[0] >= PLAYER_X && newPos[0] < (GAME_WIDTH - 100) - PLAYER_X) &&
        (newPos[1] >= 0 && newPos[1] < GAME_HEIGHT - ROOM_HEIGHT)
}

function observePath(rooms, newPos, d) {
    const x = newPos[0] / (ROOM_HEIGHT * 2)
    const y = newPos[1] / (ROOM_HEIGHT * 2)
    // const nextTile = rooms[y][x]
    // console.log("nextTile ", nextTile, "path = ", d)
    if (x !== undefined && y !== undefined) {
        const nextTile = rooms[y][x]
        console.log("nextTile ", nextTile, " d=", d)
        console.log("X = ", x, "Y ", y)
        for (const key in nextTile) {
            if (key === d && nextTile[key] > 0) {
                return true
            }
        }
    }
    return false
}

function dispatchMove(newPos, oldPos, direction, move) {
    // const stamina = store.getState().player.stamina
    move({"direction": direction.slice(0, 1), position: oldPos, x: newPos[0], y: newPos[1]})
    if(store.getState().player.title === LAST_ROOM){
        function r(min, max) {
            return Math.random() * (max - min) + min;
        }

        confetti({
            angle: r(55, 125),
            spread: r(50, 70),
            particleCount: r(50, 100),
            origin: {
                y: 0.6
            }
        });
    }
}

function attemptMove(direction, move) {
    const newPos = getNewPosition(direction)
    const oldPos = store.getState().player.position
    console.log("PATH ", observePath(generateMap(), newPos, direction))
    if (observeBoundaries(newPos) && observePath(generateMap(), oldPos, direction)) {
        dispatchMove(newPos, oldPos, direction, move)
    }
}

export function handleKeyDown(e, d, move) {
    const pending = store.getState().player.isLoading
    e.preventDefault()
    switch (e.keyCode ? e.keyCode : d) {
        //left key, west
        case 37:
            return !pending && attemptMove('w_to', move)
        //up key, north
        case 38:
            return !pending && attemptMove('n_to', move)
        //right key, east
        case 39:
            return !pending && attemptMove('e_to', move)
        //down key, south
        case 40:
            return !pending && attemptMove('s_to', move)
        default:
            console.log(e.keyCode)
    }
}

