import React, { Component } from 'react';
import Main from '../partials/Main';
import PageNavbar from '../partials/PageNavbar';
import PageFooter from '../partials/PageFooter';
import DetailPage from '../detailpage/DetailPage';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/detail/:slug' component={DetailPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}


export default App;
