import React, { Component } from 'react'
import Dashboard from './Dashboard';
import PageNavbar from '../partials/PageNavbar';
import PageFooter from '../partials/PageFooter';

class App extends Component {
  render() {
    return (
      <div>
        <PageNavbar />
        <Dashboard />
        <PageFooter />
      </div>
    )
  }
}


export default App;
