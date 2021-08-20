import React from 'react';
import PropTypes from 'prop-types';
import banner from './banner.jpg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Landing = ({ landingHeader, landingP, landingLink }) => {
  AOS.init({
    delay: 300,
    duration: 1400,
    once: false,
    easing: 'ease',
  });

  return (
    <section className='py-20 md:px-10 bg-red-300 text-white'>
      <div className='container w-full md:w-4/5 mx-auto'>
        <div className='inline-block items-center flex flex-wrap-reverse md:flex-wrap justify-center'>
          {/* Left */}
          <div className='relative w-full px-4 md:w-2/5 mx-2 md:mx-auto md:pr-8'>
            <h2 className='text-center text-2xl md:text-4xl lg:text-6xl text-white mb-6'>
              {landingHeader}
            </h2>
            <p className='text-center text-lg font-semibold mb-6'>{landingP}</p>
            <div className='flex justify-center'>
              <Link
                to='/gallery'
                className='bg-transparent hover:bg-white text-white font-bold hover:text-red-300 py-2 px-4 border-2 border-white hover:border-transparent rounded inline-block mt-5 transition ease-in duration-150 shadow'
              >
                {landingLink}
              </Link>
            </div>
          </div>
          {/* Right */}
          <div
            className='inline-block flex flex-wrap w-full md:w-3/5 mx-auto mb-8 justify-center'
            data-aos='fade-left'
          >
            <img
              src={banner}
              alt='banner'
              className='max-w-screen md:max-w-full md:rounded-lg shadow-lg'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  landingHeader: PropTypes.string.isRequired,
  landingP: PropTypes.string.isRequired,
  landingLink: PropTypes.string.isRequired,
};

Landing.defaultProps = {
  landingHeader: "Welcome to Manguito's home!",
  landingP:
    'Manguito is tiny Peach faced lovebird who likes to chirp and play! Moreover, he is so cute but also very evil :D',
  landingLink: 'Head to Photo Gallery',
};
export default Landing;
