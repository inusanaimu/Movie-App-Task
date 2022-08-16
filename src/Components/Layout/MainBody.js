import React from 'react'
import clasess from './MainBody.module.css'
const MainBody = (props) => {
  return <main className={clasess.main}>{props.children}</main>
}

export default MainBody
