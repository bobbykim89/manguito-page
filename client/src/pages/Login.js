import React, { useState, useContext, useEffect, Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

// Import contexts
import { AlertContext } from '../context/alert/AlertContext'
import { AuthContext } from '../context/auth/AuthContext'

const Login = () => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const history = useNavigate()

  const { setAlert } = alertContext
  const { login, error, clearErrors, isAuthenticated } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      history('/gallery')
    }
    if (error === 'Invalid Credentials') {
      setAlert(error)
      clearErrors()
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated])

  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const { email, password } = user
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (email === '' || password === '') {
      setAlert('Please fill in all fields')
    } else {
      login({
        email,
        password,
      })
    }
  }
  return (
    <Fragment>
      <Helmet>
        <title>Login: Manguito page</title>
        <meta name='description' content='Logging into Manguito Page!' />
      </Helmet>
      <section className='bg-blue-200 py-20 min-h-85v font-inter'>
        <div className='container w-11/12 md:w-1/3 bg-blue-400 mx-auto px-4 md:px-8 py-8 rounded shadow-lg'>
          <h1 className='mx-auto text-4xl text-white font-bold text-center mb-4 tracking-wider'>
            Login
          </h1>
          <form onSubmit={onSubmit} className='flex flex-col'>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='text-white text-lg font-semibold'
              >
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={onChange}
                required
                className='block w-full p-2 outline-none bg-blue-200'
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
                id='password'
                name='password'
                value={password}
                onChange={onChange}
                required
                className='block w-full p-2 outline-none bg-blue-200'
              />
            </div>
            <input
              type='submit'
              value='Login'
              className='px-4 py-2 bg-blue-700 hover:bg-blue-500 text-lg text-white font-semibold tracking-wider shadow-md'
            />
          </form>
        </div>
      </section>
    </Fragment>
  )
}

export default Login
