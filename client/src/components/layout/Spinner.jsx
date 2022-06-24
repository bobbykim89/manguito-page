import React, { Fragment } from 'react'

// Import Images
import spinner from '@/assets/images/spinner.gif'

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='Loading...'
      className='w-20 lg:w-40 mx-auto block'
    />
  </Fragment>
)

export default Spinner
