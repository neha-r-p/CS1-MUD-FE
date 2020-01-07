import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE, LOGOUT
} from './AuthTypes'
import axios from 'axios'

export const login = (credentials, history) => dispatch => {
    dispatch({type: LOGIN_START})
    axios
        .post('https://lambda-mud-test.herokuapp.com/api/login/', credentials)
        .then(res => {
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
            localStorage.setItem('token', res.data.key)
            history.push('/adventure-game')
        })
        .catch(err => {
            dispatch({type: LOGIN_FAILURE, payload: err.response})
        })
}

export const logout = (history) => {
    return dispatch => {
        dispatch({type: LOGOUT})
        localStorage.removeItem('token')
        history.push('/login')
    }
};

export const register = (credentials, history) => dispatch => {
    dispatch({type: REGISTER_START})
    axios
        .post('https://lambda-mud-test.herokuapp.com/api/registration/', credentials)
        .then(res => {
            dispatch({type: REGISTER_SUCCESS, payload: res.data})
            history.push('/login')
        })
        .catch(err => {
            dispatch({type: REGISTER_FAILURE, payload: err.response})
        })
}
