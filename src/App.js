import React, { useState, useCallback } from 'react'
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
  const movieOnPreview = useCallback((item) => {
    console.log(item)
    setMovie(item)
  }, [])

  return (
    <div className='relative'>
      <Header>
        <Search movies={movies} movieOnPreview={movieOnPreview} />
      </Header>
      <MainBody>
        <MoviePreview onPreview={movie} />
      </MainBody>
      <SideNav>
        <MovieList movies={movies} movieOnPreview={movieOnPreview} />
      </SideNav>
    </div>
  )
}

export default App
