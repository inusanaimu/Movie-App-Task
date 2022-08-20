import React from 'react'
import Span from '../UI/Span'

const ResultList = ({ clearResult, movies, movieOnPreview }) => {
  return (
    <ul>
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
