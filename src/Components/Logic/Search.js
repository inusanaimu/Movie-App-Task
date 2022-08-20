import React, { useState } from 'react'

import ResultList from './ResultList'
import classes from './Search.module.css'

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

  const handleBlur = () => {
    setSearchResult([])
  }

  return (
    <div className={classes.parent}>
      <input
        type='search'
        name=''
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
        type='button'
        // onClick={() => {
        //   handleClick(titleArray)
        // }}
      >
        Search
      </button>
      <div className={classes.searchResult}>
        <ResultList movieOnPreview={movieOnPreview} movies={searchResult} />
      </div>
    </div>
  )
}

export default Search
