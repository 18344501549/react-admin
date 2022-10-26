import React from 'react';
import { Routes, Route, } from "react-router-dom";
import Login from './components/Login/login';

import './App.scss';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
