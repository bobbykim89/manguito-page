import React, { Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCrown,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import Hamburger from 'hamburger-react';
import logo from './logo.png';
import { AuthContext } from '../../context/auth/AuthContext';

const Navbar = ({ title, home, gallery, about, signup }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li className='inline-block text-green-600 align-middle text-lg mx-2'>
        {user && user.name}{' '}
        {user && user.admin ? (
          <FontAwesomeIcon icon={faCrown} className='text-yellow-400' />
        ) : (
          ''
        )}
      </li>
      <li className='inline-block text-green-600 align-middle text-xl mx-2 hover:text-white'>
        <a onClick={onLogout} href='/'>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link
        to='/login'
        className='inline-block text-green-600 align-middle text-xl mx-2 hover:text-white'
      >
        <FontAwesomeIcon icon={faSignInAlt} />
      </Link>
      <Link
        to='/signup'
        className='inline-block text-white font-semibold align-middle text-sm mx-2 px-4 py-1 bg-red-300 rounded hover:bg-red-200 transition ease-in duration-150'
      >
        {signup}
      </Link>
    </Fragment>
  );

  const [navBarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='w-full top-0 absolute md:sticky flex flex-wrap items-center bg-green-200 z-50'>
      <div className='container flex flex-wrap items-center py-2 md:py-4 align-middle justify-between'>
        <div className='flex flex-shrink-0 mr-6'>
          <Link to='/'>
            <span className='inline-block text-green-600 text-2xl font-bold pl-6'>
              <div className='inline-block w-6 align-middle'>
                <img src={logo} alt='logo' />
              </div>{' '}
              {title}
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
              className='block lg:inline-block text-red-400 font-semibold align-middle text-lg hover:text-red-300 mr-4'
            >
              {home}
            </Link>
            <span className='inline-block lg:hidden align-middle pt-1 text-red-400 text-sm pr-4'>
              |
            </span>
            <Link
              to='/gallery'
              className='block lg:inline-block text-red-400 font-semibold align-middle text-lg hover:text-red-300 mr-4'
            >
              {gallery}
            </Link>
            <span className='inline-block lg:hidden align-middle pt-1 text-red-400 text-sm pr-4'>
              |
            </span>
            <Link
              to='/about'
              className='block lg:inline-block text-red-400 font-semibold align-middle text-lg hover:text-red-300'
            >
              {about}
            </Link>
          </div>
          {/* Auth Section */}
          <div className='flex flex-wrap pt-3 pb-2 lg:pt-1 justify-center'>
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
