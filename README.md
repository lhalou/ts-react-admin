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
