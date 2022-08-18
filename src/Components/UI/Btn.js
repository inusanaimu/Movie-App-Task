import classes from './Btn.module.css'

const Btn = (props) => {
  const { movieOnPreview, movie } = props

  return (
    <button
      onClick={() => {
        movieOnPreview(movie)
      }}
      className={classes.btn}
      style={{ verticalAlign: 'middle' }}
    >
      <span>{movie.title} </span>
    </button>
  )
}

export default Btn
