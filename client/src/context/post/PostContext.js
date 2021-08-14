import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import postReducer from './postReducer';
import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

export const PostContext = createContext();

const PostState = (props) => {
  const initialState = {
    posts: [
      {
        id: 1,
        image:
          'https://images.unsplash.com/photo-1586584358204-201ff934ee45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        content: 'Pollito is evil!',
        name: 'Bobby Kim',
      },
      {
        id: 2,
        image:
          'https://images.unsplash.com/photo-1578493853264-d130498360a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        content: 'Manguito is evil!',
        name: 'Bobby Kim',
      },
      {
        id: 3,
        image:
          'https://images.unsplash.com/photo-1457014749444-4dfbbd2426d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        content: 'Pollito is cute!',
        name: 'Bobby Kim',
      },
      {
        id: 4,
        image:
          'https://images.unsplash.com/photo-1457014749444-4dfbbd2426d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        content: 'Manguito is cute!',
        name: 'Bobby Kim',
      },
      {
        id: 5,
        image:
          'https://images.unsplash.com/photo-1611430943765-c730609ebb03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
        content: 'Pollito is evil cute!',
        name: 'Bobby Kim',
      },
    ],
    current: null,
  };
  const [state, dispatch] = useReducer(postReducer, initialState);

  // Add Post
  const addPost = (post) => {
    post.id = uuidv4();
    dispatch({ type: ADD_POST, payload: post });
  };

  // Delete Post
  const deletePost = (id) => {
    dispatch({ type: DELETE_POST, payload: id });
  };

  // Set Current Post
  const setCurrent = (post) => {
    dispatch({ type: SET_CURRENT, payload: post });
  };

  // Clear Current Post
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Update Post
  const updatePost = (post) => {
    dispatch({ type: UPDATE_POST, payload: post });
  };
  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        current: state.current,
        addPost,
        deletePost,
        setCurrent,
        clearCurrent,
        updatePost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
