import {
  CREATE_TARGET,
  CREATE_TARGET_SUCCESS,
  CREATE_TARGET_FAIL,
  GET_TARGET,
  GET_TARGET_SUCCESS,
  GET_TARGET_FAIL,
  GET_TARGET_BY_ID,
  GET_TARGET_BY_ID_SUCCESS,
  GET_TARGET_BY_ID_FAIL
} from "../actions";

const initialState = {
  getTargetLoading: false,
  getTargetError: null,
  createTargetLoading: false,
  createTargetError: null,
  currentTarget: {},
  targets: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TARGET:
      return state;
    case CREATE_TARGET_SUCCESS:
      return state;
    case CREATE_TARGET_FAIL:
      return state;

    case GET_TARGET:
      return state;
    case GET_TARGET_SUCCESS:
      return { ...state, targets: action.payload };
    case GET_TARGET_FAIL:
      return state;

    case GET_TARGET_BY_ID:
      return state;
    case GET_TARGET_BY_ID_SUCCESS:
      return { ...state, currentTarget: action.payload["target"] };
    case GET_TARGET_BY_ID_FAIL:
      return state;

    default:
      return state;
  }
};
