import React from 'react';
import Moment from 'react-moment';

const CommentItem = () => {
  return (
    <div className='bg-gray-100 rounded px-4 py-4 md:row-span-2 row-end-3 mb-3'>
      <p>comment</p>
      <small className='flex justify-end text-gray-500'>name </small>
      <small className='flex justify-end text-gray-500 mb-4'>
        <Moment format='MMMM Do YYYY h:mm:ss a'>{Date.now()}</Moment>
      </small>
      <div className='text-right'>
        <i
          className='material-icons text-gray-500 hover:text-gray-400 cursor-pointer'
          //   onClick={}
        >
          delete
        </i>
      </div>
    </div>
  );
};

export default CommentItem;
