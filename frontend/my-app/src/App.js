import React from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage, SelectionPage } from './pages/LoginAndSelection';
import EmployeegetForm from './pages/get';
import EmployeepostForm from './pages/post';

const App = () => {
  return (
   
   
      <Routes>
       <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/selection" element={<SelectionPage />} />
        <Route path="/get" element={<EmployeegetForm />} />
        <Route path="/post" element={<EmployeepostForm />} />
      </Routes>
 
  );
};

export default App;