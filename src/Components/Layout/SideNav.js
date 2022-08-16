import React from 'react'
import clasess from './SideNav.module.css'

const SideNav = (props) => {
  return <aside className={clasess.sideNav}>{props.children}</aside>
}

export default SideNav
