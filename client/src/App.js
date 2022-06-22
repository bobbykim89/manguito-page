import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './app.css'

// Page Components
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Posts from './components/Post/Posts'
import Alerts from './components/layout/Alerts'
import NotFound from './components/pages/NotFound'
import PostItem from './components/Post/PostItem'

// Contexts
import PostState from './context/post/PostContext'
import CommentState from './context/comment/CommentContext'
import AuthState from './context/auth/AuthContext'
import AlertState from './context/alert/AlertContext'

function App() {
  return (
    <AuthState>
      <PostState>
        <CommentState>
          <AlertState>
            <HelmetProvider>
              <Helmet>
                <title>Manguito page</title>
                <meta
                  name='description'
                  content='Welcome to Manguito page! This is little photo blog app for Manguito, my peachfaced lovebird!'
                />
                <meta
                  name='keywords'
                  content='manguito, lovebird, pets, photo gallery, parrot'
                />
              </Helmet>
              <Router>
                <Fragment>
                  <Navbar />
                  <Alerts />
                  <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/gallery' element={<Posts />} />
                    <Route path='/gallery/:postId' element={<PostItem />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/signup' element={<Signup />} />
                    <Route path='*' element={<NotFound />} />
                  </Routes>
                  <Footer />
                </Fragment>
              </Router>
            </HelmetProvider>
          </AlertState>
        </CommentState>
      </PostState>
    </AuthState>
  )
}

export default App
