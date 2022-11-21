import { useState } from 'react'
import Test1 from "@/components/test1"
import Test2 from "@/components/test2"
import { Button } from "antd"
import { UpCircleOutlined } from "@ant-design/icons"
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Test1 />
        <Test2 />
        <Button type="primary">点击按钮</Button>
        <UpCircleOutlined />
        {/*占位符，类似于窗口，用来展示组件，有点像vue中的vue-view*/}
        <Outlet />
    </div>
  )
}

export default App
