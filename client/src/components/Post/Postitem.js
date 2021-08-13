import React, { useContext, useState, useEffect } from 'react';
import Moment from 'react-moment';
import { PostContext } from '../../context/post/PostContext';

const Postitem = ({ post }) => {
  const postContext = useContext(PostContext);
  const { deletePost, setCurrent, clearCurrent, updatePost } = postContext;

  //   useEffect(() => {
  //     if (current !== null) {
  //       setContent(current);
  //     } else {
  //       setContent({
  //         content: '',
  //       });
  //     }
  //   }, [postContext, current]);

  const [toggleEdit, setToggleEdit] = useState(false);

  const handleToggler = () => {
    setToggleEdit(!toggleEdit);
  };

  const editHandler = () => {
    setCurrent(post);
    handleToggler();
  };

  const { id, image, content } = post;

  const onChange = (e) => {};

  const onSubmit = (e) => {
    e.preventDefault();
    updatePost(content);
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
      <div className='bg-gray-100 rounded px-4 py-4 md:row-span-2 row-end-3'>
        <div className={toggleEdit ? 'hidden' : 'block'}>
          <p>{content}</p>
          <small className='flex justify-end text-gray-500 mb-4'>
            <Moment format='MMMM Do YYYY h:mm:ss a'>{Date.now()}</Moment>
          </small>
        </div>
        <div className={toggleEdit ? 'block' : 'hidden'}>
          <form onSubmit={onSubmit}>
            <textarea
              name='content'
              value={content}
              cols='40'
              rows='3'
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
    </section>
  );
};

export default Postitem;
