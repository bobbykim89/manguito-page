import React, { createContext, useReducer } from 'react';
import commentReducer from './commentReducer';
import { v4 as uuidv4 } from 'uuid';
import { ADD_COMMENT, DELETE_COMMENT } from '../types';

export const CommentContext = createContext();

const CommentState = (props) => {
  const initialState = {
    comments: [
      {
        id: '1',
        commentId: '11',
        name: 'Pollito',
        text: 'A tweet!',
      },
      {
        id: '1',
        commentId: '22',
        name: 'Manguito',
        text: 'Pio Pio!',
      },
    ],
  };

  const [state, dispatch] = useReducer(commentReducer, initialState);
  // Get Comment

  // Add Comment
  const addComment = (comment) => {
    comment.commentId = uuidv4();
    dispatch({ type: ADD_COMMENT, payload: comment });
  };

  // Delete Comment
  const deleteComment = (commentId) => {
    dispatch({ type: DELETE_COMMENT, payload: commentId });
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
