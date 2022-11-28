import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import { Outlet, useLocation } from "react-router";
import { Link, Navigate } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import items from '../../routers/menu';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import TagsView from './TagsView/TagsView';
import { getToKen } from '../../utils/tokenType';
import { addTagsView, selectTagsViewRoutes } from '../../app/tagsViewSlice/tagsViewSlice';
import { selectBreadcrumb } from '../../app/breadcrumbSlice/breadcrumbSlice';

import './admin.css';
const Admin = () => {
    const { Header, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState<boolean>(false);
    // 初始化redux的调用方法
    const dispatch = useAppDispatch();

    const { pathname } = useLocation();

    const tagsViewListRoutes = useAppSelector(selectTagsViewRoutes);

    // 解决刷新没有tagsView
    const initTagsView = useCallback(() => {
        tagsViewListRoutes.forEach((item) => {
            if (item.path === pathname) {
                dispatch(addTagsView({ path: item.path, name: item.name }));
            };
        })
    }, [tagsViewListRoutes, pathname, dispatch]);

    useEffect(() => { initTagsView() }, [initTagsView]);

    const [openPath, setOpenPath] = useState<string>('');

    const [selKey, setSelKey] = useState<string>('');
    const pathnameArr = pathname.split('/');
    const menuKey = pathnameArr.splice(0, pathnameArr.length - 1).join('/');

    const pathSnippets = pathname.split('/').filter(i => i);
    // 获取redux的Breadcrumb
    const breadcrumbLists = useAppSelector(selectBreadcrumb);
    /** breadcrumb列表 */
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        if (pathname === '/admin/dashboard') {
            return <Fragment key={index}></Fragment>
        };
        return (
            <Breadcrumb.Item key={index}>
                {breadcrumbLists[url]}
            </Breadcrumb.Item>
        );
    });


    const breadcrumbItems = [
        <Breadcrumb.Item key="/">
            {pathname !== '/admin/dashboard' && pathSnippets.length >= 2 ? <Link className={'breadcrumb-active'} to="/admin/dashboard">首页</Link> : (<span>首页</span>)}
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);



    useEffect(() => {
        setOpenPath(menuKey);
        if (pathname === '/admin') {
            setSelKey('/admin/dashboard');
        } else {
            setSelKey(pathname);
        }
    }, [menuKey, pathname]);


    const handleMenu = (openKeys: string[]) => {
        setOpenPath(openKeys[1]);
    };

    const handlesel = (domEvent: any,) => {
        dispatch(addTagsView({ path: domEvent.key, name: domEvent.domEvent.target.textContent }));
    };

    return (
        <Fragment>
            <Layout style={{ overflowX: "hidden", height: "100%" }}>
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
                <div className="site-layout" style={{ width: '100%', display: 'flex', flexDirection: "column", flex: "1", minWidth: "1000px", height: "100%" }}>
                    <Header className="site-layout-background" style={{ padding: 0, display: 'flex', width: '100%' }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                        {
                            pathSnippets.length ?
                                <Breadcrumb separator="/">
                                    {breadcrumbItems}
                                </Breadcrumb>
                                :
                                <></>
                        }
                    </Header>
                    <TagsView />
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                        }}
                    >
                        {/* 渲染子路由 匹配到子路由时，用子路由的组件替换此处内容*/}
                        {/* 类似Vue中的router-view */}
                        {getToKen() ? <Outlet /> : <Navigate to={'/login'} />}
                    </Content>
                </div>
            </Layout>
        </Fragment>
    );
};

export default Admin;