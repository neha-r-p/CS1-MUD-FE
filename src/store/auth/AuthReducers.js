import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from "./AuthTypes";

const initialState = {
  isLoading: false,
  error: "",
  isAuth: !!localStorage.getItem("token")
};

const authReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: ""
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: true,
        error: payload
      };
    default:
      return state;
  }
};

export default authReducer;
