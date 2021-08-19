import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { PostContext } from '../../context/post/PostContext';
import { AuthContext } from '../../context/auth/AuthContext';
import { AlertContext } from '../../context/alert/AlertContext';

const UploadForm = () => {
  const postContext = useContext(PostContext);
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { addPost } = postContext;
  const { isAuthenticated, user } = authContext;
  const { setAlert } = alertContext;

  const [toggleForm, setToggleForm] = useState(false);
  const handleToggler = (e) => {
    setToggleForm(!toggleForm);
  };

  const [filename, setFilename] = useState('Please Select File:');

  const [post, setPost] = useState({
    image: null,
    content: '',
    name: '',
    author: '',
  });

  const { content } = post;

  const onChange = (e) => {
    if (e.target.type === 'file') {
      setPost({ ...post, image: e.target.files[0] });
      setFilename(e.target.files[0].name);
    } else {
      setPost({
        ...post,
        content: e.target.value,
        name: user && user.name,
        author: user && user._id,
      });
    }
  };

  let postForm = new FormData();
  postForm.append('image', post.image);
  postForm.append('content', content);
  postForm.append('name', post.name);
  postForm.append('author', post.author);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!user.admin) {
      setAlert("You don't have admin privilege");
      handleToggler();
      setPost({
        image: null,
        content: '',
      });
    } else {
      addPost(postForm);
      handleToggler();
      setPost({
        image: null,
        content: '',
      });
      setFilename('Please Select File:');
    }
  };
  return (
    <section className='mx-2 md:mx-8 my-12'>
      <div className={toggleForm ? 'block' : 'hidden'}>
        <form
          onSubmit={onSubmit}
          className='flex flex-col mb-6 border-dashed border-4 rounded-lg border-red-300 px-4 py-4 md:px-8 md:py-8'
          encType='multipart/form-data'
        >
          <div className='mb-4'>
            <label
              htmlFor='image'
              className='block w-full pl-2 border-2 border-red-300'
            >
              <div className='grid grid-cols-4'>
                <span className='col-span-3 py-2 text-green-600 text-lg font-semibold'>
                  {filename}
                </span>
                <span className='text-center text-white bg-green-400 hover:bg-green-300 text-lg font-semibold py-2 tracking-wider shadow-md'>
                  Browse
                </span>
              </div>
              <input
                type='file'
                id='image'
                name='image'
                onChange={onChange}
                accept='image/*'
                className='hidden'
                required
              />
            </label>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='content'
              className='text-green-600 text-lg font-semibold'
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
              className='block w-full px-4 py-2 bg-green-400 hover:bg-green-300 text-lg text-white font-semibold tracking-wider'
            />
          </div>
        </form>
      </div>
      <div
        className={
          'flex text-4xl justify-center align-middle font-semibold text-green-400 hover:text-green-300' +
          (isAuthenticated ? ' block' : ' hidden')
        }
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
