import App from "@/App"
import Home from "@/views/home"
import About from "@/views/about"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//一般有逻辑的时候，写return
const baseRoute = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} >
                {/*//用户访问"/"，重定向到"/home"页面*/}
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRoute