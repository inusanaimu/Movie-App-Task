import React from 'react'

const Header = (props) => {
  return (
    <header className=' sticky top-0 z-10 p-6 m-0 flex justify-evenly bg-black bg-opacity-95 w-full '>
      <h2 className=' text-2xl font-bold m-auto  text-gray-100'>Movie App</h2>
      {props.children}
    </header>
  )
}

export default Header
