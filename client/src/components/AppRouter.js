import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import Auth from '../pages/Auth';
import SuAdmin from '../pages/SuAdmin';

const AppRouter = () => {
  const isAuth = true;
  return (
    <Routes>
      <Route path="/" element={''} />
      <Route path="/login" element={<Auth />} />
      <Route path="/registration" element={<Auth />} />
      <Route path="/suAdmin" element={<SuAdmin />} />
    </Routes>
  );
};

export default AppRouter;
