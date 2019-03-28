import {
  ADD_LIKE,
  ADD_LIKE_SUCCESS,
  ADD_LIKE_FAIL,
  DELETE_LIKE
} from "../actions";

const initialState = {
  addLikeLoading: false,
  addLikeError: null,
  likes: null,
  likeId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        addLikeLoading: true,
        addLikeError: null
      };
    case ADD_LIKE_SUCCESS:
      return {
        ...state,
        addLikeLoading: false,
        likes: action.payload
      };
    case ADD_LIKE_FAIL:
      return {
        ...state,
        addLikeError: action.payload,
        addLikeLoading: false
      };

    case DELETE_LIKE:
      return {
        ...state,
        likeId: action.payload
      };

    default:
      return state;
  }
};
