import React from 'react';
import ImageGrid from './ImageGrid';
import UploadForm from './UploadForm';

const Posts = () => {
  return (
    <section className='bg-pink-100 py-20'>
      <div className='w-full md:w-1/2 mx-auto'>
        <h1 className='text-3xl text-center font-semibold tracking-wider text-green-600'>
          This is a beautiful day!
        </h1>
        <UploadForm />
        <ImageGrid />
      </div>
    </section>
  );
};

export default Posts;
