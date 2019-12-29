import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'

const Navbar = () => (
  <div className="navbar">
    <p className="title">Guess My Rule</p>
    <div id="right-nav">
      <Link className="navlink" to="/home">Home</Link>
      <Link className="navlink" to="/1">Level 1</Link>
      <Link className="navlink" to="/2">Level 2</Link>
      <Link className="navlink" to="/3">Level 3</Link>
      <Link className="navlink" to="/4">Level 4</Link>
    </div>
  </div>
)

export default Navbar
