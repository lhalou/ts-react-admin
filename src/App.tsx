import { useState } from 'react'
import Test1 from "@/components/test1"
import Test2 from "@/components/test2"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Test1 />
        <Test2 />
    </div>
  )
}

export default App
