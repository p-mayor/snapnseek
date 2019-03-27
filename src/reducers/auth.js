import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from "../actions";

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null,
  logoutLoading: null,
  logoutError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginLoading: true,
        loginError: null
      };
    case LOGIN_SUCCESS:
      return { ...state, login: action.payload, loginLoading: false };
    case LOGIN_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false };

    default:
      return state;
    case LOGOUT:
      return { ...state, logoutLoading: true, logoutError: null };

    case LOGOUT_SUCCESS:
      return { ...state, logout: action.payload, logoutLoading: false };

    case LOGOUT_FAIL:
      return { ...state, logoutError: action.payload, logoutLoading: false };
  }
};
