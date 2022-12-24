import React from 'react'

import "./mainHeader.scss"

function MainHeader(props) {
  return (
    <header className="main-header">
      {props.children}
    </header>
  )
}

export default MainHeader
