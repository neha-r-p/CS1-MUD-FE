import React, {useEffect} from 'react'

//store
import { connect } from 'react-redux'
import { currentRoom } from '../../store/player/playerActions'

const RoomInfo = props => {
    useEffect(() => {
        props.currentRoom(props.player)
    },[props.player.position])

    return (
        <div>
            <h3>{props.player.title}:</h3>
            <p>{props.player.description}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        player: state.player,
        rooms: state.map.rooms
    }
}

export default connect(mapStateToProps, { currentRoom })(RoomInfo)
