//路由表路由写法
import App from "@/App"
import React, { lazy } from "react"
// import Home from "@/views/home"
// import About from "@/views/about"
import  { Navigate } from "react-router-dom";
const Home = lazy(() => import("@/views/home"))
const About = lazy(() => import("@/views/about"))
const routes = [
    {
        path: "/",
        element: <Navigate to={"/home"} />
    },
    {
        path: "/home",
        element: <React.Suspense fallback={<div>Loading...</div>}>
            <Home />
        </React.Suspense>
    },
    {
        path: "/about",
        element:  <React.Suspense fallback={<div>Loading...</div>}>
            <About />
        </React.Suspense>
    }
]

export default routes