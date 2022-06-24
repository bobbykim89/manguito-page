import React, { useContext, useState, Fragment, useEffect } from 'react'
import Moment from 'react-moment'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import Context
import { PostContext } from '@/context/post/PostContext'
import { AuthContext } from '@/context/auth/AuthContext'
import { AlertContext } from '@/context/alert/AlertContext'

// Import Components
import Comments from '@/components/comment/Comments'
import ToTop from '@/components/layout/ToTop'

const Post = () => {
  const postContext = useContext(PostContext)
  const authContext = useContext(AuthContext)
  const alertContext = useContext(AlertContext)

  const { postId } = useParams()
  const history = useNavigate()

  const {
    getPosts,
    getPost,
    posts,
    currentPost,
    deletePost,
    updatePost,
    clearCurrent,
  } = postContext
  const { isAuthenticated, user } = authContext
  const { setAlert } = alertContext

  const [toggleEdit, setToggleEdit] = useState(false)
  const [post, setPost] = useState({
    content: '',
  })
  const [prevNext, setPrevNext] = useState({
    next: '',
    prev: '',
  })

  useEffect(() => {
    getPost(postId)
    getPosts()
    if (authContext.token !== null) {
      authContext.loadUser()
    }
    if (posts.length !== 0) {
      getAdjacentPosts(postId)
      postValidator()
    }
    // eslint-disable-next-line
  }, [posts.length, postId])

  const postValidator = async () => {
    // Redirect to notfound page when matching ID doesn't exist in list of posts
    const validator = await posts.find((post) => post._id === postId)
    if (validator) {
      return
    } else {
      history('/notfound')
    }
  }

  const getAdjacentPosts = async (identifier) => {
    // Get ID of previous/next posts for selected post
    try {
      const postIndex = await posts.findIndex((item) => item._id === identifier)
      if (postIndex === 0) {
        setPrevNext({
          next: posts[postIndex + 1]._id,
          prev: posts[posts.length - 1]._id,
        })
      } else if (postIndex === posts.length - 1) {
        setPrevNext({
          next: posts[0]._id,
          prev: posts[postIndex - 1]._id,
        })
      } else {
        setPrevNext({
          next: posts[postIndex + 1]._id,
          prev: posts[postIndex - 1]._id,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  // onClick Controller function for prev/next navigator
  const onPrev = (e) => {
    e.preventDefault()
    history(`/gallery/${prevNext.prev}`)
    setPost({
      content: '',
    })
    clearCurrent()
  }

  const onNext = (e) => {
    e.preventDefault()
    history(`/gallery/${prevNext.next}`)
    setPost({
      content: '',
    })
    clearCurrent()
  }

  // Handles edit post feature
  const editHandler = () => {
    postGrabber()
    setToggleEdit(!toggleEdit)
  }

  const postGrabber = async () => {
    if (currentPost) {
      await setPost({ content: currentPost.content })
    } else {
      setPost({
        content: '',
      })
    }
  }

  const { content } = post

  const onChange = (e) => {
    const { name, value } = e.target
    setPost({ ...post, [name]: value })
  }

  const copyLink = (e) => {
    const currentUrl = window.location.href
    navigator.clipboard.writeText(currentUrl)
    setAlert('Copied to clipboard!')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!isAuthenticated) {
      setAlert('Please login')
      return
    } else if (!user.admin) {
      setAlert('Sorry You are not authorized to do so')
      return
    } else {
      if (window.confirm('Are you sure you want to update this post?')) {
        currentPost.content = post.content
        updatePost(currentPost)
        setAlert('Successfully updated!')
      }
      return
    }
  }

  // Handle delete post functionality
  const onDelete = () => {
    if (!isAuthenticated) {
      setAlert('Please login')
      return
    } else if (!user.admin) {
      setAlert('Sorry You are not authorized to do so')
      return
    } else {
      if (
        window.confirm(
          'This will permanently delete this post. Please confirm to proceed'
        )
      ) {
        deletePost(currentPost._id)
        history(-1)
        setAlert('Successfully deleted a post')
      }
      return
    }
  }

  // Handle actions on close and redirects to gallery page
  const onClose = (e) => {
    e.preventDefault()
    history('/gallery')
    setPost({
      content: '',
    })
    clearCurrent()
  }

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      onClose(e)
    }
  }

  return (
    <Fragment>
      <Helmet>
        <title>Post: Manguito page</title>
        <meta name='description' content={currentPost && currentPost.content} />
      </Helmet>
      <section
        className='backdrop bg-gray-900 bg-opacity-80 lg:py-20 min-h-80v'
        onClick={handleBackgroundClick}
      >
        {currentPost && (
          <div className='bg-white pb-4 shadow-xl w-full mx-auto md:w-2/3'>
            <div className='relative text-right pb-3 sticky pt-3 bg-white top-0 z-10'>
              {/* <i
                className='material-icons align-middle text-gray-500 hover:text-gray-400 mr-2 cursor-pointer'
                onClick={onClose}
              >
                close
              </i> */}
              <FontAwesomeIcon
                icon='fa-solid fa-xmark'
                className='align-middle text-xl text-gray-500 hover:text-gray-400 mr-4 cursor-pointer'
                onClick={onClose}
              />
            </div>
            <div className='px-4 grid grid-flow-row lg:grid-cols-2 gap-4'>
              <div className='w-full'>
                <div className='relative'>
                  <img
                    src={currentPost.url}
                    alt='pollito'
                    className='rounded shadow relative'
                  />
                  <button
                    className='absolute top-1/2 -translate-y-1/2 left-0 ml-1'
                    onClick={onPrev}
                  >
                    <FontAwesomeIcon
                      icon='fa-solid fa-chevron-left'
                      className='text-2xl text-white hover:text-pink-500 text-shadow-xl ml-3'
                    />
                  </button>
                  <button
                    className='absolute top-1/2 -translate-y-1/2 right-0 mr-1'
                    onClick={onNext}
                  >
                    <FontAwesomeIcon
                      icon='fa-solid fa-chevron-right'
                      className='material-icons text-2xl text-white hover:text-pink-500 text-shadow-xl mr-3'
                    />
                  </button>
                  <button
                    onClick={copyLink}
                    className='absolute top-0 right-0 mr-3 mt-3'
                  >
                    {/* <i className='material-icons text-4xl text-white hover:text-pink-500 text-shadow-xl'>
                      share
                    </i> */}
                    <FontAwesomeIcon
                      icon='fa-solid fa-share-from-square'
                      className='material-icons text-2xl text-white hover:text-pink-500 text-shadow-xl'
                    />
                  </button>
                </div>
              </div>
              <div>
                <div className='bg-gray-100 rounded px-4 py-4 md:row-span-2 row-end-3 mb-3 shadow'>
                  <div className={toggleEdit ? 'hidden' : 'block'}>
                    <p>{currentPost.content}</p>
                    <small className='flex justify-end text-gray-500'>
                      {currentPost.name}{' '}
                    </small>
                    <small className='flex justify-end text-gray-500 mb-4'>
                      <Moment format='MMMM Do YYYY h:mm:ss a'>
                        {currentPost.date}
                      </Moment>
                    </small>
                  </div>
                  <div className={toggleEdit ? 'block' : 'hidden'}>
                    <form onSubmit={onSubmit}>
                      <textarea
                        name='content'
                        value={content}
                        onChange={onChange}
                        className='block w-full bg-transparent h-28 border-gray-400 mb-2 p-2 outline-none border-b-2'
                      ></textarea>
                      <div className='text-right'>
                        <button type='submit' value='Done' className='mr-1'>
                          <FontAwesomeIcon
                            icon='fa-solid fa-check'
                            className='align-middle text-gray-500 text-xl hover:text-gray-400 mr-2 cursor-pointer'
                            onClick={() => setToggleEdit(!toggleEdit)}
                          />
                        </button>
                        <FontAwesomeIcon
                          icon='fa-solid fa-xmark'
                          className='material-icons align-middle text-xl text-gray-500 hover:text-gray-400 mr-2 cursor-pointer'
                          onClick={editHandler}
                        />
                      </div>
                    </form>
                  </div>
                  <div className={user && user.admin ? ' block' : ' hidden'}>
                    <div className={toggleEdit ? 'hidden' : 'block text-right'}>
                      <FontAwesomeIcon
                        icon='fa-solid fa-pen'
                        className='text-gray-500 text-lg hover:text-gray-400 mr-3 cursor-pointer'
                        onClick={editHandler}
                      />
                      <FontAwesomeIcon
                        icon='fa-solid fa-trash'
                        className='text-gray-500 text-lg hover:text-gray-400 cursor-pointer'
                        onClick={onDelete}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <Comments postId={currentPost._id} />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <ToTop />
    </Fragment>
  )
}

export default Post
