import React from 'react'
import Card from '../UI/Card'
import BackDrop from '../UI/BackDrop'

const MoviePreview = ({ onPreview }) => {
  const {
    title,
    backdrop_path,
    original_language,
    overview,
    vote_average,
    release_date,
  } = onPreview

  const url = `https://image.tmdb.org/t/p/w300${backdrop_path}`
  const Image = () => {
    return <img src={url} alt={title} />
  }

  return (
    <div>
      <BackDrop url={url} />
      <Card>
        <h1> {title}</h1>
        <article>
          <Image />
          <article>
            <h2>Overview: </h2>
            <span>{overview}</span>
          </article>
        </article>
        <article>
          <h3>Language:- </h3>
          <span>{original_language}</span>
        </article>
        <article>
          <h3>Release Date:- </h3>
          <span>{release_date}</span>
        </article>
        <article>
          <h3>Rating:- </h3>
          <span>{vote_average}</span>
        </article>
      </Card>
    </div>
  )
}

export default MoviePreview
