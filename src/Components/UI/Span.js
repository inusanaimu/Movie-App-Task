import classes from './Span.module.css'

const Span = (props) => {
  const { clearResult, movieOnPreview, movie } = props

  return (
    <span
      onClick={() => {
        movieOnPreview(movie)
        clearResult()
      }}
      className={classes.list}
      style={{ verticalAlign: 'middle' }}
    >
      <span>{movie.title} </span>
    </span>
  )
}

export default Span
