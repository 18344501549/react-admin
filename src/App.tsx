import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login/login';
import Admin from './components/admin/admin';
import Dashboard from './components/dashboard/Dashboard';
import UserList from './components/User/UserList';
import UserAdd from './components/User/UserAdd';
import './App.scss';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} >
          {/* index类似vue中的router-view的重定向，会主动触发二级路由 */}
          <Route index path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/user'>
            <Route path='/admin/user/list' element={<UserList />} />
            <Route path='/admin/user/add' element={<UserAdd />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={'/login'} />} />
      </Routes>
    </div>
  );
}

export default App;
