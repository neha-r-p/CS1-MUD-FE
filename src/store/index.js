import {combineReducers} from 'redux'
import authReducer from './auth/AuthReducers'
import playerReducer from './player/playerReducer'
import inventoryReducer from './inventory/inventoryReducer'
import mapReducer from "./map/mapReducer";

export default combineReducers({
    authReducer,
    player: playerReducer,
    inventory: inventoryReducer,
    map: mapReducer,
})
