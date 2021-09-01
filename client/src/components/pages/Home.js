import React, { Fragment } from 'react';
import Landing from './partials/Landing';
import LandingGrid from '../layout/LandingGrid';
import ToTop from '../layout/ToTop';

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <LandingGrid />
      <ToTop />
    </Fragment>
  );
};

export default Home;
