import React, { Component } from 'react';
import Home from './pages/Home';
import Announcements from './components/Announcements';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Home />
      </div>
    );
  }
}

export default App;
