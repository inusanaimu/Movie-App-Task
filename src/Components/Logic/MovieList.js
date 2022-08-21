import React, { useEffect } from 'react'

import classes from './MovieList.module.css'

import Btn from '../UI/Btn'

const MovieList = ({ movies, movieOnPreview }) => {
  useEffect(() => {
    movieOnPreview(movies[0])
  }, [])

  return (
    <div className={classes.main}>
      <h2 style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
        {' '}
        Movie List
      </h2>
      <div>
        <ul>
          {movies?.map((movie) => {
            return (
              <Btn key={movie.id} movie={movie} movieOnPreview={movieOnPreview}>
                {movie.title}
              </Btn>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default MovieList
