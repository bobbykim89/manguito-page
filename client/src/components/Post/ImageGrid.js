import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../../context/post/PostContext';
import Spinner from '../layout/Spinner';

const ImageGrid = ({ posts }) => {
  const postContext = useContext(PostContext);
  const { loading } = postContext;

  if (posts.length === 0 && !loading) {
    return (
      <h1 className='text-xl text-center font-semibold text-green-600'>
        No post yet! Time to add picture of Manguito!
      </h1>
    );
  }

  return (
    <Fragment>
      {posts.length !== 0 && !loading ? (
        <div className='grid grid-cols-3 gap-2 mx-auto my-8'>
          {posts.map((post) => (
            <div
              key={post._id}
              className='overflow-hidden aspect-w-1 aspect-h-1 shadow-lg'
            >
              <Link to={`/gallery/${post._id}`}>
                <img
                  src={post.thumb}
                  alt='grid'
                  className='object-center min-h-full min-w-full max-w-[150%] hover:opacity-50 transition ease-in duration-150'
                />
              </Link>
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
