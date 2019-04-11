import {
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  GET_ANY_USER,
  GET_ANY_USER_SUCCESS,
  GET_ANY_USER_FAILURE,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPLOAD_USER_IMAGE_SUCCESS,
  UPLOAD_USER_IMAGE_FAILURE,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL
} from "../actions/users";

const initialState = {
  loggedInUser: {
    id: 0,
    username: "",
    displayName: "",
    about: "",
    score: 5,
    createdAt: "",
    updatedAt: "",
    guesses: []
  },
  uploadImageResult: "",
  userList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return state;
    case DELETE_USER_FAILURE:
      return state;
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loggedInUser: initialState.loggedInUser
      };

    case GET_ANY_USER:
      return state;
    case GET_ANY_USER_SUCCESS:
      return {
        ...state,
        users: { ...state.users, [action.data.id]: action.data }
      };
    case GET_ANY_USER_FAILURE:
      return state;

    case GET_USER:
      return state;
    case GET_USER_SUCCESS:
      return {
        ...state,
        loggedInUser: action.data
      };
    case GET_USER_FAILURE:
      return state;

    case UPDATE_USER:
      return state;
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loggedInUser: { ...state.loggedInUser, ...action.data },
        imageTimestamp: ""
      };
    case UPDATE_USER_FAILURE:
      return state;

    case UPLOAD_USER_IMAGE_SUCCESS:
      return {
        ...state,
        uploadImageResult: action.uploadImageResult,
        imageTimestamp: action.imageTimestamp
      };
    case UPLOAD_USER_IMAGE_FAILURE:
      return {
        ...state,
        uploadImageResult: action.uploadImageResult
      };

    case GET_USERS:
      return state;
    case GET_USERS_SUCCESS:
      return {
        ...state,
        userList: action.payload.users
      };
    case GET_USERS_FAIL:
      return {
        ...state
      };

    default:
      return state;
  }
};
