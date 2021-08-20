import React, { useContext, Fragment, useEffect } from 'react';
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
  const { comments, getComments } = commentContext;
  const { isAuthenticated } = authContext;

  useEffect(() => {
    getComments();
    // eslint-disable-next-line
  }, []);

  if (comments.length !== 0) {
    const filteredComments = comments.filter(
      (comment) => comment.post === current._id
    );
    return (
      <Fragment>
        {isAuthenticated ? <CommentForm /> : ''}
        <p className='ml-2 font-semibold'>Comments:</p>
        {filteredComments.length ? (
          filteredComments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              current={current}
            />
          ))
        ) : (
          <p className='text-center mb-4'>No comment yet!</p>
        )}
      </Fragment>
    );
  }

  return (
    <Fragment>
      {isAuthenticated ? <CommentForm /> : ''}
      <p className='ml-2 mb-4 font-semibold'>Comments:</p>

      <p className='text-center mb-4'>No comment yet!</p>
    </Fragment>
  );
};

export default Comments;
