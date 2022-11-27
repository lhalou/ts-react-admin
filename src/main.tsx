import React from 'react'
import ReactDOM from 'react-dom/client'
//初始化样式一般放在最前面
import "reset-css"
//UI框架样式
//全局样式
// import Router from "@/router"
import "@/assets/style/globa.scss"
//组件样式
import App from './App'
import { BrowserRouter } from "react-router-dom";
//状态管理
import { Provider} from "react-redux";
import Store from "@/store"
//项目与状态关联上
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={Store}>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </Provider>

)
