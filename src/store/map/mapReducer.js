import {GET_ROOMS_FAILURE, GET_ROOMS_START, GET_ROOMS_SUCCESS} from "./mapTypes";


const initialState = {
    rooms: [],
    isLoading: false,
    error: ""
}


const mapReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_ROOMS_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_ROOMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                rooms: payload
            }
        case GET_ROOMS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
            }
        default:
            return state
    }
}


export default mapReducer