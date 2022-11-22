import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('菜单1', '/page1', <PieChartOutlined />),
    getItem('菜单2', '/page2', <DesktopOutlined />),
    getItem('用户菜单', 'sub1', <UserOutlined />, [
        getItem('小李', '/page3'),
        getItem('小黄', '/page4'),
        getItem('小张', '/page5'),
    ]),
    getItem('菜单3', 'sub2', <TeamOutlined />, [getItem('Team 1', '/page6'), getItem('Team /page1', '/page7')]),
    getItem('菜单4', '/page8', <FileOutlined />),
];

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const handleMenuClick = (e:{key: string}) => {
        console.log("点击了")
        console.log(e.key)
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleMenuClick}/>
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
                        这是一个大的内容区域
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight: "48px" }}>设计者：小李</Footer>
            </Layout>
        </Layout>
    );
};

export default View;