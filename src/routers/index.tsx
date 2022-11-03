import type { MenuProps } from 'antd';
import { NavLink } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];

function menuItem(path: string, item: string) {
    return (<NavLink to={path}>{item}</NavLink>)
};

// menuItem('/dashboard', '仪表盘')
const items: MenuItem[] = [
    {
        key: "/admin/dashboard",
        label: menuItem('/admin/dashboard', '仪表盘'),
        icon: '',
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
                label: '部门列表',
                icon: '',
            },
            {
                key: "/admin/department/add",
                label: '添加部门',
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
                label: '部门列表',
                icon: '',
            },
            {
                key: "/admin/position/add",
                label: '添加部门',
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
        key: "/excusedabsence",
        label: '请假',
        icon: '',
    },
    {
        key: "/workovertime",
        label: '加班',
        icon: '',
    }

]


export default items;