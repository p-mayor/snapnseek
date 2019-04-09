import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from "../actions";

const initialState = {
  loginLoading: false,
<<<<<<< HEAD
  login: null,
||||||| merged common ancestors
  login: { id: 1 , token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTU0NDA0ODY2fQ.qGV02LGcs8Nm6dTFCNme1_UWXZFR9tLutGHIlB9BzxA"},
=======
  login: { id: 1 , token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTU0NDA0ODY2fQ.qGV02LGcs8Nm6dTFCNme1_UWXZFR9tLutGHIlB9BzxA"},
  // login: null,
>>>>>>> d89073feaa755216f05c9f449e8ac0a1a50dc44d
  loginError: null,
  registerError: null,
  username: null,
  displayName: null,
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

    case REGISTER:
      return {
        ...state,
        loginLoading: true,
        registerError: null
      };
    case REGISTER_SUCCESS:
      return { ...state, loginLoading: false };
    case REGISTER_FAIL:
      return { ...state, registerError: action.payload, loginLoading: false };

    case LOGOUT:
      return {
        ...state,
        logoutLoading: true,
        logoutError: null
      };
    case LOGOUT_SUCCESS:
      return { ...state, login: null };
    case LOGOUT_FAIL:
      return { ...state, logoutError: action.payload, logoutLoading: false };

    default:
      return state;
  }
};
