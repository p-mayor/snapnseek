import {
  GET_MESSAGE,
  GET_MESSAGE_FAIL,
  GET_MESSAGE_SUCCESS,
  END_OF_MESSAGES,
  CREATE_MESSAGE,
  CREATE_MESSAGE_FAIL,
  CREATE_MESSAGE_SUCCESS,
  GET_MESSAGE_BY_ID,
  GET_MESSAGE_BY_ID_FAIL,
  GET_MESSAGE_BY_ID_SUCCESS
} from "../actions";

const initialState = {
  getMessageLoading: false,
  getMessageError: null,
  createMessageLoading: false,
  createMessageError: null,
  endOfMessages: false,
  offset: 0,
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        getMessageLoading: true,
        getMessageError: null
      };
    case GET_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages],
        getMessageLoading: false,
        offset: state.offset + 20
      };
    case GET_MESSAGE_FAIL:
      return {
        ...state,
        getMessageError: action.payload,
        getMessageLoading: false
      };

    case END_OF_MESSAGES:
      return {
        ...state,
        endOfMessages: true
      };

    case CREATE_MESSAGE:
      return {
        ...state,
        createMessageLoading: true,
        createMessageError: null
      };
    case CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [action.payload.message, ...state.messages],
        createMessageLoading: false
      };
    case CREATE_MESSAGE_FAIL:
      return {
        ...state,
        createMessageError: action.payload,
        createMessageLoading: false
      };

    case GET_MESSAGE_BY_ID:
      return {
        ...state,
        getMessageLoading: true,
        getMessageError: null
      };
    case GET_MESSAGE_BY_ID_SUCCESS:
      let newMessages = state.messages.slice();
      newMessages.splice(action.index, 1, action.payload.message);
      return {
        ...state,
        messages: newMessages,
        getMessageLoading: false
      };
    case GET_MESSAGE_BY_ID_FAIL:
      return {
        ...state,
        getMessageError: action.payload,
        getMessageLoading: false
      };

    default:
      return state;
  }
};
