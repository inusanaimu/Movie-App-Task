import React, { useEffect } from 'react'

import Btn from '../UI/Btn'

const MovieList = ({ movies, movieOnPreview }) => {
  useEffect(() => {
    movieOnPreview(movies[0])
  }, [])

  return (
    <>
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
    </>
  )
}

export default MovieList
