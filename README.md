### 项目安装

1. 安装node  16.17.1
2. npm init vite
3. npm run dev: 启动项目
```
"scripts": {
    "dev": "vite --host --port 3000 --open",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  --host  域名为host
  --port 3000  指定端口为3000 
  --open 默认打开浏览器
```

### 样式初始化

1. reset-css :npm i reset-css
2. 全局引用 import "reset-css"  初始化引入
3. 样式引入顺序
    - 初始化样式一般放在最前面
    - UI框架样式
    - 组件样式

### SCSS的安装和使用

1. 安装
`npm i --save-dev sass`
2. --save-dev : devDependencies 开发环境的依赖,执行打包命令之后，不会被打包进去、
3. user-select: none; 取消文字的选中
4. -webkit-user-drag: none; 禁止拖欠的拖动

### 路径别名的配置

1. 在vite.config.js中配置
2. 引入path
3. alias: {"@":path.resolve(__dirname,'./src)}
4. 有node环境就应该有path，但是由于使用的是ts，还需要引入path
`npm i -D @types/node`
```
resolve: {
    alias: {
      "@": path.resolve(__dirname,'./src')
    }
  }
```

### 配置路径别名提示

1. 在tsconfig.json中进行配置
```
"compilerOptions": {
   baseUrl: "./",
   "paths": {
      "@/*": [
         "src/*"
      ]
   }
}
```

### scss文件的全局引入会影响其他组件

1. import "./index.scss" //全局引入，会影响到其他组件

### scss的模块化管理方式

1. 为解决上述样式互相影响覆盖的问题，引入了模块化的管理模式
2. 文件名称：index.module.scss
3. 引入：import styles from "./index.module.scss"
4. 使用：<div className = "styles.test1" />

### Antd的初步使用

1. npm i antd --save
2. 安装图标所需要的模块
`npm install --save @ant-design/icons`
3. 模块的按需引入

### 配置Antd样式的自动按需引入

1. npm install vite-plugin-style-import@1.4.1 -D
```
plugns: [
   react(),
   styleImport({
      resolves: [
         AntdResolve()
      ]
   })
]
```
2. 安装less：npm i less@2.7.1 -D
3. antd5.0 已经不需要配置文件样式的按需引入了

### 路由基本配置

1. 安装路由：react-router-dom
2. 路由组件
3. 路由两种模式:BrowserRouter（history模式）， HashRouter（Hash模式）
```
 <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} >
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
            </Route>
        </Routes>
    </BrowserRouter>
```

### 实现路由跳转

1. Link

### 路由重定向

1. Navigate
2. ` <Route path="/" element={<Navigate to="/home" />} />`

### 路由表写法

```
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
//入口文件
  <BrowserRouter >
          <App />
      </BrowserRouter>
//App组件
//hooks路由
   const outLet = useRoutes(route)
   { outLet }
```

### 路由懒加载

1. 懒加载模式，需要给懒加载的组件添加一个懒加载模式，loading组件
```
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
        element: <React.Suspense fallback={<div>Loading</div>}>
            <Home />
        </React.Suspense>
    },
    {
        path: "/about",
        element:  <React.Suspense fallback={<div>Loading</div>}>
            <About />
        </React.Suspense>
    }
]

export default routes
```

### 抽取Loading组件函数

```
import React from "react"

const WiteLoading = (comp:JSX.Element) => {
    return (<React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>)
}

export default WiteLoading
```

### 首页布局的解决方案

1. antd的layout布局

### 点击跳转

1. 直接在代码中实现路由的跳转，叫编程式导航跳转，利用到一个hook 
```
import { useNavigate } from "react-router-dom";
 const useNavigateTo = useNavigate()
 useNavigateTo("/page")
```
```
//配置嵌套路由表
const routes = [
    {
        path: "/",
        element: <Navigate to={"/page1"} />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element:  WiteLoading( <Page1 />)
            },
            {
                path: "/page2",
                element:  WiteLoading( <Page2 />)
            }
        ]
    },

]


```

