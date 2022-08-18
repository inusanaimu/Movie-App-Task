import React from 'react'
import Card from '../UI/Card'
import BackDrop from '../UI/BackDrop'
import classes from './MoviePreview.module.css'

const MoviePreview = ({ onPreview }) => {
  const {
    title,
    backdrop_path,
    id,
    original_language,
    overview,
    release_date,
  } = onPreview

  const url = `https://image.tmdb.org/t/p/w300${backdrop_path}`
  const Image = () => {
    return <img src={url} alt={title} />
  }

  return (
    <>
      <BackDrop url={url} />
      <Card>
        <h1> {title}</h1>
        <div>
          <h2>Overview:</h2>
          <span>{overview}</span>
        </div>
        <Image />
      </Card>
    </>
  )
}

export default MoviePreview
