import React, { useEffect } from 'react'

import Btn from '../UI/Btn'

const MovieList = ({ movies, movieOnPreview }) => {
  useEffect(() => {
    movieOnPreview(movies[Math.floor(Math.random() * 20)])
  }, [])

  return (
    <div className=' m-auto w-full md:w-4/5 px-4 py-4'>
      <div className=' w-full  '>
        <h2> Movie List</h2>
      </div>
      <div className=' grid md:grid-cols-3 grid-cols-2 gap-2 content-evenly justify-items-stretch'>
        {movies?.map((movie) => {
          return (
            <Btn key={movie.id} movie={movie} movieOnPreview={movieOnPreview}>
              {movie.title}
            </Btn>
          )
        })}
      </div>
    </div>
  )
}

export default MovieList
