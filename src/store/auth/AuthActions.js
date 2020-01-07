import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from './AuthTypes'
import axios from 'axios'

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START })
  axios
    .post('https://lambda-mud-test.herokuapp.com/api/login/', credentials)
    .then(res => {
      console.log('login res', res)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
      localStorage.setItem('token', res.data.key)
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response })
      // console.log("auth failure", err.response)
    })
}

export const register = credentials => dispatch => {
  dispatch({ type: REGISTER_START })
  axios
    .post(
      'https://lambda-mud-test.herokuapp.com/api/registration/',
      credentials
    )
    .then(res => {
      console.log('register res', res)
      dispatch({ type: REGISTER_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err.response })
    })
}
