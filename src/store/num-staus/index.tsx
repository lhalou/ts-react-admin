const store =  {
    state: {
        num: 20,
    },
    actions: {
        "add": (newState: {num: number}, action: {type: string}) => {
            newState.num ++
        },
        "changeVal": (newState: {num: number}, action: {type: string, val: number}) => {
            newState.num += action.val
        }
    },
    //名字统一管理
    // add: "add",
    // changeVal: "changeVal"
    //自动生成axtionNames
    actionNames: {
        // add: "add",
        // changeVal: "changeVal"
    }, 
    //优化redux-thunk的异步，按照redux的写法
    asyncActions : {
        asyncAdd: (dis: Function) => {
            setTimeout(() =>{
                dis({type: "changeVal", val: 111111})
            },1000)
        }
    }
}
let actionNames = {};
for(let key in store.actions ) {
    actionNames[key] = key
}
for(let k in store.asyncActions) {
    actionNames[k] = k
}
store.actionNames = actionNames
export default store