import React from 'react'

const MoviePreview = ({ onPreview }) => {
  return (
    <div>
      <h1>{onPreview?.title}</h1>
    </div>
  )
}

export default MoviePreview
