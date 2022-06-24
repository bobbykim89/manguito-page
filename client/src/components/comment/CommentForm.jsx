import React, { useContext, useState } from 'react'

// Import Context
import { CommentContext } from '@/context/comment/CommentContext'
import { AlertContext } from '@/context/alert/AlertContext'
import { AuthContext } from '@/context/auth/AuthContext'

const CommentForm = ({ postId }) => {
  const commentContext = useContext(CommentContext)
  const authContext = useContext(AuthContext)
  const alertContext = useContext(AlertContext)

  const { addComment } = commentContext
  const { isAuthenticated, user } = authContext
  const { setAlert } = alertContext

  const [comment, setComment] = useState({
    text: '',
    name: user && user.name,
    author: user && user._id,
    post: postId,
  })
  const { text } = comment

  const onChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!isAuthenticated) {
      setAlert('Please login')
      return
    } else {
      addComment(comment)
      setComment({
        text: '',
        name: user && user.name,
        author: user && user._id,
        post: postId,
      })
    }
  }
  return (
    <div className='bg-gray-100 rounded px-4 py-4 md:row-span-2 row-end-3 mb-3 shadow'>
      <form onSubmit={onSubmit}>
        <textarea
          name='text'
          value={text}
          onChange={onChange}
          className='block w-full mb-2 bg-transparent h-28 border-gray-400 outline-none border-b-2 p-2'
          placeholder=' Please write comment here'
        />
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
  )
}

export default CommentForm
