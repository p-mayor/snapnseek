//getTargets method
import { domain, jsonHeaders, handleJsonResponse } from "./constants";

// action types
export const GET_TARGET = "GET_TARGET";
export const GET_TARGET_SUCCESS = "GET_TARGET_SUCCESS";
export const GET_TARGET_FAIL = "GET_TARGET_FAIL";
export const END_OF_TARGETS = "END_OF_TARGETS";
export const GET_TARGET_BY_ID = "GET_TARGET_BY_ID";
export const GET_TARGET_BY_ID_SUCCESS = "GET_TARGET_BY_ID_SUCCESS";
export const GET_TARGET_BY_ID_FAIL = "GET_TARGET_BY_ID_FAIL";
export const CREATE_TARGET = "CREATE_TARGET";
export const CREATE_TARGET_SUCCESS = "CREATE_TARGET_SUCCESS";
export const CREATE_TARGET_FAIL = "CREATE_TARGET_FAIL";

const url = domain + "/targets";
export const getTargets = () => dispatch => {
  dispatch({
    type: GET_TARGET
  });

  return fetch(url, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      if (result.targets.length === 0) {
        return dispatch({
          type: END_OF_TARGETS
        });
      } else {
        return dispatch({
          type: GET_TARGET_SUCCESS,
          payload: result.targets
        });
      }
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_TARGET_FAIL, payload: err.target })
      );
    });
};

export const getTargetById = targetId => (dispatch, getState) => {
  dispatch({
    type: GET_TARGET_BY_ID
  });

  return fetch(url + `/${targetId}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      let index = getState().targets.targets.findIndex(
        target => target.id === targetId
      );
      return dispatch({
        type: GET_TARGET_BY_ID_SUCCESS,
        payload: result,
        index: index
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_TARGET_BY_ID_FAIL, payload: err.target })
      );
    });
};

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

export const createTargetThenGetTargets = targetData => dispatch => {
  return dispatch(createTarget(targetData)).then(() => dispatch(getTargets()));
};

export default getTargets;
