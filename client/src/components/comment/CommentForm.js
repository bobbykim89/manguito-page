import React, { useContext, useState } from 'react';
import { CommentContext } from '../../context/comment/CommentContext';
import { PostContext } from '../../context/post/PostContext';
import { AuthContext } from '../../context/auth/AuthContext';
import { AlertContext } from '../../context/alert/AlertContext';

const CommentForm = () => {
  const commentContext = useContext(CommentContext);
  const postContext = useContext(PostContext);
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { addComment } = commentContext;
  const { current, clearCurrent } = postContext;
  const { isAuthenticated, user } = authContext;
  const { setAlert } = alertContext;

  const [comment, setComment] = useState({
    commentId: '',
    text: '',
    name: user && user.name,
    author: user && user._id,
    id: current && current.id,
  });
  const { text } = comment;

  const onChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setAlert('Please login');
      clearCurrent();
      setComment({
        text: '',
      });
    } else {
      addComment(comment);
      setComment({
        text: '',
      });
    }
  };
  return (
    <div className='bg-gray-100 rounded px-4 py-4 md:row-span-2 row-end-3 mb-3'>
      <form onSubmit={onSubmit}>
        <textarea
          name='text'
          rows='5'
          value={text}
          onChange={onChange}
          className='block w-full border-gray-500 mb-2'
          placeholder=' Please write comment here'
        ></textarea>
        <div className='text-right'>
          <button
            type='submit'
            className='material-icons align-middle text-gray-500 hover:text-gray-400 mr-2 cursor-pointer'
          >
            done
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
