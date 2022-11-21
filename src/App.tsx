import { useState } from 'react'
import Test1 from "@/components/test1"
import Test2 from "@/components/test2"
import { Button } from "antd"
import { UpCircleOutlined } from "@ant-design/icons"
import { Outlet, Link, useRoutes } from "react-router-dom";
import route from "@/router"
function App() {
  const [count, setCount] = useState(0)
    const [link,setLink] = useState("/home")
   const handleClick = () => {
      if(link== "/home") {
          setLink("/about")
      }else {
          setLink("/home")
       }

   }

    const outLet = useRoutes(route)
  return (
    <div className="App">
        {/*<Test1 />*/}
        {/*<Test2 />*/}
        {/*<Button type="primary">点击按钮</Button>*/}
        {/*<UpCircleOutlined />*/}
        {/*占位符，类似于窗口，用来展示组件，有点像vue中的vue-view*/}
        {/*<Link to={link}>{`${link === "/home" ? "home" : "about"}`}</Link>*/}
        {/*<Button onClick={handleClick}>点击</Button>*/}
        {/*/!*<Outlet />*!/*/}
        { outLet }

    </div>
  )
}

export default App
