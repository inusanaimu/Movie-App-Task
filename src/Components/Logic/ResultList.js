import React from 'react'
import Span from '../UI/Span'

const ResultList = ({ clearResult, movies, movieOnPreview }) => {
  return (
    <ul className=' absolute rounded-md my-2 mx-2 z-20 bg-gray-200 p-2 w-52 '>
      {movies.map((movie) => {
        return (
          <>
            <li className=' w-full border-b border-gray-300 px-1 bg-slate-50 cursor-pointer my-2 block '>
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
