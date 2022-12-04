export default {
    state: {
        arrList: [1,2,3],
    },
    actions: {
        "addArr": (newState: {arrList: number[]}, action: {type: string, val: number}) => {
            newState.arrList.push(action.val)
        },

    },
    //名字统一管理
    // addArr: "addArr",
    actionNames: {
        addArr: "addArr",
    }
}