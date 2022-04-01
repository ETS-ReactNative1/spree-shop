import React from "react";
import Home from "./pages/Home";
// import Announcements from './components/Announcements';
import "./App.css";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import { Route, Redirect, Routes } from "react-router-dom";

// import { Routes } from "react-router-dom"
import Products from "./components/Products";

const App = () => {
  const user = true;
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home />}>
          {/* <Home /> */}
        </Route>
        <Route path="/products/:category" element={<ProductList />} />

        <Route path="/products/:id" element={<Products />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/product" element={<Product />} />

        <Route path="/login" element={<Login />}>
          {/* { user ? <Redirect to="/"/> : "/login" } */}
        </Route>
        <Route path="/register" element={<Register />}>

        </Route> 

        {/* <Route path="/login" element={<Login />} >

        </Route>
        <Route path="/register" element={<Register />}>

        </Route>  */}
      </Routes>
    </div>
  );
};

export default App;
