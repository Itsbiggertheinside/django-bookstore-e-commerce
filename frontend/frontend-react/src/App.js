import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import PageNavbar from './components/partials/PageNavbar'
import PageFooter from './components/partials/PageFooter'

import Home from './pages/Home'
import Detail from './pages/Detail'
import Order from './pages/Order'
import Auth from './pages/Auth'



class App extends Component {
  render() {
    return (
      <div>
        <PageNavbar />
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/order' component={Order} />
              <Route exact path='/login' component={Auth} />
              
              <Route path='/detail/:slug' component={Detail} />
            </Switch>
          </Router>
        <PageFooter />
      </div>
    )
  }
}


export default App;
