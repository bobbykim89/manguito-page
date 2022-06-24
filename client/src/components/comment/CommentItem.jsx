import React, { useContext, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import Context
import { CommentContext } from '@/context/comment/CommentContext'
import { AuthContext } from '@/context/auth/AuthContext'
import { AlertContext } from '@/context/alert/AlertContext'

const CommentItem = ({ comment }) => {
  const commentContext = useContext(CommentContext)
  const authContext = useContext(AuthContext)
  const alertContext = useContext(AlertContext)

  const { deleteComment } = commentContext
  const { isAuthenticated, user } = authContext
  const { setAlert } = alertContext

  const handleDelete = () => {
    if (!isAuthenticated) {
      setAlert('Please login')
      return
    } else if (user._id === comment.author || user.admin) {
      if (window.confirm('Are you sure you want to delete this comment?')) {
        deleteComment(comment._id)
        setAlert('Successfully deleted a comment')
      }
      return
    } else {
      setAlert('Sorry, You are not authorized to do so')
      return
    }
  }

  return (
    <Fragment>
      <div className='bg-gray-100 rounded px-4 py-4 md:row-span-2 row-end-3 mb-3 shadow'>
        <p>{comment.text}</p>
        <small className='flex justify-end text-gray-500'>{comment.name}</small>
        <small className='flex justify-end text-gray-500 mb-4'>
          {new Date(comment.date).toDateString()}
        </small>
        <div
          className={
            'text-right' +
            ((user && user._id === comment.author) || (user && user.admin)
              ? ''
              : ' hidden')
          }
        >
          {/* <i
            className='material-icons text-gray-500 hover:text-gray-400 cursor-pointer'
            onClick={handleDelete}
          >
            delete
          </i> */}
          <FontAwesomeIcon
            icon='fa-solid fa-trash'
            className='text-gray-500 text-lg hover:text-gray-400 cursor-pointer'
            onClick={handleDelete}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default CommentItem
