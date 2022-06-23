import React, { useContext, useEffect, Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import ImageGrid from '../../components/Post/ImageGrid'
import UploadForm from '../../components/Post/UploadForm'
import ToTop from '../../components/layout/ToTop'
import { PostContext } from '../../context/post/PostContext'
import { AuthContext } from '../../context/auth/AuthContext'
import { useLocation } from 'react-router'

const Gallery = () => {
  const postContext = useContext(PostContext)
  const { getPosts, posts } = postContext
  const authContext = useContext(AuthContext)

  const location = useLocation()

  useEffect(() => {
    getPosts()
    if (authContext.token !== null) {
      authContext.loadUser()
    }
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    // eslint-disable-next-line
  }, [location])

  return (
    <Fragment>
      <Helmet>
        <title>Gallery: Manguito page</title>
        <meta
          name='description'
          content='Photo gallery for Manguito! Please click on image to enjoy daily life of Manguito!'
        />
      </Helmet>
      <section className='py-10 lg:py-16 min-h-85v font-inter'>
        <div className='w-full mx-auto md:w-1/2'>
          <h1 className='text-3xl text-center font-semibold tracking-wider text-black font-light'>
            Enjoy the gallery!
          </h1>
          <UploadForm />

          <ImageGrid posts={posts} />
        </div>
      </section>
      <ToTop />
    </Fragment>
  )
}

export default Gallery
