import type { MenuProps } from 'antd';
import { NavLink, RouteObject } from 'react-router-dom';
// import { Suspense, lazy } from 'react'
type MenuItem = Required<MenuProps>['items'][number];

function menuItem(path: string, item: string) {
    return (<NavLink to={path}>{item}</NavLink>)
};




const items: MenuItem[] = [
    {
        key: "/admin/dashboard",
        label: menuItem('/admin/dashboard', '仪表盘'),
        icon: '',
        // affix: true
    },
    {
        key: "/admin/user",
        label: '用户管理',
        icon: '',
        children: [
            {
                key: "/admin/user/list",
                label: menuItem('/admin/user/list', '用户列表'),
                icon: '',
            },
            {
                key: "/admin/user/add",
                label: menuItem('/admin/user/add', '添加用户'),
                icon: '',
            }
        ]
    },
    {
        key: "/admin/department",
        label: '部门管理',
        icon: '',
        children: [
            {
                key: "/admin/department/list",
                label: menuItem('/admin/department/list', '部门列表'),
                icon: '',
            },
            {
                key: "/admin/department/add",
                label: menuItem('/admin/department/add', '添加部门'),
                icon: '',
            },
        ]
    },
    {
        key: "/admin/position",
        label: '职位管理',
        icon: '',
        children: [
            {
                key: "/admin/position/list",
                label: menuItem('/admin/position/list', '职位列表'),
                icon: '',
            },
            {
                key: "/admin/position/add",
                label: menuItem('/admin/position/add', '添加职位'),
                icon: '',
            },
        ]
    },
    // {
    //     key: "/staf",
    //     label: '员工管理',
    //     icon: '',
    //     children: [

    //     ]
    // },
    // {
    //     key: "/announcement",
    //     label: '公告管理',
    //     icon: '',
    //     children: [

    //     ]
    // },
    // {
    //     key: "/download",
    //     label: '下载中心',
    //     icon: '',
    //     children: [

    //     ]
    // },
    // {
    //     key: "/attendance",
    //     label: '考勤',
    //     icon: '',
    //     children: [

    //     ]
    // },
    {
        key: "/admin/excusedabsence",
        label: menuItem('/admin/excusedabsence', '请假'),
        icon: '',
    },
    {
        key: "/admin/workovertime",
        label: menuItem('/admin/workovertime', '加班'),
        icon: '',
    }

]


// const router: RouteObject[] = [
//     {
//         path: '/',
//         // name: '数据概览',
//         // element: <Home />
//     },
//     {
//         path: '/login',
//         // name: '内容管理',
//         // element:<Article />
//     },
//     {
//         path: '/admin',
//         // name: '首页',
//         // element:<Publish />
//         children: [
//             // path: '/admin',
//         ]
//     },

//     {
//         path: '/customerlist',
//         // name: '客户列表',
//         // element:<CustomerList />
//     },
//     {
//         path: '/createcustomer',
//         // name: '新建客户',
//         // element:<Createcustomer />
//     },
//     {
//         path: '/scribe',
//         // name: '预约列表',
//         // element:<Scribe />
//     },
//     {
//         path: '/orderlist',
//         // name: '订单列表',
//         // element:<OrderList />
//     },
//     {
//         path: '/createorder',
//         // name: '新建订单',
//         // element:<Createorder />
//     },
//     {
//         path: '/productlist',
//         // name: '商品列表',
//         // element:<ProductList />
//     },
//     {
//         path: '/productcreate',
//         // name: '新建商品',
//         // element:<Createproduct />
//     },
//     {
//         path: '/account',
//         // name: '账号管理',
//         // element:<AccountList />
//     },
//     {
//         path: "*",
//         // name: "404,未找到页面",
//         // element:<Error404 />
//     }
// ]


export default items;