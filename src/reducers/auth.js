import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../actions";

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null,
  logoutLoading: null,
  logoutError: null,
  registerLoading: false,
  register: null,
  registerError: null
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
      return { ...state, login: null, logoutLoading: false };

    case LOGOUT_FAIL:
      return { ...state, logoutError: action.payload, logoutLoading: false };

    case REGISTER:
      return { ...state, registerLoading: true, registerError: null };

    case REGISTER_SUCCESS:
      return { ...state, register: action.payload, registerLoading: false };

    case REGISTER_FAIL:
      return {
        ...state,
        registerError: action.payload,
        registerLoading: false
      };
  }
};
