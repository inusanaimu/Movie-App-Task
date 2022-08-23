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
    return (
      <div className=' md:col-span-2'>
        <img
          className=' max-h-44 w-full border-black border-4 '
          src={url}
          alt={title}
        />
        <h1 className=' md:text-xl text-lg'> {title}</h1>
        <article className=' inline-block md:hidden text-xs'>
          <div className='grid grid-cols-2 '>
            <h3>Language:- </h3>
            <span>{original_language}</span>
            <h3>Release Date:- </h3>
            <span>{release_date}</span>
            <h3>Rating:- </h3>
            <span>{vote_average}</span>
          </div>
        </article>
      </div>
    )
  }

  return (
    <>
      <BackDrop url={url} />
      <Card>
        <Image />
        <article className='hidden md:block'>
          <div className='grid grid-cols-2 '>
            <h3>Language:- </h3>
            <span>{original_language}</span>
            <h3>Release Date:- </h3>
            <span>{release_date}</span>
            <h3>Rating:- </h3>
            <span>{vote_average}</span>
          </div>
        </article>
        <article className='md:col-span-2'>
          <h2>Overview: </h2>
          <span className=' text-xs md:text-sm '>{overview}</span>
        </article>
      </Card>
    </>
  )
}

export default MoviePreview
