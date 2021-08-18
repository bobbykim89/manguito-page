import React, { Fragment, useContext, useEffect } from 'react';
import { PostContext } from '../../context/post/PostContext';
import Spinner from '../layout/Spinner';

const ImageGrid = ({ posts }) => {
  const postContext = useContext(PostContext);
  const { setCurrent, getPosts, loading } = postContext;

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  if (posts !== null && posts.length === 0 && !loading) {
    return (
      <h1 className='text-xl text-center font-semibold text-green-600'>
        No post yet! Time to add picture of Manguito!
      </h1>
    );
  }

  return (
    <Fragment>
      {posts !== null && !loading ? (
        <div className='grid grid-cols-3 gap-2 mx-auto my-8'>
          {posts.map((post) => (
            <div
              key={post._id}
              className='overflow-hidden aspect-w-1 aspect-h-1 shadow-lg'
            >
              <img
                src={post.image}
                alt='grid'
                onClick={() => setCurrent(post)}
                className='object-cover object-center max-w-6/4 hover:opacity-50 transition ease-in duration-150'
              />
            </div>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default ImageGrid;
