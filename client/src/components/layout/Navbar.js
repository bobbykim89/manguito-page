import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Hamburger from 'hamburger-react';
import logo from './logo.png';

const Navbar = ({ title, home, gallery, about, signup }) => {
  const [navBarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      id='Contact'
      className='w-screen top-0 absolute md:sticky flex flex-wrap items-center bg-green-200 z-50'
    >
      <div className='container flex flex-wrap items-center py-2 md:py-4 align-middle justify-between'>
        <div className='flex flex-shrink-0 mr-6'>
          <a href='#Home'>
            <span className='inline-block text-green-600 text-2xl font-bold pl-6'>
              <div className='inline-block w-6 align-middle'>
                <img src={logo} alt='logo' />
              </div>{' '}
              {title}
            </span>
          </a>
        </div>
        <div className='block lg:hidden'>
          <button
            className='flex items-center px-3 py-2 mr-1 text-xl font-bold text-green-600'
            type='button'
            onClick={() => setNavbarOpen(!navBarOpen)}
          >
            <Hamburger size={23} toggled={navBarOpen} toggle={setNavbarOpen} />
          </button>
        </div>
        <div
          className={
            'flex-grow w-full lg:flex lg:w-auto flex-wrap items-center' +
            (navBarOpen ? 'block' : ' hidden')
          }
        >
          <div className='flex flex-row pt-2 lg:pt-1 lg:flex-grow mx-auto justify-center lg:justify-start'>
            <a
              href='/'
              className='block lg:inline-block text-yellow-500 font-semibold align-middle text-lg hover:text-yellow-400 mr-4'
            >
              {home}
            </a>
            <span className='inline-block lg:hidden align-middle pt-1 text-yellow-500 text-sm pr-4'>
              |
            </span>
            <a
              href='/'
              className='block lg:inline-block text-yellow-500 font-semibold align-middle text-lg hover:text-yellow-400 mr-4'
            >
              {gallery}
            </a>
            <span className='inline-block lg:hidden align-middle pt-1 text-yellow-500 text-sm pr-4'>
              |
            </span>
            <a
              href='/'
              className='block lg:inline-block text-yellow-500 font-semibold align-middle text-lg hover:text-yellow-400'
            >
              {about}
            </a>
          </div>
          <div className='flex flex-wrap pt-3 pb-2 lg:pt-1 justify-center'>
            <a
              href='/'
              className='inline-block text-green-600 align-middle text-xl mx-2 hover:text-white'
            >
              <FontAwesomeIcon icon={faSignInAlt} />
            </a>
            <a
              href='/'
              className='inline-block text-green-500 font-semibold align-middle text-sm mx-2 px-4 py-1 bg-yellow-400 rounded hover:bg-yellow-300'
            >
              {signup}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  gallery: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  signup: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Manguito Page',
  home: 'Home',
  gallery: 'Gallery',
  about: 'About',
  signup: 'Signup',
};

export default Navbar;
