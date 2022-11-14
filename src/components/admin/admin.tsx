import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import { Outlet, useLocation } from "react-router";
import { Navigate } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import React, { useEffect, useState } from 'react';
import items from '../../routers/index';
import TagsView from './TagsView/TagsView';
import { getToKen } from '../../utils/tokenType';
import './admin.scss';
const Admin = () => {
    const { Header, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const { pathname } = useLocation();
    const [openPath, setOpenPath] = useState<string>('');
    const [selKey, setSelKey] = useState<string>('');
    const pathnameArr = pathname.split('/');
    const menuKey = pathnameArr.splice(0, pathnameArr.length - 1).join('/');
    const [tagsName, setTagsName] = useState<any[]>([{ name: '仪表盘', path: '/admin/dashboard', affix: true }]);


    // const 
    useEffect(() => {

        setOpenPath(menuKey);
        if (pathname === '/admin') {
            setSelKey('/admin/dashboard');
        } else {
            setSelKey(pathname);
        }
    }, [menuKey, pathname, tagsName.length]);


    const handleMenu = (openKeys: string[]) => {
        setOpenPath(openKeys[1]);
    };

    const handlesel = (domEvent: any,) => {
        setTagsName([...tagsName, { name: domEvent.domEvent.target.innerHTML, path: domEvent.key }]);


    };

    return (
        <div id='admin'>
            <Layout className='ant-layouts'>
                <Sider trigger={null} collapsible collapsed={collapsed} width="254">
                    <div className="logo">偶买噶</div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        selectedKeys={[selKey]}
                        openKeys={[openPath]}
                        onOpenChange={handleMenu}
                        onSelect={handlesel}
                        items={items}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}

                    </Header>
                    <TagsView tagsName={tagsName} selKey={selKey} />
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 200,
                        }}
                    >
                        {/* 渲染子路由 匹配到子路由时，用子路由的组件替换此处内容*/}
                        {/* 类似Vue中的router-view */}
                        {getToKen() ? <Outlet /> : <Navigate to={'/login'} />}
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Admin;