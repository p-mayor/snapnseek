import { domain, jsonHeaders, handleJsonResponse } from "./constants";

// action types
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const CREATE_MESSAGE_SUCCESS = "CREATE_MESSAGE_SUCCESS";
export const CREATE_MESSAGE_FAIL = "CREATE_MESSAGE_FAIL";

const url = domain + "/messages";

export const createMessage = messageData => dispatch => {
  dispatch({
    type: CREATE_MESSAGE
  });

  return fetch(url, {
    method: "POST",
    headers: { ...jsonHeaders, Authorization: `Bearer ${messageData.token}` },
    body: JSON.stringify({ text: messageData.text })
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATE_MESSAGE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: CREATE_MESSAGE_FAIL, payload: err.message })
      );
    });
};

export default createMessage;
