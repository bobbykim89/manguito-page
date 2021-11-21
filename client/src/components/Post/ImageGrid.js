import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../../context/post/PostContext';
import Spinner from '../layout/Spinner';

const ImageGrid = ({ posts }) => {
  const postContext = useContext(PostContext);
  const { loading } = postContext;

  // Currently working on load more button
  let postsArray = [];
  const [loadMore, setLoadMore] = useState(30);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [loadCounter, setLoadCounter] = useState(1);
  const [showLoader, setShowLoader] = useState(true);
  const postsPerPage = 30;

  // Set List of posts to be displayed (determined by postsPerPage variable)
  const postsController = async (start, end) => {
    const slicedPosts = await posts.slice(start, end);
    postsArray = [...postsArray, ...slicedPosts];
    setDisplayedPosts(postsArray);
  };

  useEffect(() => {
    postsController(0, postsPerPage);

    // eslint-disable-next-line
  }, [posts.length]);

  // Increase Number of posts to displayed by postsPerPage, disables the load more button when maximum posts displayed
  const handleLoadMore = () => {
    postsController(0, loadMore + postsPerPage);
    setLoadMore(loadMore + postsPerPage);
    setLoadCounter(loadCounter + 1);
    loadStopper();
  };

  // Set when to disable load more button
  const loadStopper = () => {
    const lastPage = Math.ceil(posts.length / postsPerPage);
    if (loadCounter <= lastPage) {
      setShowLoader(false);
    } else {
      setShowLoader(true);
    }
  };

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
          {displayedPosts.map((post) => (
            <div
              key={post._id}
              className='overflow-hidden aspect-w-1 aspect-h-1 shadow-lg'
            >
              <Link to={`/gallery/${post._id}`}>
                <img
                  src={post.thumb}
                  alt='grid'
                  className='object-cover object-center min-h-full lg:min-w-full hover:opacity-50 transition ease-in duration-150'
                />
              </Link>
            </div>
          ))}
          <div className='col-span-3'>
            <button
              onClick={handleLoadMore}
              className={
                'px-4 py-2 w-full bg-pink-500 hover:bg-pink-600 text-lg text-white font-semibold tracking-wider shadow-md transition ease-in duration-150' +
                (showLoader ? '' : ' hidden')
              }
            >
              Load More
            </button>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default ImageGrid;
