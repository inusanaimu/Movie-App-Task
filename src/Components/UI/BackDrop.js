import React from 'react'
import classes from './BackDrop.module.css'

const BackDrop = ({ url, children }) => {
  return (
    <div
      className={classes.backDrop}
      style={{ backgroundImage: `url(${url})` }}
    >
      {children}
    </div>
  )
}

export default BackDrop
