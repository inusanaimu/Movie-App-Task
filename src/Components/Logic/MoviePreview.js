import React from 'react'
import Card from '../UI/Card'
import BackDrop from '../UI/BackDrop'

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
    <div>
      <BackDrop url={url}>{/* <Image /> */}</BackDrop>
      <Card>
        <h1> {title}</h1>
      </Card>
    </div>
  )
}

export default MoviePreview
