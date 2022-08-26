const Btn = (props) => {
  const { movieOnPreview, movie } = props
  const {
    title,
    backdrop_path,
    original_language,
    vote_average,
    release_date,
  } = movie

  const url = `https://image.tmdb.org/t/p/w300${backdrop_path}`
  // const Image = () => {
  //   return <img src={url} alt={title} />
  // }
  return (
    <div
      className=' ease-linear duration-300 h-36 bg-center rounded-xl relative'
      onClick={() => {
        movieOnPreview(movie)
      }}
    >
      {' '}
      <div
        style={{ backgroundImage: `url(${url})` }}
        className=' absolute w-full h-full bg-no-repeat bg-cover rounded-xl '
      ></div>
      <div className=' overflow-auto py-2 px-3 w-full h-full bg-black opacity-20 hover:opacity-95 hover:cursor-pointer rounded-xl text-white border'>
        <h3 className='text-lg font-bold '>{title}</h3>
        <h5 className='text-sm font-normal '>
          <span className=' '>Release Date:- </span>
          {release_date}
        </h5>
        <h5 className='text-sm font-normal '>
          <span className=' '>Language:- </span>
          {original_language}
        </h5>
        <h5 className='text-sm font-normal '>
          <span className=' '>Rating:- </span>
          {vote_average}
        </h5>
        {/* <details className='text-sm font-normal '>
          <span className=' '>Overview:- </span>
          {overview}
        </details> */}
      </div>
    </div>
  )
}

export default Btn
