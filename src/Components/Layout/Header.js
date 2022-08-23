import React from 'react'

const Header = (props) => {
  return (
    <header className=' p-6 m-0 flex justify-evenly bg-black bg-opacity-80 w-full '>
      {' '}
      <h2 className=' text-2xl font-bold m-auto  text-blue-700'>Movie App</h2>
      {props.children}
    </header>
  )
}

export default Header
