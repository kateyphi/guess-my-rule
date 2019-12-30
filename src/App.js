import React from 'react'

import Navbar from './components/Navbar'
import {BrowserRouter, Route, Switch, Link, withRouter} from 'react-router-dom'
import {Table, Home} from './components'

const App = () => {
  return (
    <BrowserRouter>
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
      <Switch>
          <Route exact path="/" children={<Home />} />
          <Route exact path="/home" children={<Home />} />
          <Route exact path="/:id" component={Table} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
