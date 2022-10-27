import React from 'react';
import { Routes, Route, } from "react-router-dom";
import Login from './components/Login/login';
import Admin from './components/admin/admin';
import './App.scss';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Admin />} path="/admin" />
      </Routes>
    </div>
  );
}

export default App;
