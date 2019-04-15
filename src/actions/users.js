import { push } from "connected-react-router";
import { domain, jsonHeaders, handleJsonResponse } from "./constants/index";

import { logout } from "./auth.js";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";
export const GET_ANY_USER = "GET_ANY_USER";
export const GET_ANY_USER_SUCCESS = "GET_ANY_USER_SUCCESS";
export const GET_ANY_USER_FAILURE = "GET_ANY_USER_FAILURE";
export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";
export const UPLOAD_USER_IMAGE_SUCCESS = "UPLOAD_USER_IMAGE_SUCCESS";
export const UPLOAD_USER_IMAGE_FAILURE = "UPLOAD_USER_IMAGE_FAILURE";
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";

export const getUserInfo = userId => dispatch => {
  dispatch({ type: GET_USER });
  fetch(`${domain}/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        response.json().then(err => {
          throw err;
        });
      }
      return response.json();
    })
    .then(data => {
      dispatch({ type: GET_USER_SUCCESS, data: data.user });
    })
    .catch(err => {
      dispatch({ type: GET_USER_FAILURE, err });
    });
};

export const getLoggedInUserInfo = () => (dispatch, getState) => {
  const userId = getState().auth.login.id;
  dispatch(getUserInfo(userId));
};

export const deleteUser = token => dispatch => {
  dispatch({ type: DELETE_USER });
  fetch(`${domain}/users`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      if (!response.ok) {
        response.json().then(err => {
          throw err;
        });
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      dispatch({ type: DELETE_USER_SUCCESS });
      dispatch(push("/register"));
      return dispatch(logout());
    })
    .catch(err => {
      dispatch({ type: DELETE_USER_FAILURE, err });
    });
};

export const updateUser = userData => (dispatch, getState) => {
  const token = getState().auth.login.token;
  if (userData.displayName === "") {
    delete userData.displayName;
  }
  if (userData.password === "") {
    delete userData.password;
  }
  if (userData.about === "") {
    delete userData.about;
  }
  dispatch({ type: UPDATE_USER });
  fetch(`${domain}/users`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(response => {
      if (!response.ok) {
        response.json().then(err => {
          throw err;
        });
      }
      return response.json();
    })
    .then(data => {
      dispatch({ type: UPDATE_USER_SUCCESS, data: data.user });
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_FAILURE, err });
    });
};

export const getAnyUser = userId => dispatch => {
  dispatch({ type: GET_ANY_USER });
  fetch(`${domain}/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        response.json().then(err => {
          throw err;
        });
      }
      return response.json();
    })
    .then(data => {
      dispatch({ type: GET_ANY_USER_SUCCESS, data: data.user });
    })
    .catch(err => {
      dispatch({ type: GET_ANY_USER_FAILURE, err });
    });
};

export const uploadImage = imageData => (dispatch, getState) => {
  const token = getState().auth.login.token;
  fetch(`${domain}/users/picture`, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token
    },
    body: imageData
  })
    .then(res => {
      if (!res.ok) {
        throw res.status;
      } else {
        dispatch({
          type: UPLOAD_USER_IMAGE_SUCCESS,
          uploadImageResult: "Image upload successful",
          imageTimestamp: "?timestamp=" + Date.now()
        });
      }
    })
    .catch(err => {
      dispatch({
        type: UPLOAD_USER_IMAGE_FAILURE,
        uploadImageResult: "Image upload failed"
      });
    });
};

export const getUsers = () => dispatch => {
  dispatch({
    type: GET_USERS
  });

  return fetch(`${domain}/users`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_USERS_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_USERS_FAIL, payload: err.message })
      );
    });
};
