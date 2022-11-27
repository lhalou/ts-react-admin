import  { legacy_createStore } from "redux";
import redux from "./reducer"
//常见数据仓库
const store =  legacy_createStore(redux)

export default store