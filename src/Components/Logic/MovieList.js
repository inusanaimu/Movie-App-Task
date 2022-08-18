import React, { useEffect } from 'react'

import Btn from '../UI/Btn'

import data from '../../data'
const movies = data

const MovieList = ({ movieOnPreview }) => {
  useEffect(() => {
    movieOnPreview(movies[0])
  }, [])

  return (
    <>
      <h4> Movie List</h4>
      <div>
        {movies.map((movie) => {
          return (
            <Btn key={movie.id} movie={movie} movieOnPreview={movieOnPreview}>
              {movie.title}
            </Btn>
          )
        })}
      </div>
    </>
  )
}

export default MovieList
