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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
      <BrowserRouter >
          <App />
      </BrowserRouter>
  // </React.StrictMode>
)
