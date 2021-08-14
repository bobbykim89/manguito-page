import React, { useContext, useState } from 'react';
import Moment from 'react-moment';
import { PostContext } from '../../context/post/PostContext';
import Comments from '../comment/Comments';

const Postitem = ({ post, setPost }) => {
  const postContext = useContext(PostContext);
  const { deletePost, clearCurrent, updatePost, setCurrent } = postContext;

  const [toggleEdit, setToggleEdit] = useState(false);

  const handleToggler = () => {
    setToggleEdit(!toggleEdit);
  };

  const editHandler = () => {
    handleToggler();
  };

  const { id, image, content, name } = post;

  // Need to configure onChange Function to enable editing
  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updatePost(post);
    clearCurrent();
    setCurrent(post);
  };

  const onDelete = () => {
    deletePost(id);
    clearCurrent();
  };
  return (
    <section className='bg-white px-8 py-8 grid grid-flow-col md:grid-cols-2 gap-4'>
      <div className='w-full md:row-span-3'>
        <img src={image} alt='pollito' className='rounded' />
      </div>
      <div>
        <div className='bg-gray-100 rounded px-4 py-4 md:row-span-2 row-end-3 mb-3'>
          <div className={toggleEdit ? 'hidden' : 'block'}>
            <p>{content}</p>
            <small className='flex justify-end text-gray-500'>{name} </small>
            <small className='flex justify-end text-gray-500 mb-4'>
              <Moment format='MMMM Do YYYY h:mm:ss a'>{Date.now()}</Moment>
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
        <div className=''>
          <Comments postId={id} />
        </div>
      </div>
    </section>
  );
};

export default Postitem;
