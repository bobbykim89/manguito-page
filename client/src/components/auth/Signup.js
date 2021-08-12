import React, { useState } from 'react';

const Signup = (props) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const [agree, setAgree] = useState(false);

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleCheckBox = () => {
    setAgree(!agree);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      console.log('Please enter all fields');
    } else if (password !== password2) {
      console.log('Passwords do not match. Please Check again');
    } else if (!agree) {
      console.log('Please agree with terms and conditions');
    } else {
      console.log(name, email, password, agree);
    }
  };

  return (
    <section className='bg-blue-200 py-32 h-screen'>
      <div className='container w-11/12 md:w-1/3 bg-blue-400 mx-auto px-4 md:px-8 py-8 rounded shadow-lg'>
        <h1 className='mx-auto text-4xl text-white font-bold text-center mb-4 tracking-wider'>
          Signup
        </h1>
        <form onSubmit={onSubmit} className='flex flex-col'>
          <div className='mb-4'>
            <label htmlFor='name' className='text-white text-lg font-semibold'>
              User Name
            </label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={onChange}
              required
              className='block w-full p-2 border-2 border-indigo-400'
            />
          </div>
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
          <div className='mb-4'>
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
              minLength='6'
              className='block w-full p-2 border-2 border-indigo-400'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password2'
              className='text-white text-lg font-semibold'
            >
              Password
            </label>
            <input
              type='password'
              name='password2'
              value={password2}
              onChange={onChange}
              required
              minLength='6'
              className='block w-full p-2 border-2 border-indigo-400'
            />
          </div>
          <div className='mb-6'>
            <input
              type='checkbox'
              name='agree'
              value={agree}
              onClick={handleCheckBox}
              required
              className='inline-block mx-3 h-6 w-6 align-middle'
            />
            <label
              htmlFor='agree'
              className='text-white text-lg font-semibold align-middle'
            >
              I double checked what I wrote!
            </label>
          </div>
          <input
            type='submit'
            value='Signup'
            className='px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-lg text-white font-semibold tracking-wider'
          />
        </form>
      </div>
    </section>
  );
};

export default Signup;
