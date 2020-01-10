import {GET_ROOMS_FAILURE, GET_ROOMS_START, GET_ROOMS_SUCCESS} from "./mapTypes";
import axiosWithAuth from "../../components/utils/axiosWithAuth";


export const getRooms = () => dispatch => {
    dispatch({type: GET_ROOMS_START})
    axiosWithAuth()
        .get("/api/adv/rooms/")
        .then(res => dispatch({type: GET_ROOMS_SUCCESS, payload: res.data}))
        .catch(error => dispatch({type: GET_ROOMS_FAILURE, payload: error}))
}