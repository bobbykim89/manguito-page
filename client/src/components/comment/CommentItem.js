import React, { useContext } from 'react';
import Moment from 'react-moment';
import { CommentContext } from '../../context/comment/CommentContext';
import { PostContext } from '../../context/post/PostContext';

const CommentItem = ({ comments }) => {
  const postContext = useContext(PostContext);
  const commentContext = useContext(CommentContext);
  const { current } = postContext;
  const { deleteComment } = commentContext;
  const filteredComments = comments.filter(
    (comment) => comment.id === current.id
  );
  return (
    <div>
      {filteredComments.map((comment) => (
        <div
          key={comment.commentId}
          className='bg-gray-100 rounded px-4 py-4 md:row-span-2 row-end-3 mb-3'
        >
          <p>{comment.text}</p>
          <small className='flex justify-end text-gray-500'>
            {comment.name}
          </small>
          <small className='flex justify-end text-gray-500 mb-4'>
            <Moment format='MMMM Do YYYY h:mm:ss a'>{Date.now()}</Moment>
          </small>
          <div className='text-right'>
            <i
              className='material-icons text-gray-500 hover:text-gray-400 cursor-pointer'
              onClick={() => deleteComment(comment.commentId)}
            >
              delete
            </i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentItem;
