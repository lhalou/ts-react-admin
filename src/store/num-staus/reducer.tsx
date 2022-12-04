import handleNum from "./index"


let reducer = (state={...handleNum.state,}, action: {type: string, val: number}) => {
    //进入系统，初始reducer会执行一次，之后，每次执行dispatch，reducer会执行一次
    // console.log("执行了")
    //对旧的状态进行深拷贝
    //switch的做法是拿着action.type  与case后面 进行对比，这种做法很类似  遍历
    //将case后面的值做成对象，
    const newState = JSON.parse(JSON.stringify(state))
    // switch (action.type) {
    //     case handleNum.add :
    //         handleNum.actions[handleNum.add](newState, action)
    //         break;
    //     case handleNum.changeVal :
    //         handleNum.actions[handleNum.changeVal](newState, action)
    //         break;
    // }
    //优化
    console.log(handleNum,'handleNum')
    for(let k in handleNum.actionNames) {
        console.log( handleNum.actionNames,' handleNum.actionNames')
      
        const isKey = handleNum.actionNames[k] === action.type
        console.log(isKey,'isKey')
        if(isKey) {
            handleNum.actions[handleNum.actionNames[k]](newState, action)
        }
    }
    return newState
}

export default reducer