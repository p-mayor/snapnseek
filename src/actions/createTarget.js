import { domain, handleJsonResponse } from "./constants";

// action types
export const CREATE_TARGET = "CREATE_TARGET";
export const CREATE_TARGET_SUCCESS = "CREATE_TARGET_SUCCESS";
export const CREATE_TARGET_FAIL = "CREATE_TARGET_FAIL";

const url = domain + "/targets";

export const createTarget = targetData => (dispatch, getState) => {
  dispatch({
    type: CREATE_TARGET
  });

  return fetch(url, {
    method: "POST",
    headers: {
      // "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getState().auth.login.token}`
    },
    body: targetData
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATE_TARGET_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: CREATE_TARGET_FAIL, payload: err.message })
      );
    });
};

export default createTarget;
