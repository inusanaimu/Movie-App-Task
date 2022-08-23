const Span = (props) => {
  const { clearResult, movieOnPreview, movie } = props

  return (
    <span
      onClick={() => {
        movieOnPreview(movie)
        clearResult()
      }}
    >
      <span>{movie.title} </span>
    </span>
  )
}

export default Span
