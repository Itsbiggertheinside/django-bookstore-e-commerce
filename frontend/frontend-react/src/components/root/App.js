import React, { Component } from 'react';
import Main from '../partials/Main';
import PageNavbar from '../partials/PageNavbar';
import PageFooter from '../partials/PageFooter';
import DetailPage from '../detailpage/DetailPage';
import OrderPage from '../orderpage/OrderPage';
import AuthPage from '../authenticationpage/AuthPage';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <PageNavbar />
        <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/detail/:slug' component={DetailPage} />
            <Route exact path='/order' component={OrderPage} />
            <Route exact path='/login' component={AuthPage} />
          </Switch>
        </Router>
        <PageFooter />
      </div>
    )
  }
}


export default App;
