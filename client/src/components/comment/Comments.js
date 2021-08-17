import React, { useContext, Fragment } from 'react';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { CommentContext } from '../../context/comment/CommentContext';
import { PostContext } from '../../context/post/PostContext';
import { AuthContext } from '../../context/auth/AuthContext';

const Comments = () => {
  const postContext = useContext(PostContext);
  const commentContext = useContext(CommentContext);
  const authContext = useContext(AuthContext);

  const { current } = postContext;
  const { comments } = commentContext;
  const { isAuthenticated } = authContext;

  const filteredComments = comments.filter(
    (comment) => comment.id === current.id
  );

  if (filteredComments !== null && filteredComments.length === 0) {
    return (
      <Fragment>
        {isAuthenticated ? <CommentForm /> : ''}
        <p className='ml-2 mb-4'>Comments:</p>
        <p className='text-center mb-4'>No comment yet!</p>
      </Fragment>
    );
  }

  return (
    <Fragment>
      {isAuthenticated ? <CommentForm /> : ''}
      <p className='ml-2'>Comments:</p>
      {filteredComments.map((comment) => (
        <CommentItem key={comment.commentId} comment={comment} />
      ))}
    </Fragment>
  );
};

export default Comments;
