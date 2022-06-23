import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import banner from 'assets/images/banner.png'
import second from 'assets/images/second.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Landing = ({
  landingHeader,
  landingP,
  landingLink,
  infoText,
  infoTitle,
}) => {
  AOS.init({
    delay: 300,
    duration: 1400,
    once: false,
    easing: 'ease',
  })

  return (
    <Fragment>
      <section>
        <div className='grid grid-flow-row md:grid-cols-5 my-8  font-inter'>
          <div className='col-span-2 order-2 md:order-1'>
            <div className='mx-auto my-12 xl:mt-40 px-4 items-center text-center text-black'>
              <div className='inline-block text-center md:text-left mx-1 md:ml-12 2xl:ml-10'>
                <div className='text-center md:text-left'>
                  <div className='text-left'>
                    <span className='ml-12 md:ml-2 text-lg lg:text-3xl font-semibold'>
                      Welcome to
                    </span>
                  </div>

                  <h1 className='text-4xl md:text-5xl 2xl:text-7xl text-pink-500 font-bold mb-8'>
                    {landingHeader}
                  </h1>
                </div>
                <p className='w-5/6 md:w-full inline-block text-lg lg:text-xl font-semibold mb-8'>
                  {landingP}
                </p>
              </div>

              <div>
                <Link
                  to='/gallery'
                  className='hover:bg-transparent bg-pink-500 hover:text-pink-500 font-bold text-white py-2 px-4 border-2 text-2xl border-pink-500 rounded inline-block mt-5 transition ease-in duration-150 shadow animate-bounce'
                >
                  {landingLink}
                </Link>
              </div>
            </div>
          </div>
          <div className='col-span-3 order1 relative md:order-2 '>
            <div className='absolute top-0 -left-4 lg:left-[10%] w-72 h-72 lg:w-96 lg:h-96 bg-[#a2d918] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-balls' />
            <div className='absolute top-0 right-[12%] lg:right-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-balls animation-delay-2000' />
            <div className='absolute left-8 lg:left-1/4 -bottom-4 w-72 h-72 lg:w-96 lg:h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-balls animation-delay-4000' />
            <img
              src={banner}
              className='relative w-4/5 lg:w-1/2 mx-auto object-contain'
              alt='manguito banner'
            />
          </div>
        </div>
        <div
          className='relative top-auto bottom-0 left-0 right-0 w-full pointer-events-none overflow-hidden'
          style={{ height: '70px' }}
        >
          <svg
            className='absolute bottom-0 overflow-hidden'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'
          >
            <polygon
              className='text-pink-500 fill-current'
              points='0 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div>
      </section>
      <section className='bg-pink-500 pt-20'>
        <div className='container md:w/5-6 mx-auto grid grid-flow-row md:grid-cols-2 md:mt-12 pb-12'>
          <div className='relative mb-12 md:overflow-visible'>
            <div className='absolute w-1/2 h-64 lg:h-96 top-4 rounded-full bg-[#a2d918] filter blur-xl opacity-70 animate-balls' />
            <div className='absolute w-1/2 h-64 lg:h-96 bottom-4 right-[12%] rounded-full bg-yellow-300 filter blur-xl opacity-50 animate-balls animation-delay-2000' />
            <div className='absolute w-1/2 h-64 lg:h-96 bottom-[-30%] left-[25%] rounded-full bg-blue-300 filter blur-xl opacity-50 animate-balls animation-delay-4000' />
            <img
              src={second}
              className='opacity-1 relative w-1/2 mx-auto rounded-full border-4 border-white shadow-lg'
              alt='Manguito on the wheel'
            />
          </div>
          <div className='relative text-white font-inter w-full lg:pt-8 px-4 md:w-4/5 md:mx-auto'>
            <div className='mb-8'>
              <h2 className='text-center text-3xl font-bold md:text-4xl lg:text-5xl mb-6'>
                {infoTitle}
              </h2>
              <p className='text-center md:text-lg font-semibold'>{infoText}</p>
            </div>
          </div>
        </div>
        <div
          className='relative top-auto bottom-0 left-0 right-0 w-full pointer-events-none overflow-hidden'
          style={{ height: '70px' }}
        >
          <svg
            className='absolute bottom-0 overflow-hidden'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'
          >
            <polygon
              className='text-white fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div>
      </section>
    </Fragment>
  )
}

Landing.propTypes = {
  landingHeader: PropTypes.string.isRequired,
  landingP: PropTypes.string.isRequired,
  landingLink: PropTypes.string.isRequired,
  infoTitle: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
}

Landing.defaultProps = {
  landingHeader: 'Manguito Page',
  landingP:
    'Manguito is tiny Peach faced lovebird who likes to chirp and play! Moreover, he is so cute but also very evil.',
  landingLink: 'Head to Gallery',
  infoTitle: "Manguito's Story",
  infoText:
    "We found Manguito in late May. He was barely a baby bird, looking really fragile, cant even chew banana. Honestly I didn't think he will make it over night. Luckily he survived the night and he got more active. These days he is almost grown up bird, chirping and flying around the house, glued to my wife mostly and bothering her doing her work and stealing our food!!",
}
export default Landing
