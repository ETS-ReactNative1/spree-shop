import React from "react";
import Home from "./pages/Home";
// import Announcements from './components/Announcements';
import "./App.css";
import Cart from "./pages/Cart";
// import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
// import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
} from "react-router-dom";

// import { Routes } from "react-router-dom"
import Products from "./components/Products";

const App = () => {
  const user = true;
  return (
    <div className="App">
    <Home /> 
  
  <main >
{/* 
      <Router> */}
        <Routes>
{/* 
          <Route path="/products/:category" component={<ProductList />}>
            <ProductList />
          </Route> */}



          {/* <Route path="/login">{ user ? <Redirect to="/" /> : <Login /> }</Route>

          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route> */}
        </Routes>
      {/* </Router> */}
  </main>
    </div>
  );
};

export default App;
