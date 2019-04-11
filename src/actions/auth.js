import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

// action types
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

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

const register = registerData => dispatch => {
  dispatch({
    type: REGISTER
  });

  if (registerData.password === registerData.confirmpassword) {
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
          dispatch({ type: REGISTER_FAIL, payload: err.message })
        );
      });
  } else {
    return Promise.reject(
      dispatch({ type: REGISTER_FAIL, payload: "passwords must match" })
    );
  }
};

export const logout = () => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({
    type: LOGOUT
  });

  return fetch(url + "/logout", {
    method: "GET",
    headers: { jsonHeaders, Authorization: `Bearer ${token}` }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGOUT_SUCCESS
      });
    });
};

export const loginThenGoToHome = loginData => dispatch => {
  return dispatch(login(loginData)).then(() => dispatch(push("/home")));
};

export const registerThenGoToLogin = registerData => dispatch => {
  return dispatch(register(registerData)).then(() => dispatch(push("/")));
};

export const logoutThenGoToLogin = logoutData => dispatch => {
  dispatch(push("/"));
  return dispatch(logout(logoutData));
};
