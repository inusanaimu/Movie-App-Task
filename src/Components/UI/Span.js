import classes from './Span.module.css'

const Span = (props) => {
  const { movieOnPreview, movie } = props

  return (
    <span
      onClick={() => {
        movieOnPreview(movie)
      }}
      className={classes.btn}
      style={{ verticalAlign: 'middle' }}
    >
      <span>{movie.title} </span>
    </span>
  )
}

export default Span
