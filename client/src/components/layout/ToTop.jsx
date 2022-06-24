import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ToTop = () => {
  const [topScroll, setTopScroll] = useState(false)

  window.addEventListener('scroll', (e) => {
    if (window.scrollY >= 200) {
      setTopScroll(true)
    } else {
      setTopScroll(false)
    }
  })

  const toTop = (e) => {
    e.preventDefault()
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={
        'fixed bg-gray-200 bg-opacity-70 rounded-lg bottom-0 right-0 mb-4 mr-4 transition ease-in duration-400 delay-150 hover:text-pink-500' +
        (topScroll ? ' block' : ' hidden')
      }
      onClick={toTop}
    >
      {/* <span className='material-icons mx-2 mt-2 cursor-pointer'>
        expand_less
      </span> */}
      <FontAwesomeIcon
        icon='fa-solid fa-chevron-up'
        className='mx-2 mt-2 mb-[2px] cursor-pointer text-sm'
      />
    </div>
  )
}

export default ToTop
