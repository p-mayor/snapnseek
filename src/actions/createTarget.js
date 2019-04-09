import { domain, jsonHeaders, handleJsonResponse } from "./constants";

// action types
export const CREATE_TARGET = "CREATE_TARGET";
export const CREATE_TARGET_SUCCESS = "CREATE_TARGET_SUCCESS";
export const CREATE_TARGET_FAIL = "CREATE_TARGET_FAIL";

const url = domain + "/targets";

export const createTarget = targetData => dispatch => {
  dispatch({
    type: CREATE_TARGET
  });

  return fetch(url, {
    method: "POST",
    headers: { ...jsonHeaders, Authorization: `Bearer ${targetData.token}` },
    body: JSON.stringify({ text: targetData.text, picture: targetData.picture })
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
