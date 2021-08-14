import React, { useContext, useState } from 'react';
import { CommentContext } from '../../context/comment/CommentContext';
import { PostContext } from '../../context/post/PostContext';

const CommentForm = () => {
  const commentContext = useContext(CommentContext);
  const postContext = useContext(PostContext);
  const { addComment } = commentContext;
  const { current } = postContext;

  const [comment, setComment] = useState({
    commentId: '',
    text: '',
    name: 'Bobby Kim',
    id: '',
  });
  const { text } = comment;

  const onChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    comment.id = current.id;
    addComment(comment);
    setComment({
      text: '',
    });
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
          placeholder='Please write comment here'
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
