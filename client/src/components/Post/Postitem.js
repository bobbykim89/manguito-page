import React, { useContext, useState } from 'react';
import Moment from 'react-moment';
import { PostContext } from '../../context/post/PostContext';
import { AuthContext } from '../../context/auth/AuthContext';
import { AlertContext } from '../../context/alert/AlertContext';
import Comments from '../comment/Comments';

const Postitem = ({ post, setPost }) => {
  const postContext = useContext(PostContext);
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { deletePost, clearCurrent, updatePost, setCurrent } = postContext;
  const { isAuthenticated, user } = authContext;
  const { setAlert } = alertContext;

  const [toggleEdit, setToggleEdit] = useState(false);

  const handleToggler = () => {
    setToggleEdit(!toggleEdit);
  };

  const editHandler = () => {
    handleToggler();
  };

  const { _id, image, content, name, date } = post;

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setAlert('Please login');
      clearCurrent();
    } else if (!user.admin) {
      setAlert('Sorry You are not authorized to do so');
      clearCurrent();
    } else {
      updatePost(post);
      clearCurrent();
      setCurrent(post);
    }
  };

  const onDelete = () => {
    if (!isAuthenticated) {
      setAlert('Please login');
      clearCurrent();
    } else if (!user.admin) {
      setAlert('Sorry You are not authorized to do so');
      clearCurrent();
    } else {
      deletePost(_id);
      clearCurrent();
      setAlert('Successfully deleted a post');
    }
  };
  return (
    <section className='bg-white  pb-4 shadow-xl'>
      <div className='text-right pb-3 sticky pt-3 bg-white top-0'>
        <i
          className='material-icons align-middle text-gray-500 hover:text-gray-400 mr-2 cursor-pointer'
          onClick={() => clearCurrent()}
        >
          close
        </i>
      </div>
      <div className='px-4 grid grid-flow-row lg:grid-cols-2 gap-4'>
        <div className='w-full shadow'>
          <img src={image} alt='pollito' className='rounded' />
        </div>
        <div>
          <div className='bg-gray-100 rounded px-4 py-4 md:row-span-2 row-end-3 mb-3 shadow'>
            <div className={toggleEdit ? 'hidden' : 'block'}>
              <p>{content}</p>
              <small className='flex justify-end text-gray-500'>{name} </small>
              <small className='flex justify-end text-gray-500 mb-4'>
                <Moment format='MMMM Do YYYY h:mm:ss a'>{date}</Moment>
              </small>
            </div>
            <div className={toggleEdit ? 'block' : 'hidden'}>
              <form onSubmit={onSubmit}>
                <textarea
                  name='content'
                  value={content}
                  onChange={onChange}
                  rows='5'
                  className='block w-full border-gray-500 mb-2'
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
            <Comments />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Postitem;
