import Li from '../UI/Li'

import data from '../../data'
const movies = data

const MovieList = ({ movieOnPreview }) => {
  const handleClick = (movie) => {
    movieOnPreview(movie)
  }
  return (
    <>
      <div> Movie List</div>
      <ul>
        {movies.map((movie) => {
          // console.log(movie)
          return (
            <span onClick={handleClick}>
              <Li>{movie.title}</Li>
            </span>
          )
        })}
      </ul>
    </>
  )
}

export default MovieList
