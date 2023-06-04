import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const isAuth = userData ? true : false;

  return isAuth ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
