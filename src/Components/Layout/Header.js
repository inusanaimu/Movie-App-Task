import React from 'react'

import clasess from './Header.module.css'

const Header = (props) => {
  return <header className={clasess.header}>{props.children}</header>
}

export default Header
