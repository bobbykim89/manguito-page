import React, { createContext } from 'react';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { CommentContext } from '../../context/comment/CommentContext';

const Comments = ({ postId }) => {
  const commentContext = createContext(CommentContext);
  return (
    <section>
      <CommentForm />
      <CommentItem />
    </section>
  );
};

export default Comments;
