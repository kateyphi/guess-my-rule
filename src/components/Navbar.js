import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'

const Navbar = () => (
  <div className="navbar">
    <p className="title">Guess My Rule</p>
    <div id="right-nav">
      <Link className="navlink" to="/home">Home</Link>
      <Link className="navlink" to="/1">Level 1</Link>
    </div>
  </div>
)

export default Navbar
