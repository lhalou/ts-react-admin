import {Menu, MenuProps} from "antd";
import React, {useState} from "react";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

const items:MenuItem[] = [
    {
        label: "菜单1",
        key: "/page1",
        icon:  <PieChartOutlined />
    },
    {
        label: "菜单2",
        key: "/page2",
        icon:  <DesktopOutlined />
    },
    {
        label: "菜单3",
        key: "/page3",
        icon:  <UserOutlined />,
        children: [
            {
                label: "小李",
                key: "/page3/page301",
            },
            {
                label: "小黄",
                key: "/page3/page302",
            },
        ]
    },
    {
        label: "菜单4",
        key: "/page4",
        icon:  <TeamOutlined />,
        children: [
            {
                label: "temp1",
                key: "/page4/page401",
            },
            {
                label: "temp2",
                key: "/page4/page402",
            },
        ]
    },
    {
        label: "菜单5",
        key: "/page5",
        icon:  <FileOutlined />
    },
]
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