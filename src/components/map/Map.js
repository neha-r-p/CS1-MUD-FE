import React, {useEffect} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {DIRECTION_LENGTH, DIRECTION_POSITION, DIRECTION_SIZE, ROOM_HEIGHT, ROOM_WIDTH, TAIL_SIZE} from "./utils";
import Player from "../player/Player";
import {GAME_HEIGHT, GAME_WIDTH} from "../game/utils";
import {connect} from "react-redux";
import {getRooms} from "../../store/map/mapActions";

const useStyles = makeStyles({
    map: {
        position: 'relative',
        top: '0',
        left: '0',
        width: GAME_WIDTH,
        height: GAME_HEIGHT,
        border: '4px solid #543636',
        background: 'white',
    },
    row: {
        whiteSpace: "pre-wrap",
        display: "flex",
    },
    tail: {
        width: TAIL_SIZE,
        height: TAIL_SIZE,
        position: 'relative'
    },
    border: {},
    room: {
        width: ROOM_WIDTH,
        height: ROOM_HEIGHT,
        position: 'relative',
        // background: '#ff000a',
        margin: TAIL_SIZE,
        border: '2px solid #F4298F',
        borderRadius: '4px'
    },
    north: {
        top: DIRECTION_POSITION,
        width: DIRECTION_SIZE,
        position: 'absolute',
        left: '14px',
        height: DIRECTION_LENGTH,
        background: '#820263',
    },
    south: {
        bottom: DIRECTION_POSITION,
        left: '14px',
        width: DIRECTION_SIZE,
        position: 'absolute',
        height: DIRECTION_LENGTH,
        background: '#820263',
    },
    west: {
        right: ROOM_WIDTH - 2,
        width: DIRECTION_LENGTH,
        position: 'absolute',
        height: DIRECTION_SIZE,
        top: "14px",
        background: '#1b22be',
    },
    east: {
        left: ROOM_WIDTH - 2,
        width: DIRECTION_LENGTH,
        position: 'absolute',
        height: DIRECTION_SIZE,
        top: "14px",
        background: '#04BE51',
    }
})

function Map(props) {
    const classes = useStyles()

    useEffect(() => {
        props.getRooms()
    }, [])


    function defineDirection(rooms) {
        let map = []
        if (rooms.length > 0) {
            let row = []
            let y = 0
            for (let i = 1; i < 100; i++) {
                const item = []
                const room = rooms[i]
                const fields = room.fields
                console.log(fields)
                if (fields) {
                    if (fields.y != 0 && fields.y > y) {
                        map.unshift(row)
                        y++
                        row = []
                    }
                    for (const key in fields) {
                        if (key === "n_to" && fields[key] > 0) {
                            item.push(<div className={classes.north}></div>)
                        }
                        if (key === 's_to' && fields[key] > 0) {
                            item.push(<div className={classes.south}></div>)
                        }
                        if (key === 'e_to' && fields[key] > 0) {
                            item.push(<div className={classes.east}></div>)
                        }
                        if (key === 'w_to' && fields[key] > 0) {
                            item.push(<div className={classes.west}></div>)
                        }
                    }
                    row.push(item)
                }

            }
            console.log("MAP ", map)
        }
        return map
    }

    return (
        <div className={classes.map}>
            {defineDirection(props.rooms).map((row, index) => {
                return <div className={classes.row}>
                    {index % 2 === 0 ?
                        row.map(item => {
                            return <div className={`${classes.tail} ${classes.room}`}>{item}</div>
                        })
                        : row.reverse().map(item => {
                            return <div className={`${classes.tail} ${classes.room}`}>{item}</div>
                        })
                    }

                </div>
            })}
            <Player/>
        </div>
    )
}

const mapStatesToProps = state => {
    return {
        rooms: state.map.rooms
    }
}

export default connect(mapStatesToProps, {getRooms})(Map)
