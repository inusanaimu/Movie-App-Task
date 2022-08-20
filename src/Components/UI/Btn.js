import classes from './Btn.module.css'

const Btn = (props) => {
  const { movieOnPreview, movie } = props

  return (
    <li
      onClick={() => {
        movieOnPreview(movie)
      }}
      className={classes.btn}
      style={{ verticalAlign: 'middle' }}
    >
      <span>{movie.title} </span>
    </li>
  )
}

export default Btn
