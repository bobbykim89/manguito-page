import React, { createContext, useReducer } from 'react';
import commentReducer from './commentReducer';
import axios from 'axios';
import {
  ADD_COMMENT,
  COMMENT_ERROR,
  DELETE_COMMENT,
  GET_COMMENTS,
} from '../types';

export const CommentContext = createContext();

const CommentState = (props) => {
  const initialState = {
    comments: [],
    error: null,
  };

  const [state, dispatch] = useReducer(commentReducer, initialState);

  // Get Comment
  const getComments = async () => {
    try {
      const res = await axios.get('api/comments');
      dispatch({ type: GET_COMMENTS, payload: res.data });
    } catch (err) {
      dispatch({ type: COMMENT_ERROR, payload: err.response.msg });
    }
  };

  // Add Comment
  const addComment = async (comment) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('api/comments', comment, config);
      dispatch({ type: ADD_COMMENT, payload: res.data });
    } catch (err) {
      dispatch({ type: COMMENT_ERROR, payload: err.response.msg });
    }
  };

  // Delete Comment
  const deleteComment = async (id) => {
    try {
      await axios.delete(`api/comments/${id}`);
      dispatch({ type: DELETE_COMMENT, payload: id });
    } catch (err) {
      dispatch({ type: COMMENT_ERROR, payload: err.response.msg });
    }
  };

  return (
    <CommentContext.Provider
      value={{
        comments: state.comments,
        error: state.error,
        getComments,
        addComment,
        deleteComment,
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentState;
