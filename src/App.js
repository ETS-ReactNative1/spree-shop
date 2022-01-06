import React, { Component } from 'react';
// import Home from './pages/Home';
// import Announcements from './components/Announcements';
import './App.css';
import ProductList from './pages/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ProductList />
      </div>
    );
  }
}

export default App;
