import { PLAYER_DROP, PLAYER_EAT, ROOM_TAKE } from './inventoryTypes'

const initialState = {
  playerItems: [
    {
      item_id: 1,
      item_name: 'apple',
      item_description: 'red delicious',
      has_player: 1,
      in_room: 0
    },
    {
      item_id: 2,
      item_name: 'apple',
      item_description: 'granny smith',
      has_player: 1,
      in_room: 0
    },
    {
      item_id: 3,
      item_name: 'orange',
      item_description: 'navel',
      has_player: 1,
      in_room: 0
    }
  ],
  roomItems: [
    {
      item_id: 4,
      item_name: 'banana',
      item_description: 'ripe',
      has_player: 0,
      in_room: 1
    },
    {
      item_id: 5,
      item_name: 'orange',
      item_description: 'blood',
      has_player: 0,
      in_room: 1
    }
  ]
}

const inventoryReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case PLAYER_DROP:
      let filterPlayerInventory = state.playerItems.filter(
        item => !(item.item_id === payload)
      )
      let filterRoomInventory = state.playerItems.filter(
        item => item.item_id === payload
      )
      return {
        ...state,
        playerItems: filterPlayerInventory,
        roomItems: [...state.roomItems, ...filterRoomInventory]
      }
    case PLAYER_EAT:
      let filterPI = state.playerItems.filter(
        item => !(item.item_id === payload)
      )
      return {
        ...state,
        playerItems: filterPI
      }
    case ROOM_TAKE:
      let filtRoomInv = state.roomItems.filter(
        item => !(item.item_id === payload)
      )
      let filtPlayerInv = state.roomItems.filter(
        item => item.item_id === payload
      )
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
