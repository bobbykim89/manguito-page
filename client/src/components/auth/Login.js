import React, { useState } from 'react';

const Login = (props) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      console.log('ERROR! Please fill in the fields');
    } else {
      console.log(email, password);
    }
  };
  return (
    <section className='bg-blue-200 py-32 h-screen'>
      <div className='container w-11/12 md:w-1/3 bg-blue-400 mx-auto px-4 md:px-8 py-8 rounded shadow-lg'>
        <h1 className='mx-auto text-4xl text-white font-bold text-center mb-4 tracking-wider'>
          Login
        </h1>
        <form onSubmit={onSubmit} className='flex flex-col'>
          <div className='mb-4'>
            <label htmlFor='email' className='text-white text-lg font-semibold'>
              Email Address
            </label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              required
              className='block w-full p-2 border-2 border-indigo-400'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='text-white text-lg font-semibold'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              required
              className='block w-full p-2 border-2 border-indigo-400'
            />
          </div>
          <input
            type='submit'
            value='Login'
            className='px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-lg text-white font-semibold tracking-wider'
          />
        </form>
      </div>
    </section>
  );
};

export default Login;
