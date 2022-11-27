const defaultState = {
    num: 20
}

let reducer = (state=defaultState) => {
    //对旧的状态进行深拷贝
    const newState = JSON.parse(JSON.stringify(state))
    return newState
}

export default reducer