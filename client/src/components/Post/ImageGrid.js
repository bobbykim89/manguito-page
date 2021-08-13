import React from 'react';

const ImageGrid = ({ posts }) => {
  return (
    <div className='grid grid-cols-3 gap-2 mx-auto my-8'>
      {posts.map((post) => (
        <div key={post.id} className='overflow-hidden aspect-w-1 aspect-h-1'>
          <img
            src={post.image}
            alt='grid'
            className='object-cover object-center max-w-6/4'
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
