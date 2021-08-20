import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import about from './partials/about.jpg';

const About = () => {
  AOS.init({
    delay: 300,
    duration: 1400,
    once: false,
    easing: 'ease',
  });

  return (
    <Fragment>
      <Helmet>
        <title>About: Manguito page</title>
        <meta
          name='description'
          content='This about page. Please check my Github page, Portfolio and Linkedin'
        />
      </Helmet>
      <section className='bg-yellow-100 py-20 text-gray-500 font-semibold min-h-90v lg:min-h-85v'>
        <div className='lg:w-2/3 mx-auto px-4'>
          <div className='inline-block items-center grid grid-flow-row lg:grid-cols-2'>
            {/* Left */}
            <div
              className='inline-block flex flex-wrap mx-auto justify-center lg:justify-start'
              data-aos='flip-left'
            >
              <img
                src={about}
                alt='bird on monitor'
                className='inline-block rounded-full my-8 w-2/3 shadow-md'
              />
            </div>
            <div className='flex flex-col inline-block px-2 mx-auto'>
              <h2 className='text-2xl md:text-3xl tracking-wider text-center'>
                About Manguito Page
              </h2>
              <div className='mb-4'>
                <p className='text-md'>Photo blog for Manguito</p>
                <p className='text-md'>Version: 0.1.0(Beta)</p>
                <p className='text-md'>Made by: Bobby Kim</p>
              </div>
              <ul className='text-6xl flex flex-wrap justify-center'>
                <li className='mx-2 hover:text-green-400 transition ease-in duration-150'>
                  <a
                    href='https://github.com/bobbykim89'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </a>
                </li>
                <li className='mx-2 hover:text-green-400 transition ease-in duration-150'>
                  <a
                    href='https://www.linkedin.com/in/bobby-kim-9baa17165/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li className='mx-2 hover:text-green-400 transition ease-in duration-150'>
                  <a
                    href='mailto:bobby.sihun.kim@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faEnvelopeSquare} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
