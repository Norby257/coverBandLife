import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import SetLists from './components/Aside/SetLists';
import AddSetList from './components/Aside/AddSetList';
import Flexbox from 'flexbox-react';
import Lyrics from './components/Lyrics';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Header />
      <Main />
      <SetLists />
      <AddSetList />
      <Lyrics />
      </div>
    );
  }
}

export default App;
