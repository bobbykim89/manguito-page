import React from 'react';
import PropTypes from 'prop-types';
import info from './info.jpg';

const Info = ({ infoTitle, infoText }) => {
  return (
    <section className='bg-blue-200 py-20 text-indigo-400'>
      <div className='container md:w-5/6 mx-auto px-4'>
        <div className='inline-block items-center flex flex-wrap justify-center'>
          {/* LEFT */}
          <div className='inline-block flex flex-wrap w-full md:w-2/5 mx-auto mb-8 justify-center'>
            <img
              src={info}
              alt='Manguito2'
              className='max-w-screen md:max-w-full md:rounded-lg shadow-lg'
            />
          </div>
          {/* RIGHT */}
          <div className='relative w-full px-4 md:w-2/5 mx-2 md:mx-auto md:pr-8'>
            <h2 className='text-center text-2xl font-semibold md:text-4xl lg:text-5xl mb-6'>
              {infoTitle}
            </h2>
            <p className='text-center text-lg font-semibold mb-6'>{infoText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

Info.propTypes = {
  infoTitle: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
};

Info.defaultProps = {
  infoTitle: "Here is Manguito's Story",
  infoText:
    "We found Manguito in late May. He was barely a baby bird, looking really fragile, cant even chew banana. Honestly I didn't think he will make it over night. Luckily he survived the night and he got more active. These days he is almost grown up bird, chirping and flying around the house, glued to my wife mostly and bothering her doing her work and stealing our food :D",
};

export default Info;
