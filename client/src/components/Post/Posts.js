import React, { useContext, useEffect, useState } from 'react';
import ImageGrid from './ImageGrid';
import UploadForm from './UploadForm';
import Postitem from './Postitem';
import { PostContext } from '../../context/post/PostContext';
import { AuthContext } from '../../context/auth/AuthContext';

const Posts = () => {
  const postContext = useContext(PostContext);
  const { posts, current } = postContext;
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.token !== null) {
      authContext.loadUser();
    }
    if (current !== null) {
      setPost(current);
    } else {
      setPost({
        image: '',
        content: '',
      });
    }
    // eslint-disable-next-line
  }, [postContext, current]);

  const [post, setPost] = useState({
    image: '',
    content: '',
  });

  if (current) {
    return (
      <section className='bg-black bg-opacity-70 pt-20 lg:py-20 min-h-80v'>
        <div className='w-full mx-auto md:w-2/3'>
          <Postitem post={post} setPost={setPost} />
        </div>
      </section>
    );
  }

  return (
    <section className='mt-4 lg:mt-0 bg-pink-100 py-20 lg:py-16 min-h-90v lg:min-h-85v'>
      <div className='w-full mx-auto md:w-1/2'>
        <h1 className='text-3xl text-center font-semibold tracking-wider text-green-600'>
          This is a beautiful day!
        </h1>
        <UploadForm />

        <ImageGrid posts={posts} />
      </div>
    </section>
  );
};

export default Posts;
