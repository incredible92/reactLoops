import React from 'react'
import { Link } from 'react-router-dom'

import './LoopScreen.scss'

const Folders = () => {
  return (
    <div className="Folders">
      <h1>Loop folders</h1>
      <div className="loops">
        <Link to="/loop1">Loop1_Step1</Link>
        <Link to="/loop1">Loop1_Step2</Link>
        <Link to="/loop1">Loop1_Step3</Link>
      </div>
    </div>
  )
}

export default Folders