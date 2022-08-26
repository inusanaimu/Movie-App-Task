const Card = (props) => {
  return (
    <div className=' max-w-5xl m-auto w-full md:w-4/5 px-4 py-2'>
      <div className=' grid gap-2 grid-cols-2 md:grid-cols-5 overflow-hidden m-auto w-full p-2 md:p-4 border rounded-xl h-62 bg-black opacity-95 text-blue-100 '>
        {props.children}
      </div>
    </div>
  )
}

export default Card
