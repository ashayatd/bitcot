import React from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../Pages/products';

function Auth({ element }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  if (!token) {
    alert('You need to login');
    navigate('/login');
    return null; // Return null to prevent rendering anything in case of no token
  }

  return element;
}

export default Auth;
