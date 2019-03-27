import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

// action types
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

// actions for logout
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT = "LOGOUT";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

// actions for register
export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

const url = domain + "/auth";

// action creators
const login = loginData => dispatch => {
  dispatch({
    type: LOGIN
  });

  return fetch(url + "/login", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGIN_FAIL, payload: err.message })
      );
    });
};

export const loginThenGoToUserProfile = loginData => dispatch => {
  return dispatch(login(loginData)).then(() => dispatch(push("/profile")));
};

const logout = logoutData => (dispatch, getState) => {
  const token = getState().auth.login;
  dispatch({
    type: LOGOUT
  });
  return fetch(url + "/logout", {
    headers: {
      Authorization: "Bearer" + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(logoutData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGOUT_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      alert("Incorrect Login or Password");
      return Promise.reject(
        dispatch({
          type: LOGOUT_FAIL,
          payload: err
        })
      );
    });
};

export const logoutThenGoToLogin = logoutData => dispatch => {
  return dispatch(logout(logoutData)).then(() => dispatch(push("/")));
};

const register = registerData => dispatch => {
  dispatch({
    type: REGISTER
  });

  return fetch(url + "/register", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: REGISTER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: REGISTER_FAIL,
          payload: err.message
        })
      );
    });
};

export const registerThenGoToUserProfile = registerData => dispatch => {
  return dispatch(register(registerData)).then(() =>
    dispatch(loginThenGoToUserProfile(registerData))
  );
};
