import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: "/console",
        label: '控制台',
        icon: '',
        // element: <Navigate to="/login" />
    },
    {
        key: "/home",
        label: '用户管理',
        icon: '',
        children: [
            {
                key: "/home/index",
                label: '用户列表',
                icon: '',
            },
            {
                key: "/home/user/add",
                label: '添加用户',
                icon: '',
            }
        ]
    },
    {
        key: "/home/department",
        label: '部门管理',
        icon: '',
        children: [
            {
                key: "/home/department/list",
                label: '部门列表',
                icon: '',
            },
            {
                key: "/home/department/add",
                label: '添加部门',
                icon: '',
            },
        ]
    },
    {
        key: "/home/position",
        label: '职位管理',
        icon: '',
        children: [
            {
                key: "/home/position/list",
                label: '部门列表',
                icon: '',
            },
            {
                key: "/home/position/add",
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