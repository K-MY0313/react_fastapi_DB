import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  SelectionPage from './pages/first';
import EmployeegetForm from './pages/get';
import EmployeepostForm from './pages/post';

const App = () => {
  return (
   
   
      <Routes>
        <Route path="/" element={< SelectionPage />} />
        <Route path="/get" element={<EmployeegetForm />} />
        <Route path="/post" element={<EmployeepostForm />} />
      </Routes>
 
  );
};

export default App;