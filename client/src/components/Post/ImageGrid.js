import React, { useContext } from 'react';
import { PostContext } from '../../context/post/PostContext';

const ImageGrid = ({ posts }) => {
  const postContext = useContext(PostContext);
  const { setCurrent } = postContext;

  if (posts !== null && posts.length === 0) {
    return (
      <h1 className='text-xl text-center font-semibold text-green-600'>
        No post yet! Time to add picture of Manguito!
      </h1>
    );
  }

  return (
    <div className='grid grid-cols-3 gap-2 mx-auto my-8'>
      {posts.map((post) => (
        <div key={post.id} className='overflow-hidden aspect-w-1 aspect-h-1'>
          <img
            src={post.image}
            alt='grid'
            onClick={() => setCurrent(post)}
            className='object-cover object-center max-w-6/4'
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
