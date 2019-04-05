import {
  GET_TARGET,
  GET_TARGET_FAIL,
  GET_TARGET_SUCCESS,
  END_OF_TARGETS,
  CREATE_TARGET,
  CREATE_TARGET_FAIL,
  CREATE_TARGET_SUCCESS,
  GET_TARGET_BY_ID,
  GET_TARGET_BY_ID_FAIL,
  GET_TARGET_BY_ID_SUCCESS
} from "../actions";

const initialState = {
  getTargetLoading: false,
  getTargetError: null,
  createTargetLoading: false,
  createTargetError: null,
  endOfTargets: false,
  offset: 0,
  targets: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TARGET:
      return {
        ...state,
        getTargetLoading: true,
        getTargetError: null
      };
    case GET_TARGET_SUCCESS:
      return {
        ...state,
        targets: [...state.targets, ...action.payload.targets],
        getTargetLoading: false,
        offset: state.offset + 20
      };
    case GET_TARGET_FAIL:
      return {
        ...state,
        getTargetError: action.payload,
        getTargetLoading: false
      };

    case END_OF_TARGETS:
      return {
        ...state,
        endOfTargets: true
      };

    case CREATE_TARGET:
      return {
        ...state,
        createTargetLoading: true,
        createTargetError: null
      };
    case CREATE_TARGET_SUCCESS:
      return {
        ...state,
        targets: [action.payload.target, ...state.targets],
        createTargetLoading: false
      };
    case CREATE_TARGET_FAIL:
      return {
        ...state,
        createTargetError: action.payload,
        createTargetLoading: false
      };

    case GET_TARGET_BY_ID:
      return {
        ...state,
        getTargetLoading: true,
        getTargetError: null
      };
    case GET_TARGET_BY_ID_SUCCESS:
      let newTargets = state.targets.slice();
      newTargets.splice(action.index, 1, action.payload.target);
      return {
        ...state,
        targets: newTargets,
        getTargetLoading: false
      };
    case GET_TARGET_BY_ID_FAIL:
      return {
        ...state,
        getTargetError: action.payload,
        getTargetLoading: false
      };

    default:
      return state;
  }
};
