import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {DIRECTION_SIZE, ROOM_HEIGHT, ROOM_WIDTH, TAIL_SIZE} from "./utils";
import Player from "../player/Player";
import {GAME_HEIGHT, GAME_WIDTH} from "../game/utils";

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
        justifyContent: 'center',
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
        // background: '#ff000a',
        border: '2px solid #F4298F',
        borderRadius: '4px'
    },
    direction: {
        width: TAIL_SIZE * 2,
        height: DIRECTION_SIZE,
        top: ROOM_HEIGHT / 2,
        background: '#04BE51',
    },
    directionUp: {
        width: DIRECTION_SIZE,
        height: TAIL_SIZE,
        background: '#04BE51',
    },
    empty: {}
})

function Map() {
    const classes = useStyles()
    let arr = str.split(/\n/)

    function defineTile(type) {
        if (type == " ") {
            return classes.empty
        }
        if (type == "#") {
            return classes.border
        }
        if (type == "--") {
            return classes.direction
        }
        if (type == "|") {
            return classes.directionUp
        }
        if (type.match(/^[0-9]+$/)) {
            return classes.room
        }
    }

    return (
        <div className={classes.map}>
            {
                arr.map(item =>
                    <div className={classes.row}>
                        {
                            item.split(/([0-9][0-9][0-9]|--|\s)/).map(atr => atr.length > 0 &&
                                <div className={`${classes.tail} ${defineTile(atr)}`}></div>)
                        }
                    </div>
                )
            }
            <Player/>
        </div>
    )
}

export default Map

const str =
    "# # # # # # # # # # # # # # # # # # # # # # # # # # \n" +
    "#                                                  #\n" +
    "# 099--098--097--096--095--094--093--092--091--090 #\n" +
    "#                                               |  #\n" +
    "#                                               |  #\n" +
    "# 080--081--082--083--084--085--086--087--088--089 #\n" +
    "#  |                                               #\n" +
    "#  |                                               #\n" +
    "# 079--078--077--076--075--074--073--072--071--070 #\n" +
    "#                                               |  #\n" +
    "#                                               |  #\n" +
    "# 060--061--062--063--064--065--066--067--068--069 #\n" +
    "#  |                                               #\n" +
    "#  |                                               #\n" +
    "# 059--058--057--056--055--054--053--052--051--050 #\n" +
    "#                                               |  #\n" +
    "#                                               |  #\n" +
    "# 040--041--042--043--044--045--046--047--048--049 #\n" +
    "#  |                                               #\n" +
    "#  |                                               #\n" +
    "# 039--038--037--036--035--034--033--032--031--030 #\n" +
    "#                                               |  #\n" +
    "#                                               |  #\n" +
    "# 020--021--022--023--024--025--026--027--028--029 #\n" +
    "#  |                                               #\n" +
    "#  |                                               #\n" +
    "# 019--018--017--016--015--014--013--012--011--010 #\n" +
    "#                                               |  #\n" +
    "#                                               |  #\n" +
    "# 000--001--002--003--004--005--006--007--008--009 #\n" +
    "#                                                  #\n" +
    "# # # # # # # # # # # # # # # # # # # # # # # # # # "