//路由表路由写法
import App from "@/App"
import React, { lazy } from "react"
// import Home from "@/views/home"
// import About from "@/views/about"
import  { Navigate } from "react-router-dom";
import WiteLoading from "@/components/template/wite-loading"
const Page1 = lazy(() => import("@/views/page1"))
const Page2 = lazy(() => import("@/views/page2"))
const Page3 = lazy(() => import("@/views/page3"))
const Home = lazy(() => import("@/views/home"))
//配置嵌套路由表
const routes = [
    {
        path: "/",
        element: <Navigate to={"/page1"} />
    },
    {
        path: "/",
        element: WiteLoading( <Home />),
        children: [
            {
                path: "/page1",
                element:  WiteLoading( <Page1 />)
            },
            {
                path: "/page2",
                element:  WiteLoading( <Page2 />)
            },
            {
                path: "/page3",
                element:  WiteLoading( <Page3 />)
            }
        ]
    },

]

export default routes