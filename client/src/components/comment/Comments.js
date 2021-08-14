import React, { useContext } from 'react';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { CommentContext } from '../../context/comment/CommentContext';

const Comments = ({ postId }) => {
  const commentContext = useContext(CommentContext);
  const { comments } = commentContext;
  return (
    <section>
      <CommentForm postId={postId} />
      <CommentItem comments={comments} />
    </section>
  );
};

export default Comments;
