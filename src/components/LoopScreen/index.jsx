import React from 'react'
import { Link } from 'react-router-dom'

import './LoopScreen.scss'

const Folders = () => {
  return (
    <div className="Folders">
      <h1>Loop folders</h1>
      <div className="loops">
        <Link to="/loop1-Step1">Loop1_Step1</Link>
        <Link to="/loop1-Step2">Loop1_Step2</Link>
        <Link to="/loop1-Step3">Loop1_Step3</Link>
        <Link to="/loop1-Step4">Loop1_Step4</Link>
        <Link to="/loop1-Step5">Loop1_Step5</Link>
        <Link to="/loop1-Step6">Loop1_Step6</Link>
        <Link to="/loop1-Step7">Loop1_Step7</Link>
        <Link to="/loop1-Step8">Loop1_Step8</Link>
        <Link to="/loop1-Step9">Loop1_Step9</Link>
        <Link to="/loop1-Step10">Loop1_Step10</Link>
      </div>
    </div>
  )
}

export default Folders