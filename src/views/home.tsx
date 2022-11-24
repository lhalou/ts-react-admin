
import { Breadcrumb, Layout } from 'antd';
import React, { useState} from 'react';
import {  Outlet } from "react-router-dom";
import MainMenu from "@/components/menu/main-menu"
const { Header, Content, Footer, Sider } = Layout;




const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="logo" />
                <MainMenu />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ paddingLeft: 24 }} >
                    <Breadcrumb style={{ lineHeight: "64px" }} >
                        <Breadcrumb.Item>用户</Breadcrumb.Item>
                        <Breadcrumb.Item>小李</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content style={{ margin: '16px 16px 0 16px' }} className="layout-height-container">
                    <div className="site-layout-background layout-height-container" style={{ padding: 24, minHeight: 360 }}>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight: "48px" }}>设计者：小李</Footer>
            </Layout>
        </Layout>
    );
};

export default View;