import React, { useContext, Fragment, useEffect } from 'react';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { CommentContext } from '../../context/comment/CommentContext';
import { AuthContext } from '../../context/auth/AuthContext';

const Comments = ({ postId }) => {
  const commentContext = useContext(CommentContext);
  const authContext = useContext(AuthContext);

  const { comments, getComments } = commentContext;
  const { isAuthenticated } = authContext;

  useEffect(() => {
    getComments();
    // eslint-disable-next-line
  }, []);

  if (comments.length !== 0) {
    const filteredComments = comments.filter(
      (comment) => comment.post === postId
    );
    return (
      <Fragment>
        {isAuthenticated ? <CommentForm postId={postId} /> : ''}
        <p className='ml-2 font-semibold'>Comments:</p>
        {filteredComments.length ? (
          filteredComments.map((comment) => (
            <CommentItem key={comment._id} comment={comment} />
          ))
        ) : (
          <p className='text-center mb-4'>No comment yet!</p>
        )}
      </Fragment>
    );
  }

  return (
    <Fragment>
      {isAuthenticated ? <CommentForm postId={postId} /> : ''}
      <p className='ml-2 mb-4 font-semibold'>Comments:</p>

      <p className='text-center mb-4'>No comment yet!</p>
    </Fragment>
  );
};

export default Comments;
