import React from 'react';

const Footer = () => {
  return (
    <footer className='flex flex-wrap justify-center absolute inset-x-0 bottom-0 mx-auto px-6 bg-green-200'>
      <div className='container mt-6 border-t-2 border-grey-200 md:w-2/3 items-center'>
        <div className='text-center py-4'>
          <p className='text-sm text-green-600 align-middle font-bold mb-2'>
            &copy; Manguito Page 2021
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
