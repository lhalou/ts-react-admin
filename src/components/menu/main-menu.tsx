import {Menu, MenuProps} from "antd";
import React, {useState} from "react";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

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
const MainMenu: React.FC =() => {
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const [menuKey, setMenuKey ] = useState(window.location.pathname);
    // useEffect(()=>{
    //     setMenuKey( window.location.pathname)
    // },[
    //     window.location.pathname
    // ])
    const useNavigateTo = useNavigate()
    const handleMenuClick = (e:{key: string}) => {
        useNavigateTo(e.key)
    }
    const handleOpenChange = (keys:string[]) => {
        //keys: 记录了的当前展开的数组key
        //展开和回收某一项的时候，执行这个函数里面的代码
        //把数组修改为最后一项
        if(keys?.length < 1 ) {
            setOpenKeys(keys)
        }else {
            setOpenKeys([keys[keys.length-1]])
        }
    }
    const handleSelect = (e: {key: string}) => {
        setMenuKey(e.key)
    }
    return (     <Menu
        theme="dark"
    selectedKeys={[menuKey]}
    mode="inline"
    items={items}
    onClick={handleMenuClick}
    onOpenChange={handleOpenChange}
    openKeys={openKeys}
    onSelect={handleSelect}
    />)
}

export default MainMenu