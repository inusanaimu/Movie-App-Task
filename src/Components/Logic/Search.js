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
    const value = document.getElementById('search').value
    if (value.trim() === '') {
      clearResult()
    }
  }

  return (
    <div className=' m-auto relative '>
      <input
        className=' mx-2 bg-slate-200 px-3 py-1 align-bottom rounded-md '
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
        <ResultList
          clearResult={clearResult}
          movieOnPreview={movieOnPreview}
          movies={searchResult}
        />
      </div>
    </div>
  )
}

export default Search
