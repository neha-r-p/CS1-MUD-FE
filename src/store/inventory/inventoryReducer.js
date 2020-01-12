import {GET_ITEMS_START, GET_ITEMS_SUCCESS, GET_ROOMS_ITEMS, PLAYER_DROP, PLAYER_EAT, ROOM_TAKE} from './inventoryTypes'

const initialState = {
    allItems: [],
    playerItems: [],
    roomItems: [],
    isLoading: false
}

const inventoryReducer = (state = initialState, {payload, type}) => {
    switch (type) {
        case GET_ITEMS_START:
            return {
                ...state,
                isLoading: true,
            }
        case GET_ITEMS_SUCCESS:
            // const playerItems = payload.items.filter(item =>{ if(payload.player_id === item.fields.player_id){ return item.fields}})
            // const roomItems = payload.items.filter(item =>{ if(payload.room_id === item.fields.room_id){ return item.fields}})
            // console.log("!!!!!!!!!!!!!!PLAYER ID !!!!!!!!!!!!!!!!",  payload.player_id)
            // console.log("!!!!!!!!!!!!!!ITESMS !!!!!!!!!!!!!!!!", roomItems)
            return {
                ...state,
                isLoading: false,
                // playerItems: playerItems,
                allItems: payload,
            }
        case GET_ROOMS_ITEMS:
            const filteredRoomItems = state.allItems.filter(item => payload.room_id === item.fields.room_id)
            console.log("ALL ITEMS ", state.allItems)
            console.log("NEW FILTERED ITEMS ", filteredRoomItems)
            console.log("payload.room_id ", payload.room_id)
            return {
                ...state,
                roomItems: filteredRoomItems,
            }
        case PLAYER_DROP:
            let filterPlayerInventory = state.playerItems.filter(item => !(item.item_id === payload))
            let filterRoomInventory = state.playerItems.filter(item => item.item_id === payload)
            return {
                ...state,
                playerItems: filterPlayerInventory,
                roomItems: [...state.roomItems, ...filterRoomInventory]
            }

        case PLAYER_EAT:
            let filterPI = state.playerItems.filter(item => !(item.item_id === payload))
            return {
                ...state,
                playerItems: filterPI
            }

        case ROOM_TAKE:
            let filtRoomInv = state.roomItems.filter(item => !(item.item_id === payload))
            let filtPlayerInv = state.roomItems.filter(item => item.item_id === payload)
            return {
                ...state,
                playerItems: [...state.playerItems, ...filtPlayerInv],
                roomItems: filtRoomInv
            }

        default:
            return state
    }
}

export default inventoryReducer
