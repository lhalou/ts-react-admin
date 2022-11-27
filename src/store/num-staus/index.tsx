export default {
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
    }
}