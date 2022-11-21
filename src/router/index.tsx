//路由表路由写法
import App from "@/App"
import Home from "@/views/home"
import About from "@/views/about"
import  { Navigate } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: <Navigate to={"/home"} />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/abput",
        element: <About />
    }
]

export default routes