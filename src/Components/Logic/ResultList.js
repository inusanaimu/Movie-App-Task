import React from 'react'
import Span from '../UI/Span'

const ResultList = ({ clearResult, movies, movieOnPreview }) => {
  return (
    <ul className=' absolute rounded-md my-2 mx-2 z-20 bg-gray-100 '>
      {movies.map((movie) => {
        return (
          <>
            <li>
              <Span
                key={movie.id}
                movie={movie}
                clearResult={clearResult}
                movieOnPreview={movieOnPreview}
              >
                {movie.title}
              </Span>
            </li>
          </>
        )
      })}
    </ul>
  )
}

export default ResultList
