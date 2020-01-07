import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE, LOGOUT
} from './AuthTypes'

const initialState = {
    isLoading: false,
    error: '',
    isAuth: !!localStorage.getItem('token')
}

const authReducer = (state = initialState, {payload, type}) => {
    switch (type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                error: ''
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case REGISTER_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case LOGOUT:
            console.log("usAuth false")
            return {
                ...state,
                error: "",
                isLoading: false,
                isAuth: false,
            };
        default:
            return state
    }
}

export default authReducer
