import React from 'react'

import Navbar from './components/Navbar'
import {BrowserRouter, Route, Switch, useParams} from 'react-router-dom'
import {Algebra, Home} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
          <Route exact path="/:id">
            <Algebra />
          </Route> 
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
