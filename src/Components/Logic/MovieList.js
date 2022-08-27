import React, { useEffect, useCallback } from 'react'

import MovieCard from '../UI/MovieCard'

const MovieList = ({ movies, movieOnPreview }) => {
  const selectMovie = useCallback(() => {
    movieOnPreview(movies[Math.floor(Math.random() * 20)])
  }, [movies, movieOnPreview])

  useEffect(() => {
    selectMovie()
  }, [selectMovie])

  return (
    <div className=' max-w-5xl m-auto w-full md:w-4/5 px-4 py-4'>
      <div className=' p-2 w-full border bg-gray-100 rounded-md mb-4 '>
        <h2 className=' text-2xl font-bold '> Movie List</h2>
      </div>
      <div className=' grid md:grid-cols-3 grid-cols-2 gap-2 content-evenly justify-items-stretch'>
        {movies?.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              movieOnPreview={movieOnPreview}
            >
              {movie.title}
            </MovieCard>
          )
        })}
      </div>
    </div>
  )
}

export default MovieList
