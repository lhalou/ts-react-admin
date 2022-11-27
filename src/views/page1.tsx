import React from "react"
import  { useSelector, useDispatch } from "react-redux";
import { Button } from "antd"
// import store from "@/store"
// type RootState = ReturnType<typeof store.getState>
function Page1 () {
    const  { num, arrList } = useSelector((state:RootState) => ({
        num: state.num,
        arrList: state.arrList
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
    const handleChangeArr = () => {
        dispatch({
            type: 'addArr',
            val: Math.random() * 10
        })
    }
    return <div>
        这是page111{num}
        <div>
            {arrList.join(',')}
        </div>
        <Button onClick={handleChangeNum}>修改值</Button>
        <Button onClick={handleChangeAddNum}>+ 34</Button>
        <Button onClick={handleChangeArr}>改变数组</Button>
    </div>
}
export default Page1