import React, { createContext } from 'react';
import { CommentContext } from '../../context/comment/CommentContext';

const CommentForm = () => {
  const commentContext = createContext(CommentContext);
  const { addComment } = commentContext;
  return (
    <div className='bg-gray-100 rounded px-4 py-4 md:row-span-2 row-end-3 mb-3'>
      <form>
        <textarea
          name='text'
          rows='5'
          className='block w-full border-gray-500 mb-2'
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
