import React, { useContext, useEffect, useState, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import ImageGrid from './ImageGrid';
import UploadForm from './UploadForm';
import PostItem from './PostItem';
import ToTop from '../layout/ToTop';
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
      <Fragment>
        <Helmet>
          <title>Gallery: Manguito page</title>
          <meta
            name='description'
            content='Photo gallery for Manguito! Please click on image to enjoy daily life of Manguito!'
          />
        </Helmet>
        <section className='bg-black bg-opacity-70 lg:py-20 min-h-80v'>
          <div className='w-full mx-auto md:w-2/3'>
            <PostItem post={post} setPost={setPost} />
          </div>
        </section>
        <ToTop />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Helmet>
        <title>Gallery: Manguito page</title>
        <meta
          name='description'
          content='Photo gallery for Manguito! Please click on image to enjoy daily life of Manguito!'
        />
      </Helmet>
      <section className='py-10 lg:py-16 min-h-85v font-inter'>
        <div className='w-full mx-auto md:w-1/2'>
          <h1 className='text-3xl text-center font-semibold tracking-wider text-black font-light'>
            Enjoy the gallery!
          </h1>
          <UploadForm />

          <ImageGrid posts={posts} />
        </div>
      </section>
      <ToTop />
    </Fragment>
  );
};

export default Posts;
