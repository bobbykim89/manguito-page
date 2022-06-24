import React, { Fragment } from 'react'
import Landing from '@/components/home/Landing'
import LandingGrid from '@/components/home/LandingGrid'
import ToTop from '@/components/layout/ToTop'

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <LandingGrid />
      <ToTop />
    </Fragment>
  )
}

export default Home
