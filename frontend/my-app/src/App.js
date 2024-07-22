import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeegetForm from './pages/get';
import EmployeepostForm from './pages/post';

const App = () => {
  return (
   
   
      <Routes>
        <Route path="/" element={<EmployeegetForm />} />
        <Route path="/post" element={<EmployeepostForm />} />
      </Routes>
 
  );
};

export default App;