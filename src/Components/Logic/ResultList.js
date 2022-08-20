import React from 'react'
import Span from '../UI/Span'

const ResultList = ({ movies, movieOnPreview }) => {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <>
            <li>
              <Span
                key={movie.id}
                movie={movie}
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
