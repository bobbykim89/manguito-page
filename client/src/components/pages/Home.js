import React, { Fragment } from 'react';
import Info from './partials/Info';
import Landing from './partials/Landing';

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Info />
    </Fragment>
  );
};

export default Home;
