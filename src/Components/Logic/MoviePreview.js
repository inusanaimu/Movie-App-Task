import React from 'react'

const MoviePreview = ({ onPreview }) => {
  return (
    <div>
      <h1>{onPreview?.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${onPreview.backdrop_path}`}
        alt={onPreview.title}
        width={200}
        height={200}
      />
    </div>
  )
}

export default MoviePreview
