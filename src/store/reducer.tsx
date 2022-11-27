import handleNum from "./num-staus/reducer"
import handleArr from "./arr-status/reducer"
import  { combineReducers } from "redux";


const reducers = combineReducers({
    handleNum,
    handleArr
})

export default reducers