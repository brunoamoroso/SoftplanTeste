import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Sidenav from './Sidenav.js';
import Search from './Search.js';
import ContainerProcessos from './ContainerProcessos.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidenav />
        <Search />
        <ContainerProcessos />
      </div>
    );
  }
}

export default App;
