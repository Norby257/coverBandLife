import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Container from './components/Container';
import Nav from './components/Nav';
import Header from './components/Header';
import Flexbox from 'flexbox-react';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Header />
      </div>
    );
  }
}

export default App;
