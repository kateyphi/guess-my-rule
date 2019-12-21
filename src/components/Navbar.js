import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'

const Navbar = () => (
  <div>
    <p>Guess My Rule</p>
    <Router>
      <Link className="navlink" to="/home">Home</Link>
      <Link className="navlink" to="/algebra">Algebra Game</Link>
    </Router>
  </div>
)

export default Navbar
