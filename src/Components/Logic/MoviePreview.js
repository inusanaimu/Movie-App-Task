import React from 'react'
import Card from '../UI/Card'
import BackDrop from '../UI/BackDrop'
import classes from './MoviePreview.module.css'

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
    return <img className={classes.image} src={url} alt={title} />
  }

  return (
    <div className={classes.body}>
      <BackDrop url={url} />
      <Card>
        <h1> {title}</h1>
        <article>
          <Image />
          <article>
            <h2 className={classes.overview}>Overview: </h2>
            <span>{overview}</span>
          </article>
        </article>
        <article>
          <h3 className={classes.overview}>Language:- </h3>
          <span>{original_language}</span>
        </article>
        <article>
          <h3 className={classes.overview}>Release Date:- </h3>
          <span>{release_date}</span>
        </article>
        <article>
          <h3 className={classes.overview}>Rating:- </h3>
          <span>{vote_average}</span>
        </article>
      </Card>
    </div>
  )
}

export default MoviePreview
