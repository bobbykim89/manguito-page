import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

// Import Styles & Icons
import '@/assets/css/app.css'
import '@/utils/fontawesome'

// Pages
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import About from '@/pages/About'
import Home from '@/pages/Home'
import Gallery from '@/pages/gallery/Gallery'
import NotFound from '@/pages/NotFound'
import Post from '@/pages/gallery/Post'

// Layout Components
import Alerts from '@/components/layout/Alerts'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Contexts
import PostState from '@/context/post/PostContext'
import CommentState from '@/context/comment/CommentContext'
import AuthState from '@/context/auth/AuthContext'
import AlertState from '@/context/alert/AlertContext'

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
                    <Route exact path='/gallery' element={<Gallery />} />
                    <Route path='/gallery/:postId' element={<Post />} />
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
