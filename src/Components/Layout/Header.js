import React from 'react'

const Header = (props) => {
  return (
    <header className=' m-6 text-center  '>
      {' '}
      <h2>Movie App</h2>
      {props.children}
    </header>
  )
}

export default Header
