//路由表路由写法
import App from "@/App"
import React, { lazy } from "react"
// import Home from "@/views/home"
// import About from "@/views/about"
import  { Navigate } from "react-router-dom";
import WiteLoading from "@/components/template/wite-loading"
const Home = lazy(() => import("@/views/home"))
const About = lazy(() => import("@/views/about"))

const routes = [
    {
        path: "/",
        element: <Navigate to={"/home"} />
    },
    {
        path: "/home",
        element: WiteLoading( <Home />)
    },
    {
        path: "/about",
        element:  WiteLoading( <About />)
    }
]

export default routes