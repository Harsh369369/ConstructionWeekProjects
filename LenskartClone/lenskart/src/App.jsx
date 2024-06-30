import "./App.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import OurPurpose from "./pages/OurPurpose";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";


function App() {
  return (
    <>
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-purpose" element={<OurPurpose />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
