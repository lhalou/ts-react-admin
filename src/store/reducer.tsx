import handleNum from "./num-staus/index"
const defaultState:{num: number} = {
    ...handleNum.state
}

let reducer = (state=defaultState, action: {type: string, val: number}) => {
    //进入系统，初始reducer会执行一次，之后，每次执行dispatch，reducer会执行一次
    console.log("执行了")
    //对旧的状态进行深拷贝
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case handleNum.add :
            handleNum.actions[handleNum.add](newState, action)
            break;
        case handleNum.changeVal :
            handleNum.actions[handleNum.changeVal](newState, action)
            break;
    }
    return newState
}

export default reducer