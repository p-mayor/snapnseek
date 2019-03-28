import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { getMessageById } from "./getMessages.js";

export const ADD_LIKE = "ADD_LIKE";
export const ADD_LIKE_SUCCESS = "ADD_LIKE_SUCCESS";
export const ADD_LIKE_FAIL = "ADD_LIKE_FAIL";
export const DELETE_LIKE = "DELETE_LIKE";
const url = domain + "/likes";

export const toggleAddLike = messageId => dispatch => {
  dispatch(addLike(messageId)).then(() => {
    dispatch(getMessageById(messageId));
  });
};

export const toggleDeleteLike = (likeId, messageId) => dispatch => {
  dispatch(deleteLike(likeId)).then(() => {
    dispatch(getMessageById(messageId));
  });
};

export const addLike = messageId => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({ type: ADD_LIKE });
  return fetch(url, {
    method: "POST",
    headers: {
      ...jsonHeaders,
      Authorization: "Bearer " + token
    },
    body: JSON.stringify({ messageId: messageId })
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: ADD_LIKE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: ADD_LIKE_FAIL, payload: err.message })
      );
    });
};

export const deleteLike = likeId => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({ type: DELETE_LIKE });

  return fetch(`${url}/${likeId}`, {
    method: "DELETE",
    headers: {
      ...jsonHeaders,
      Authorization: "Bearer " + token
    }
  })
    .then(handleJsonResponse)
    .then(result => {
      if (result) {
        console.log(result);
        dispatch({
          type: DELETE_LIKE,
          payload: result
        });
      }
    })
    .catch(err => console.log(err));
};

export default addLike;
