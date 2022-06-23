import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='flex items-stretch min-h-85v font-inter'>
      <div className='flex flex-col text-center inline-block self-center mx-auto'>
        <img
          src='/logo512.png'
          alt='logo'
          className='w-48 lg:w-60 inline-block mx-auto mb-8'
        />
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
