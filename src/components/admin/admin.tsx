import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import { Outlet } from "react-router-dom";
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import items from '../../routers/index';
import './admin.scss';

const Admin = () => {
    const { Header, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div id='admin'>
            <Layout className='ant-layouts'>
                <Sider trigger={null} collapsible collapsed={collapsed} width="254">
                    <div className="logo">偶买噶</div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['/admin/dashboard']}
                        defaultOpenKeys={['/admin/dashboard']}
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
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {/* 渲染子路由 匹配到子路由时，用子路由的组件替换此处内容*/}
                        {/* 类似Vue中的router-view */}
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Admin;