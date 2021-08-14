import React, { createContext, useReducer } from 'react';
import commentReducer from './commentReducer';
import { v4 as uuidv4 } from 'uuid';
import { ADD_COMMENT, DELETE_COMMENT } from '../types';

export const CommentContext = createContext();

const CommentState = (props) => {
  const initialState = { comments: [] };

  const [state, dispatch] = useReducer(commentReducer, initialState);
  // Get Comment

  // Add Comment
  const addComment = (comment) => {
    comment.id = uuidv4();
    dispatch({ type: ADD_COMMENT, payload: comment });
  };

  // Delete Comment
  const deleteComment = (id) => {
    dispatch({ type: DELETE_COMMENT, payload: id });
  };

  return (
    <CommentContext.Provider
      value={{
        comments: state.comments,
        addComment,
        deleteComment,
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentState;
