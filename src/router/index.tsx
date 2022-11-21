import App from "@/App"
import Home from "@/views/home"
import About from "@/views/about"
import { BrowserRouter, Route, Routes } from "react-router-dom";
//一般有逻辑的时候，写return
const baseRoute = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} >
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRoute