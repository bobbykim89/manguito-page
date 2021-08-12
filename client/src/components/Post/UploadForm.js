import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const UploadForm = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const handleToggler = (e) => {
    setToggleForm(!toggleForm);
  };
  return (
    <section className='mx-2 md:mx-8 my-12'>
      <div className={toggleForm ? 'block' : 'hidden'}>
        <form className='flex flex-col mb-6 border-dashed border-4 rounded-lg border-red-300 px-4 py-4 md:px-8 md:py-8'>
          <div className='mb-4'>
            <label
              htmlFor='file'
              className='text-indigo-500 text-lg font-semibold'
            >
              Please Select File:
            </label>
            <input
              type='text'
              name='file'
              className='block w-full p-2 border-2 border-red-300'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='post'
              className='text-indigo-500 text-lg font-semibold'
            >
              Please Write something
            </label>
            <textarea
              name='post'
              id=''
              cols='30'
              rows='10'
              className='block w-full p-2 border-2 border-red-300'
              placeholder='Write something about Manguito'
            ></textarea>
          </div>
          <input
            type='submit'
            value='Submit'
            className='px-4 py-2 bg-green-400 hover:bg-green-300 text-lg text-white font-semibold tracking-wider'
          />
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
