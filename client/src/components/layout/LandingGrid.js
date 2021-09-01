import React from 'react';
import arrow from './arrow.png';

const LandingGrid = () => {
  return (
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
        <div className='aspect-w-1 aspect-h-1 bg-blue-500' />
        <div className='aspect-w-1 aspect-h-1 bg-blue-500' />
        <div className='aspect-w-1 aspect-h-1 bg-pink-500' />
        <div className='aspect-w-1 aspect-h-1 bg-pink-500 ' />
        <div className='aspect-w-1 aspect-h-1 bg-blue-500' />
        <div className='aspect-w-1 aspect-h-1 bg-pink-500' />
        <div className='aspect-w-1 aspect-h-1 bg-blue-500' />
      </div>
    </section>
  );
};

export default LandingGrid;
