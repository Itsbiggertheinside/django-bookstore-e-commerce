import React, { Component } from 'react'
import NavbarMenu from '../navs/Navbar';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarMenu />
        <Dashboard />
      </div>
    )
  }
}


export default App;
