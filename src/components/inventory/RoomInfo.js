import React, {useEffect} from 'react'
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'
//store
import { connect } from 'react-redux'
import { currentRoom } from '../../store/player/playerActions'

const useStyles = makeStyles({
    root: {
        color: 'white',
        height: '130px',
        backgroundColor: '#F7B801'
    },
    roomName: {
        margin: '5px auto'
    },
    roomDescription: {
        margin: '10px auto',
        fontSize: '16px',
        fontWeight: 'bold'
    }
})

const RoomInfo = props => {
    const classes = useStyles()
    useEffect(() => {
        props.currentRoom(props.player)
    },[props.player.position])

    return (
        <div className={classes.root}>
            <h3 className={classes.roomName}>{props.player.title}:</h3>
            <p className={classes.roomDescription}>{props.player.description}</p>
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
