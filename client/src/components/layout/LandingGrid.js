import React, { Fragment, useContext, useEffect, useState } from 'react';
import arrow from './arrow.png';
import { PostContext } from '../../context/post/PostContext';
import Spinner from './Spinner';

const LandingGrid = () => {
  const postContext = useContext(PostContext);
  const { getPosts, posts, loading } = postContext;
  const [img0, setImg0] = useState(false);
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const [img4, setImg4] = useState(false);
  const [img5, setImg5] = useState(false);
  const [img6, setImg6] = useState(false);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {posts.length !== 0 && !loading ? (
        <section className='bg-white grid place-items-center py-20'>
          <div className='p-4 md:w-2/3 grid gap-4 grid-cols-2 md:grid-cols-4 font-inter'>
            <h1 className='text-4xl font-extrabold col-span-2 md:col-span-3 md:text-5xl grid grid-cols-2 md:grid-cols-3 gap-4'>
              <span className='row-start-2 col-span-2'>
                Take a look at some pictures!
              </span>
            </h1>
            <div className='row-start-2 col-start-2 md:col-start-1 md:col-span-2 self-center md:pr-8 text-right font-marker text-2xl md:text-4xl transition ease-in duration-150 animate-bounce'>
              Flip me over!!{' '}
              <img
                src={arrow}
                className='inline-block w-20 rotate-180 md:rotate-[55deg] mr-12 md:mr-6 mt-4'
                alt='arrow'
              />
            </div>
            <div
              className={
                'aspect-w-1 aspect-h-1 bg-blue-500' + (img0 ? ' flip-card' : '')
              }
              onClick={() => setImg0(true)}
            >
              <img
                src={posts && posts[0].image}
                alt=''
                className={
                  'object-cover object-center max-w-6/4 transition ease-in duration-1000' +
                  (img0 ? ' opacity-100' : ' opacity-0')
                }
              />
            </div>
            <div
              className={
                'aspect-w-1 aspect-h-1 bg-blue-500' + (img1 ? ' flip-card' : '')
              }
              onClick={() => setImg1(true)}
            >
              <img
                src={posts && posts[1].image}
                alt=''
                className={
                  'object-cover object-center max-w-6/4 transition ease-in duration-1000' +
                  (img1 ? ' opacity-100' : ' opacity-0')
                }
              />
            </div>
            <div
              className={
                'aspect-w-1 aspect-h-1 bg-pink-500' + (img2 ? ' flip-card' : '')
              }
              onClick={() => setImg2(true)}
            >
              <img
                src={posts && posts[2].image}
                alt=''
                className={
                  'object-cover object-center max-w-6/4 transition ease-in duration-1000' +
                  (img2 ? ' opacity-100' : ' opacity-0')
                }
              />
            </div>
            <div
              className={
                'aspect-w-1 aspect-h-1 bg-pink-500' + (img3 ? ' flip-card' : '')
              }
              onClick={() => setImg3(true)}
            >
              <img
                src={posts && posts[3].image}
                alt=''
                className={
                  'object-cover object-center max-w-6/4 transition ease-in duration-1000' +
                  (img3 ? ' opacity-100' : ' opacity-0')
                }
              />
            </div>
            <div
              className={
                'aspect-w-1 aspect-h-1 bg-blue-500' + (img4 ? ' flip-card' : '')
              }
              onClick={() => setImg4(true)}
            >
              <img
                src={posts && posts[4].image}
                alt=''
                className={
                  'object-cover object-center max-w-6/4 transition ease-in duration-1000' +
                  (img4 ? ' opacity-100' : ' opacity-0')
                }
              />
            </div>
            <div
              className={
                'aspect-w-1 aspect-h-1 bg-pink-500' + (img5 ? ' flip-card' : '')
              }
              onClick={() => setImg5(true)}
            >
              <img
                src={posts && posts[5].image}
                alt=''
                className={
                  'object-cover object-center max-w-6/4 transition ease-in duration-1000' +
                  (img5 ? ' opacity-100' : ' opacity-0')
                }
              />
            </div>
            <div
              className={
                'aspect-w-1 aspect-h-1 bg-blue-500' + (img6 ? ' flip-card' : '')
              }
              onClick={() => setImg6(true)}
            >
              <img
                src={posts && posts[6].image}
                alt=''
                className={
                  'object-cover object-center max-w-6/4 transition ease-in duration-1000' +
                  (img6 ? ' opacity-100' : ' opacity-0')
                }
              />
            </div>
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default LandingGrid;
