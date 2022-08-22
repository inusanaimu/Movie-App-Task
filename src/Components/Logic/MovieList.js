import React, { useEffect } from 'react'

import Btn from '../UI/Btn'

const MovieList = ({ movies, movieOnPreview }) => {
  useEffect(() => {
    movieOnPreview(movies[Math.floor(Math.random() * 20)])
  }, [])

  return (
    <div>
      <h2 style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>
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
