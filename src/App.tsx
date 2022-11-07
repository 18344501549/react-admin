import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login/login';
import Admin from './components/admin/admin';
import Dashboard from './components/dashboard/Dashboard';
import UserList from './components/User/UserList';
import UserAdd from './components/User/UserAdd';
import DepartmentList from './components/department/DepartmentList';
import DepartmentAdd from './components/department/DepartmentAdd';
import PositionList from './components/position/PositionList';
import PositionAdd from './components/position/PositionAdd';
import Excusedabsence from './components/excusedabsence/Excusedabsence';
import Workovertime from './components/workovertime/Workovertime';

import './App.scss';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        {/* Navigate 重定向子路由 如果嵌套需要两个路径相同路由，一个用于重定向 */}
        <Route path='/admin' element={<Navigate to={'/admin/dashboard'} />} />
        <Route path="/admin" element={<Admin />} >

          <Route path='/admin/dashboard' element={<Dashboard />} />

          <Route path='/admin/user'>
            <Route path='/admin/user/list' element={<UserList />} />
            <Route path='/admin/user/add' element={<UserAdd />} />
          </Route>

          <Route path='/admin/department'>
            <Route path='/admin/department/list' element={<DepartmentList />} />
            <Route path='/admin/department/add' element={<DepartmentAdd />} />
          </Route>

          <Route path='/admin/position'>
            <Route path='/admin/position/list' element={<PositionList />} />
            <Route path='/admin/position/add' element={<PositionAdd />} />
          </Route>

          <Route path="/admin/excusedabsence" element={<Excusedabsence />} />

          <Route path="/admin/workovertime" element={<Workovertime />} />

        </Route>
        <Route path="*" element={<Navigate to={'/login'} />} />
      </Routes>
    </div>
  );
}

export default App;
