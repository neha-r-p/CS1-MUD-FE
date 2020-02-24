import React, { useEffect } from 'react'
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'
//store
import { connect } from 'react-redux'
import { currentRoom } from '../../store/player/playerActions'

const useStyles = makeStyles({
  root: {
    color: 'white',
    height: '130px',
    backgroundColor: '#eb9b07'
  },
  roomName: {
    margin: '5px auto',
  },
  roomDescription: {
    margin: '7px 5px 10px',
    fontSize: '16px',
    fontWeight: '600',
    textAlign: 'left'
  }
})

const RoomInfo = props => {
  const classes = useStyles()
  useEffect(() => {
    props.currentRoom(props.player)
  }, [props.player.position])

  const roomTitle = props.player.title
  return (
    <div className={classes.root}>
      <h3 className={classes.roomName}>{roomTitle.toUpperCase()}</h3>
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
