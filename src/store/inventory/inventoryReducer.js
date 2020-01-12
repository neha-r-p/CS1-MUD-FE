import {
    GET_ITEMS_START,
    GET_ITEMS_SUCCESS,
    GET_ROOMS_ITEMS,
    PLAYER_DROP_FAILURE,
    PLAYER_DROP_START,
    PLAYER_DROP_SUCCESS,
    PLAYER_EAT_FAILURE,
    PLAYER_EAT_START,
    PLAYER_EAT_SUCCESS,
    ROOM_TAKE_FAILURE,
    ROOM_TAKE_START,
    ROOM_TAKE_SUCCESS
} from './inventoryTypes'

const initialState = {
    allItems: [],
    playerItems: [],
    roomItems: [],
    isLoading: false,
    error: ""
}

const inventoryReducer = (state = initialState, {payload, type}) => {
    switch (type) {
        //  GET ITEMS
        case GET_ITEMS_START:
            return {
                ...state,
                isLoading: true,
            }

        case GET_ITEMS_SUCCESS:
            const initialRoomItems = payload.items.filter(item => payload.room_id === item.fields.room_id)
            const initialPlayerItems = payload.items.filter(item => payload.player_id === item.fields.player_id)
            return {
                ...state,
                isLoading: false,
                playerItems: initialPlayerItems,
                roomItems: initialRoomItems,
                allItems: payload.items,
            }

        case GET_ROOMS_ITEMS:
            const filteredRoomItems = state.allItems.filter(item => payload.room_id === item.fields.room_id)
            return {
                ...state,
                roomItems: filteredRoomItems,
            }

        // case PLAYER_DROP:
        //     let filterPlayerInventory = state.playerItems.filter(item => !(item.item_id === payload))
        //     let filterRoomInventory = state.playerItems.filter(item => item.item_id === payload)
        //     return {
        //         ...state,
        //         playerItems: filterPlayerInventory,
        //         roomItems: [...state.roomItems, ...filterRoomInventory]
        //     }

        // case PLAYER_EAT:
        //     let filterPI = state.playerItems.filter(item => !(item.item_id === payload))
        //     return {
        //         ...state,
        //         playerItems: filterPI
        //     }

        //    pick up action
        case ROOM_TAKE_START:
            return {
                ...state,
                isLoading: true,
            }

        case ROOM_TAKE_SUCCESS:
            let filtRoomInv = state.roomItems.filter(item => !(item.pk === payload.item_id))
            let filtPlayerInv = state.allItems.filter(item => item.pk === payload.item_id)

            return {
                ...state,
                playerItems: [...state.playerItems, ...filtPlayerInv],
                roomItems: filtRoomInv,
                isLoading: false
            }

        case ROOM_TAKE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: ""
            }

        //    drop action
        case PLAYER_DROP_START:
            return {
                ...state,
                isLoading: true,
            }

        case PLAYER_DROP_SUCCESS:
            const ItemToRoom = state.allItems.filter(item => item.pk === payload.item_id)
            const droppedItem = state.playerItems.filter(item => item.pk !== payload.item_id)
            return {
                ...state,
                isLoading: false,
                roomItems: [...state.roomItems, ...ItemToRoom],
                playerItems: droppedItem,
            }

        case PLAYER_DROP_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: ""
            }

        //    EAT ACTION
        case PLAYER_EAT_START:
            return {
                ...state,
                isLoading: true,
            }

        case PLAYER_EAT_SUCCESS:
            const restOfItems = state.playerItems.filter(item => item.pk !== payload.item_id)
            return {
                ...state,
                isLoading: false,
                playerItems: restOfItems,
            }

        case PLAYER_EAT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            }

        default:
            return state
    }
}

export default inventoryReducer
