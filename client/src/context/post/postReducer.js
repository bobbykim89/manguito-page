import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  CLEAR_CURRENT,
  POST_ERROR,
  GET_POST,
} from '../types';

const variable = (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case GET_POST:
      return {
        ...state,
        currentPost: action.payload,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
        loading: false,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        currentPost: null,
      };
    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default variable;
