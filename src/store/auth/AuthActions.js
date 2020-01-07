import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "./AuthTypes";
import axios from "axios";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("https://lambda-mud-test.herokuapp.com/api/login/", credentials)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data);
    })
    .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err.response});
        // console.log("auth failure", err.response)
    });
};
