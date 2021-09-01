import React, { Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCrown,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import Hamburger from 'hamburger-react';
import logo from './logo.png';
import { AuthContext } from '../../context/auth/AuthContext';
import { PostContext } from '../../context/post/PostContext';

const Navbar = ({ title, home, gallery, about }) => {
  const authContext = useContext(AuthContext);
  const postContext = useContext(PostContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearCurrent } = postContext;

  const [navScroll, setNavScroll] = useState(false);

  window.addEventListener('scroll', (e) => {
    if (window.scrollY >= 50) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  });

  const onLogout = () => {
    logout();
    setNavbarOpen(false);
  };

  const clickHandler = () => {
    setNavbarOpen(false);
    clearCurrent();
  };

  const authLinks = (
    <Fragment>
      <li className='inline-block text-pink-500 align-middle text-lg mx-2 font-semibold'>
        <span>Welcome! </span>
        {user && user.name}{' '}
        {user && user.admin ? (
          <FontAwesomeIcon icon={faCrown} className='text-yellow-400' />
        ) : (
          ''
        )}
      </li>
      <li className='inline-block text-pink-500 align-middle text-xl mx-2 hover:text-black transition ease-in duration-150'>
        <a onClick={onLogout} href='/'>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span className='hidden md:inline ml-2 text-lg font-semibold'>
            Logout
          </span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link
        to='/login'
        onClick={clickHandler}
        className='inline-block text-pink-500 align-middle text-xl mx-3 hover:text-black transition ease-in duration-150'
      >
        <FontAwesomeIcon icon={faSignInAlt} />
        <span className='ml-2 text-lg font-semibold'>Login</span>
      </Link>
      <Link
        to='/signup'
        onClick={clickHandler}
        className='inline-block text-pink-500 align-middle text-xl mx-3 hover:text-black transition ease-in duration-150'
      >
        <FontAwesomeIcon icon={faUserPlus} />
        <span className='ml-2 text-lg font-semibold'>Signup</span>
      </Link>
    </Fragment>
  );

  const [navBarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className={
        'w-full top-0 md:sticky flex flex-wrap items-center z-50 transition ease-in duration-500 delay-150 font-inter' +
        (navScroll ? ' bg-white bg-opacity-70 shadow-md' : ' bg-transparent')
      }
    >
      <div className='container flex flex-wrap items-center py-2 md:py-4 align-middle justify-between'>
        <div className='flex flex-shrink-0 mr-6 self-center'>
          <Link to='/' onClick={clickHandler}>
            <span className='inline-block text-black text-2xl font-bold pl-6'>
              <div className='inline-block w-6 align-middle'>
                <img src={logo} alt='logo' />
              </div>{' '}
              MANGU<span className='text-pink-500'>IT</span>O
            </span>
          </Link>
        </div>
        <div className='block lg:hidden'>
          <button
            className='flex items-center px-3 py-2 text-xl font-bold text-green-600'
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
            <Link
              to='/'
              onClick={clickHandler}
              className='block lg:inline-block text-black font-semibold align-middle text-lg hover:text-pink-500 mr-4'
            >
              {home}
            </Link>
            <span className='inline-block lg:hidden align-middle pt-1 text-black text-sm pr-4'>
              |
            </span>
            <Link
              to='/gallery'
              onClick={clickHandler}
              className='block lg:inline-block text-black font-semibold align-middle text-lg hover:text-pink-500 mr-4'
            >
              {gallery}
            </Link>
            <span className='inline-block lg:hidden align-middle pt-1 text-black text-sm pr-4'>
              |
            </span>
            <Link
              to='/about'
              onClick={clickHandler}
              className='block lg:inline-block text-black font-semibold align-middle text-lg hover:text-pink-500'
            >
              {about}
            </Link>
          </div>
          {/* Auth Section */}
          <div className='flex flex-wrap pt-3 pb-2 lg:pb-0 lg:pt-1 justify-center'>
            {isAuthenticated ? authLinks : guestLinks}
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
