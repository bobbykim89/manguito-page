import React, { useContext, useState, Fragment, useEffect } from 'react';
import Moment from 'react-moment';
import { Helmet } from 'react-helmet-async';
import { useHistory, useParams } from 'react-router';
import { PostContext } from '../../context/post/PostContext';
import { AuthContext } from '../../context/auth/AuthContext';
import { AlertContext } from '../../context/alert/AlertContext';
import Comments from '../comment/Comments';

const PostItem = () => {
  const postContext = useContext(PostContext);
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { postId } = useParams();
  const history = useHistory();

  const { getPost, currentPost, deletePost, updatePost, clearCurrent } =
    postContext;
  const { isAuthenticated, user } = authContext;
  const { setAlert } = alertContext;

  const [toggleEdit, setToggleEdit] = useState(false);
  const [post, setPost] = useState({
    name: '',
    content: '',
    _id: '',
    url: '',
    date: '',
  });

  useEffect(() => {
    getPost(postId);
    postGrabber();
    if (authContext.token !== null) {
      authContext.loadUser();
    }

    // eslint-disable-next-line
  }, []);

  const editHandler = () => {
    postGrabber();
    setToggleEdit(!toggleEdit);
  };

  const postGrabber = async () => {
    if (currentPost) {
      await setPost(currentPost.content);
    } else {
      setPost({});
    }
  };

  const { content } = post;
  console.log('post', post);

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onClose = (e) => {
    e.preventDefault();
    history.goBack();
    setPost({
      name: '',
      content: '',
      _id: '',
      url: '',
      date: '',
    });
    clearCurrent();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setAlert('Please login');
      return;
    } else if (!user.admin) {
      setAlert('Sorry You are not authorized to do so');
      return;
    } else {
      updatePost(post);
      setAlert('Successfully updated!');
    }
  };

  const onDelete = () => {
    if (!isAuthenticated) {
      setAlert('Please login');
      return;
    } else if (!user.admin) {
      setAlert('Sorry You are not authorized to do so');
      return;
    } else {
      deletePost(currentPost._id);
      history.goBack();
      setAlert('Successfully deleted a post');
    }
  };
  return (
    <Fragment>
      <Helmet>
        <title>Post: Manguito page</title>
        <meta name='description' content={currentPost && currentPost.content} />
      </Helmet>
      <section className='bg-gray-800 bg-opacity-80 lg:py-20 min-h-80v'>
        {currentPost && (
          <div className='bg-white pb-4 shadow-xl w-full mx-auto md:w-2/3'>
            <div className='text-right pb-3 sticky pt-3 bg-white top-0'>
              <i
                className='material-icons align-middle text-gray-500 hover:text-gray-400 mr-2 cursor-pointer'
                onClick={onClose}
              >
                close
              </i>
            </div>
            <div className='px-4 grid grid-flow-row lg:grid-cols-2 gap-4'>
              <div className='w-full'>
                <img
                  src={currentPost.url}
                  alt='pollito'
                  className='rounded shadow'
                />
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
                        className='block w-full bg-transparent h-28 border-gray-400 mb-2 outline-none border-b-2'
                      ></textarea>
                      <div className='text-right'>
                        <button type='submit' value='Done'>
                          <i
                            className='material-icons align-middle text-gray-500 hover:text-gray-400 mr-2 cursor-pointer'
                            onClick={editHandler}
                          >
                            done
                          </i>
                        </button>
                        <i
                          className='material-icons align-middle text-gray-500 hover:text-gray-400 mr-2 cursor-pointer'
                          onClick={editHandler}
                        >
                          close
                        </i>
                      </div>
                    </form>
                  </div>
                  <div className={user && user.admin ? ' block' : ' hidden'}>
                    <div className={toggleEdit ? '' : 'block text-right'}>
                      <i
                        className='material-icons text-gray-500 hover:text-gray-400 mr-2 cursor-pointer'
                        onClick={editHandler}
                      >
                        {toggleEdit ? '' : 'edit'}
                      </i>
                      <i
                        className='material-icons text-gray-500 hover:text-gray-400 cursor-pointer'
                        onClick={onDelete}
                      >
                        {toggleEdit ? '' : 'delete'}
                      </i>
                    </div>
                  </div>
                </div>
                <div>
                  <Comments currentPost={currentPost} />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default PostItem;
