import React from "react"
import  { useSelector, useDispatch } from "react-redux";
import { Button } from "antd"
//通过useSelector获取仓库的数据
function Page1 () {
    const  { num } = useSelector((state) => ({
        num: state.num
    }))
    const dispatch = useDispatch()
    const handleChangeNum = () => {
        //只要执行了dispatch，就会执行reducer

        dispatch({
            type: "add"
        })
    }
    const handleChangeAddNum = () => {
        dispatch({
            type: 'changeVal',
            val: 34
        })
    }
    return <div>
        这是page111{num}
        <Button onClick={handleChangeNum}>修改值</Button>
        <Button onClick={handleChangeAddNum}>+ 34</Button>
    </div>
}
export default Page1