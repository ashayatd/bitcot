import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Addproduct from '../../src/Pages/addproduct';
import Editproduct from '../../src/Pages/editproduct';
import Login from '../../src/Pages/login';
import Product from '../../src/Pages/products';
import Signup from '../../src/Pages/signup';
import Landing from '../../src/Pages/landing';
import NotFound from '../../src/Pages/notfound';

const RoutesPages = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/editproduct" element={<Editproduct/>} />
        <Route path="/addproduct" element={<Addproduct/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>

  );
};

export default RoutesPages;
