import React, { useContext, useEffect, useState } from 'react';
import ImageGrid from './ImageGrid';
import UploadForm from './UploadForm';
import Postitem from './Postitem';
import { PostContext } from '../../context/post/PostContext';

const Posts = () => {
  const postContext = useContext(PostContext);
  const { posts, current } = postContext;
  useEffect(() => {
    if (current !== null) {
      setPost(current);
    } else {
      setPost({
        image: '',
        content: '',
      });
    }
  }, [postContext, current]);

  const [post, setPost] = useState({
    image: '',
    content: '',
  });

  return (
    <section className='bg-pink-100 py-20'>
      <div className='w-full md:w-1/2 mx-auto'>
        <h1 className='text-3xl text-center font-semibold tracking-wider text-green-600'>
          This is a beautiful day!
        </h1>

        <UploadForm />
        {!current ? (
          <ImageGrid posts={posts} />
        ) : (
          <Postitem post={post} setPost={setPost} />
        )}

        {/* {current && } */}
        {/* {posts.map((post) => (
          <Postitem key={post.id} post={post} />
        ))} */}
      </div>
    </section>
  );
};

export default Posts;
