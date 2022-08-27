import React, { useState } from 'react'

import ResultList from './ResultList'

const Search = ({ movies, movieOnPreview }) => {
  const [searchResult, setSearchResult] = useState([])
  let available = []

  const handleClick = (arr) => {
    const value = document.getElementById('search').value.toLowerCase()
    if (value.trim() === '') {
      setSearchResult([])
      return
    }
    available = arr.filter((item) => {
      let title = item.title.toLowerCase()
      if (title.includes(value)) {
        return item
      }
      return undefined
    })
    setSearchResult(available)
  }

  const clearResult = () => {
    setSearchResult([])
  }

  const handleBlur = () => {
    let value = document.getElementById('search')
    if (value.value.trim() === '') {
      clearResult()
    } else {
      value.value = ''
    }
  }

  return (
    <div className=' m-auto relative '>
      <input
        className=' w-20 md:w-40 mx-1 md:mx-2 bg-slate-200 px-2 md:px-3 py-1 align-bottom rounded-md '
        type='search'
        name='search'
        id='search'
        placeholder='Search'
        onChange={() => {
          handleClick(movies)
        }}
        onBlur={() => {
          handleBlur()
        }}
      />
      <button
        className=' ml-2 bg-slate-200 px-3 py-1 rounded-md align-bottom '
        type='button'
        onClick={() => {
          handleClick(movies)
        }}
      >
        Search
      </button>
      <div>
        {searchResult.length ? (
          <ResultList
            clearResult={clearResult}
            movieOnPreview={movieOnPreview}
            movies={searchResult}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Search
