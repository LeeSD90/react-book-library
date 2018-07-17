import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Library from './Library/Library'
import NewBookForm from './NewBookForm/NewBookForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Book Library</h1>
        </header>
        <NewBookForm />
        <Library />
      </div>
    );
  }
}

export default App;
