import React from 'react'
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'
import apple from '../../assets/apple.png'
import orange from '../../assets/orange.png'
import banana from '../../assets/banana.png'
//store
import {connect} from 'react-redux'
import {
    playerEat,
    playerDrop,
    roomTake
} from '../../store/inventory/inventoryActions'

const useStyles = makeStyles({
    itemBox: {
        display: 'flex',
        width: '46px',
        height: '46px',
        backgroundColor: '#ffe1b2',
        margin: '3px',
        border: '1px solid #92734F'
    }
})

function Item(props) {
    const {item, inRoom, roomTake, playerEat, playerDrop, item_id} = props
    const classes = useStyles()
    const {name: item_name} = item

    function chooseImg() {
        switch (item_name) {
            case 'apple':
                return apple
            case 'banana':
                return banana
            case 'orange':
                return orange
        }
    }

    const handleClick = (e, item) => {
        e.preventDefault()
        if (inRoom && e.nativeEvent.which === 1) {
            console.log("DROP", inRoom)
            roomTake(item)
        } else if (!inRoom && e.nativeEvent.which === 1) {
            playerEat({item: item, room_id: props.room_id})
            console.log("EAT ", inRoom)
            // const stamina = store.getState().player.stamina
            // console.log("stamina from items", stamina)
            // store.dispatch({type: INCREASE_STAMINA, payload: {stamina: stamina <= 95 ? stamina + 5 : 100}})
        } else if (!inRoom && e.type === 'contextmenu') {
            e.preventDefault()
            playerDrop({item: item, room_id: props.room_id})
        }
    }

    return (
        <div className={classes.itemBox}>
            <img
                src={chooseImg()}
                alt={item_name}
                style={{width: '90%', height: '90%', margin: '1px auto'}}
                onClick={e => handleClick(e, item_id)}
                onContextMenu={e => handleClick(e, item_id)}
            />
        </div>
    )
}

const mapStatesToProps = state => {
    return{
        room_id: state.player.room_id,
    }
}

export default connect(mapStatesToProps, { playerEat, playerDrop, roomTake})(Item)
