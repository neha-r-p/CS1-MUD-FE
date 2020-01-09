import { combineReducers } from "redux"
import authReducer from "./auth/AuthReducers"
import playerReducer from "./player/playerReducer";

export default combineReducers({ authReducer, player: playerReducer})
