import {
  faExclamationTriangle,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='flex items-stretch min-h-85v font-inter'>
      <div className='flex flex-wrap flex-col inline-block self-center mx-auto'>
        <h1 className='inline-block align-middle text-pink-500 mx-auto text-center text-8xl mb-8 pb-4 font-bold'>
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </h1>
        <h1 className='text-xl lg:text-6xl font-bold tracking-wider mb-8'>
          Sorry, this page doesn't exist :(
        </h1>

        <div className='px-6 py-4 text-xl border-2 rounded border-pink-500 text-pink-500 tracking-wider mx-auto hover:bg-pink-500 hover:text-white'>
          <Link to='/'>Go Back</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
