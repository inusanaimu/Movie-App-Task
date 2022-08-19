import React, { useState } from 'react'

const handleClick = (arr) => {
  const value = document.getElementById('search').value.toLowerCase()
  if (value.trim() === '') return
  console.log(value.length)
  const avai = arr.filter((item) => {
    if (item.toLowerCase().includes(value)) {
      return item
    }
    return undefined
  })
  console.log(avai)
}

const Search = ({ movies, movieOnPreview }) => {
  const [searchResult, setSearchResult] = useState(false)
  const titleArray = movies.map((movie) => movie.title)

  return (
    <div>
      <input
        type='search'
        name=''
        id='search'
        placeholder='Search'
        onChange={() => {
          handleClick(titleArray)
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
    </div>
  )
}

export default Search
