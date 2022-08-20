import React, { useState } from 'react'
import data from './data'

import Header from './Components/Layout/Header'
import SideNav from './Components/Layout/SideNav'
import MainBody from './Components/Layout/MainBody'

import MovieList from './Components/Logic/MovieList'
import MoviePreview from './Components/Logic/MoviePreview'
import Search from './Components/Logic/Search'

import './App.css'

const movies = data

function App() {
  const [movie, setMovie] = useState({})
  const movieOnPreview = (item) => {
    console.log(item)
    setMovie(item)
  }

  return (
    <>
      {/* {console.log(data)} */}
      <Header>
        <h2 className='headerTitle'>Movie App</h2>
        <Search movies={movies} movieOnPreview={movieOnPreview} />
      </Header>
      <SideNav>
        <MovieList movies={movies} movieOnPreview={movieOnPreview} />
      </SideNav>
      <MainBody>
        <MoviePreview onPreview={movie} />
      </MainBody>
    </>
  )
}

export default App
