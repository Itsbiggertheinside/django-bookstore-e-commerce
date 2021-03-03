import React, { Component } from 'react'
import NavbarMenu from '../header/Navbar';
import HeaderSlider from '../header/HeaderSlider';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarMenu />
        <HeaderSlider />
        <Dashboard />
      </div>
    )
  }
}


export default App;
