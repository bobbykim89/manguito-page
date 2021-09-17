import React, { useContext, Fragment } from 'react';
import Moment from 'react-moment';
import { CommentContext } from '../../context/comment/CommentContext';
import { AuthContext } from '../../context/auth/AuthContext';
import { AlertContext } from '../../context/alert/AlertContext';

const CommentItem = ({ comment }) => {
  const commentContext = useContext(CommentContext);
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { deleteComment } = commentContext;
  const { isAuthenticated, user } = authContext;
  const { setAlert } = alertContext;

  const handleDelete = () => {
    if (!isAuthenticated) {
      setAlert('Please login');
      return;
    } else if (user._id === comment.author || user.admin) {
      deleteComment(comment._id);
      setAlert('Successfully deleted a comment');
    } else {
      setAlert('Sorry, You are not authorized to do so');
      return;
    }
  };

  return (
    <Fragment>
      <div className='bg-gray-100 rounded px-4 py-4 md:row-span-2 row-end-3 mb-3 shadow'>
        <p>{comment.text}</p>
        <small className='flex justify-end text-gray-500'>{comment.name}</small>
        <small className='flex justify-end text-gray-500 mb-4'>
          <Moment format='MMMM Do YYYY h:mm:ss a'>{comment.date}</Moment>
        </small>
        <div
          className={
            'text-right' +
            ((user && user._id === comment.author) || (user && user.admin)
              ? ''
              : ' hidden')
          }
        >
          <i
            className='material-icons text-gray-500 hover:text-gray-400 cursor-pointer'
            onClick={handleDelete}
          >
            delete
          </i>
        </div>
      </div>
    </Fragment>
  );
};

export default CommentItem;
