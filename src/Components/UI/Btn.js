import classes from './Btn.module.css'

const Btn = (props) => {
  const { movieOnPreview, movie } = props

  return (
    <button
      onClick={() => {
        movieOnPreview(movie)
      }}
      className={classes.btn}
    >
      {movie.title}
    </button>
  )
}

export default Btn
