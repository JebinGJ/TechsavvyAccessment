import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { Layout } from './pages/layout/Layout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Layout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
