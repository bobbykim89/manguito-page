import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import about from './partials/about.jpg';

const About = () => {
  return (
    <section className='h-screen bg-yellow-100 py-20 text-gray-500 font-semibold'>
      <div className='lg:w-2/3 mx-auto px-4'>
        <div className='inline-block items-center flex flex-wrap md:flex-nowrap justify-between'>
          {/* Left */}
          <div className='inline-block flex w-full flex-wrap mx-auto justify-center lg:justify-start'>
            <img
              src={about}
              alt='bird on monitor'
              className='inline-block rounded-full my-8 w-1/2'
            />
          </div>
          <div className='flex flex-col w-full md:w-2/3 inline-block px-2 mx-auto'>
            <h2 className='text-2xl md:text-3xl tracking-wider text-center'>
              About Manguito Page
            </h2>
            <div className='mb-4'>
              <p className='text-md'>App to tell story about Manguito</p>
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
  );
};

export default About;
