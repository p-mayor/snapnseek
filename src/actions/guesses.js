//getGuesses method
import { domain, jsonHeaders, handleJsonResponse } from "./constants";

// action types
export const GET_GUESS = "GET_GUESS";
export const GET_GUESS_SUCCESS = "GET_GUESS_SUCCESS";
export const GET_GUESS_FAIL = "GET_GUESS_FAIL";
export const END_OF_GUESSES = "END_OF_GUESSES";
export const GET_GUESS_BY_ID = "GET_GUESS_BY_ID";
export const GET_GUESS_BY_ID_SUCCESS = "GET_GUESS_BY_ID_SUCCESS";
export const GET_GUESS_BY_ID_FAIL = "GET_GUESS_BY_ID_FAIL";
export const CREATE_GUESS = "CREATE_GUESS";
export const CREATE_GUESS_SUCCESS = "CREATE_GUESS_SUCCESS";
export const CREATE_GUESS_FAIL = "CREATE_GUESS_FAIL";

const url = domain + "/guesses";
export const getGuesses = () => dispatch => {
  dispatch({
    type: GET_GUESS
  });

  return fetch(url, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      if (result.guesses.length === 0) {
        return dispatch({
          type: END_OF_GUESSES
        });
      } else {
        return dispatch({
          type: GET_GUESS_SUCCESS,
          payload: result.guesses
        });
      }
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_GUESS_FAIL, payload: err.guess })
      );
    });
};

export const getGuessById = guessId => (dispatch, getState) => {
  dispatch({
    type: GET_GUESS_BY_ID
  });

  return fetch(url + `/${guessId}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      let index = getState().guesses.guesses.findIndex(
        guess => guess.id === guessId
      );
      return dispatch({
        type: GET_GUESS_BY_ID_SUCCESS,
        payload: result,
        index: index
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_GUESS_BY_ID_FAIL, payload: err.guess })
      );
    });
};

export const createGuess = guessData => (dispatch, getState) => {
  dispatch({
    type: CREATE_GUESS
  });

  return fetch(url, {
    method: "POST",
    headers: {
      // "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getState().auth.login.token}`
    },
    body: guessData
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATE_GUESS_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: CREATE_GUESS_FAIL, payload: err.message })
      );
    });
};

export const createGuessThenGetGuesses = guessData => dispatch => {
  return dispatch(createGuess(guessData)).then(() => dispatch(getGuesses()));
};

export default getGuesses;
