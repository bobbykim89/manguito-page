import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { PostContext } from '../../context/post/PostContext';

const UploadForm = () => {
  const postContext = useContext(PostContext);

  const { addPost } = postContext;

  const [toggleForm, setToggleForm] = useState(false);
  const handleToggler = (e) => {
    setToggleForm(!toggleForm);
  };

  const [post, setPost] = useState({
    image: '',
    content: '',
  });

  const { image, content } = post;

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addPost(post);
    setPost({
      image: '',
      content: '',
    });
  };
  return (
    <section className='mx-2 md:mx-8 my-12'>
      <div className={toggleForm ? 'block' : 'hidden'}>
        <form
          onSubmit={onSubmit}
          className='flex flex-col mb-6 border-dashed border-4 rounded-lg border-red-300 px-4 py-4 md:px-8 md:py-8'
        >
          <div className='mb-4'>
            <label
              htmlFor='image'
              className='text-indigo-500 text-lg font-semibold'
            >
              Please Select File:
            </label>
            <input
              type='text'
              name='image'
              value={image}
              onChange={onChange}
              className='block w-full p-2 border-2 border-red-300'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='content'
              className='text-indigo-500 text-lg font-semibold'
            >
              Please Write something
            </label>
            <textarea
              name='content'
              value={content}
              onChange={onChange}
              cols='30'
              rows='10'
              className='block w-full p-2 border-2 border-red-300'
              placeholder='Write something about Manguito'
            ></textarea>
          </div>
          <div>
            <input
              type='submit'
              value='Submit'
              className='px-4 py-2 bg-green-400 hover:bg-green-300 text-lg text-white font-semibold tracking-wider'
            />
          </div>
        </form>
      </div>
      <div
        className='flex text-4xl justify-center align-middle font-semibold text-green-400 hover:text-green-300'
        onClick={handleToggler}
      >
        {toggleForm ? (
          <FontAwesomeIcon icon={faTimesCircle} />
        ) : (
          <FontAwesomeIcon icon={faPlusCircle} />
        )}
      </div>
    </section>
  );
};

export default UploadForm;
