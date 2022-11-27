import React from "react"
import  { useSelector } from "react-redux";
//通过useSelector获取仓库的数据
function Page1 () {
    const  { num } = useSelector((state) => ({
        num: state.num
    }))
    return <div>这是page111{num}</div>
}
export default Page1