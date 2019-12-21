import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Algebra, Home} from './components'


class Routes extends Component {
  render() {
    return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/algebra" component={Algebra} />
        </Switch>
      </Router>
    )
  }
}

export default Routes