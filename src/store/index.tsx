import  { legacy_createStore } from "redux";
import redux from "./reducer"
//常见数据仓库
import reducers from "./reducer"
const store =  legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store