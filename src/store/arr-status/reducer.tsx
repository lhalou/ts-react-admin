
import handleArr from "./index"

let reducer = (state={...handleArr.state}, action: {type: string, val: number}) => {
    //进入系统，初始reducer会执行一次，之后，每次执行dispatch，reducer会执行一次

    //对旧的状态进行深拷贝
    const newState = JSON.parse(JSON.stringify(state))
    // switch (action.type) {
    //     case handleArr.addArr :
    //         handleArr.actions[handleArr.addArr](newState, action)
    //         break
    // }
    for(let k in handleArr.actionNames) {
        if(action.type === handleArr.actionNames[k]) {
            handleArr.actions[handleArr.actionNames[k]](newState, action)
        }
    }
    return newState
}

export default reducer