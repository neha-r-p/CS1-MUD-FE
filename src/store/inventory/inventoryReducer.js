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
            const initialRoomItems = payload.items.filter(item => payload.room_id === item.fields.room_id)
            return {
                ...state,
                isLoading: false,
                // playerItems: playerItems,
                roomItems: initialRoomItems,
                allItems: payload.items,
            }
        case GET_ROOMS_ITEMS:
            const filteredRoomItems = state.allItems.filter(item => payload.room_id === item.fields.room_id)
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
