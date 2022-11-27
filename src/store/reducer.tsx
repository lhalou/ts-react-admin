const defaultState:{num: number} = {
    num: 20
}

let reducer = (state=defaultState, action: {type: string, val: number}) => {
    //进入系统，初始reducer会执行一次，之后，每次执行dispatch，reducer会执行一次
    console.log("执行了")
    //对旧的状态进行深拷贝
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "add" :
            newState.num ++
            break;
        case "changeVal" :
            newState.num += action.val
            break;
    }
    return newState
}

export default reducer