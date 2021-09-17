import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import postReducer from './postReducer';
import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  CLEAR_CURRENT,
  POST_ERROR,
  GET_POST,
} from '../types';

export const PostContext = createContext();

const PostState = (props) => {
  const initialState = {
    posts: [],
    currentPost: null,
    error: null,
  };
  const [state, dispatch] = useReducer(postReducer, initialState);

  // Get Posts
  const getPosts = async () => {
    try {
      const res = await axios.get('/api/posts');
      dispatch({ type: GET_POSTS, payload: res.data });
    } catch (err) {
      dispatch({ type: POST_ERROR, payload: err.response.msg });
    }
  };

  // Get Post - Get current post data
  const getPost = async (id) => {
    try {
      const res = await axios.get(`/api/posts/${id}`);
      dispatch({ type: GET_POST, payload: res.data });
    } catch (err) {
      dispatch({ type: POST_ERROR, payload: err.response.msg });
    }
  };

  // Add Post
  const addPost = async (post) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/posts', post, config);
      dispatch({ type: ADD_POST, payload: res.data });
    } catch (err) {
      dispatch({ type: POST_ERROR, payload: err.response.msg });
    }
  };

  // Delete Post
  const deletePost = async (id) => {
    try {
      await axios.delete(`/api/posts/${id}`);
      dispatch({ type: DELETE_POST, payload: id });
    } catch (err) {
      dispatch({ type: POST_ERROR, payload: err.response.msg });
    }
  };

  //Update Post
  const updatePost = async (post) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.put(`/api/posts/${post._id}`, post, config);
      dispatch({ type: UPDATE_POST, payload: res.data });
    } catch (err) {
      dispatch({ type: POST_ERROR, payload: err.response.msg });
    }
  };

  // Clear Current Post
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        currentPost: state.currentPost,
        current: state.current,
        error: state.error,
        getPosts,
        getPost,
        addPost,
        deletePost,
        clearCurrent,
        updatePost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
