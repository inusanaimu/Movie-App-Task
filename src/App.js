import React, { useState } from 'react'
// import data from './data'

import Header from './Components/Layout/Header'
import SideNav from './Components/Layout/SideNav'
import MainBody from './Components/Layout/MainBody'

import MovieList from './Components/Logic/MovieList'
import MoviePreview from './Components/Logic/MoviePreview'

import './App.css'

function App() {
  const [movie, setMovie] = useState({})
  const movieOnPreview = (item) => {
    setMovie(item)
  }

  return (
    <>
      {/* {console.log(data)} */}
      <Header> Movie App</Header>
      <SideNav>
        <MovieList movieOnPreview={movieOnPreview} />
      </SideNav>
      <MainBody>
        <MoviePreview movieOnPreview={movie} />
      </MainBody>
    </>
  )
}

export default App
