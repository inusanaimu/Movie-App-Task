import React from 'react'

const Header = (props) => {
  return (
    <header className=' sticky top-0 z-10 m-0  bg-black bg-opacity-95 w-full '>
      <div className='max-w-5xl m-auto w-full md:w-4/5 px-4 py-4'>
        <div className='m-0 p-0 flex justify-end'>
          <h2 className='text-2xl md:text-4xl font-bold m-0 text-gray-100'>
            Movie App
          </h2>
          {props.children}
        </div>
      </div>
    </header>
  )
}

export default Header
