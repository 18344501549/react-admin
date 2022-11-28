import React from 'react';
import { Navigate, useRoutes } from "react-router-dom";
import Login from '../components/Login/login';
import Admin from '../components/admin/admin';
import Dashboard from '../components/dashboard/Dashboard';
import UserList from '../components/User/UserList';
import UserAdd from '../components/User/UserAdd';
import DepartmentList from '../components/department/DepartmentList';
import DepartmentAdd from '../components/department/DepartmentAdd';
import PositionList from '../components/position/PositionList';
import PositionAdd from '../components/position/PositionAdd';
import Excusedabsence from '../components/excusedabsence/Excusedabsence';
import Workovertime from '../components/workovertime/Workovertime';

// export interface IRoute {
//     path: string,
//     element?: React.ReactNode,
//     children?: IRoute[]
// };

/**路由 */
const UseroutesIndex = () => {
    const routes: any = useRoutes([
        {
            path: '/',
            element: <Navigate to={'/login'} />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/admin',
            element: <Navigate to={'/admin/dashboard'} />
        },
        {
            path: '/admin',
            element: <Admin />,
            children: [
                {
                    path: '/admin/dashboard',
                    element: <Dashboard />
                },
                {
                    path: '/admin/department',
                    children: [
                        {
                            path: '/admin/department/list',
                            element: <DepartmentList />
                        },
                        {
                            path: '/admin/department/add',
                            element: <DepartmentAdd />
                        },
                    ]
                },
                {
                    path: '/admin/user',
                    children: [
                        {
                            path: '/admin/user/list',
                            element: <UserList />
                        },
                        {
                            path: '/admin/user/add',
                            element: <UserAdd />
                        },
                    ]
                },
                {
                    path: '/admin/position',
                    children: [
                        {
                            path: '/admin/position/list',
                            element: <PositionList />
                        },
                        {
                            path: '/admin/position/add',
                            element: <PositionAdd />
                        },
                    ]
                },
                {
                    path: '/admin/excusedabsence',
                    element: <Excusedabsence />
                },
                {
                    path: '/admin/workovertime',
                    element: <Workovertime />
                }
            ]
        },

        {
            path: '*',
            element: (<Navigate to={'/login'} />)
        }
    ]);

    return routes;
};




export default UseroutesIndex;


