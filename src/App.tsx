import React from 'react';
// import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home/home';
import About from './components/about/about';
// import { Button } from 'antd';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Home</Link>
      {/* <Button type="primary">Button</Button> */}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
  );
}

export default App;
