import  { applyMiddleware, legacy_createStore, compose } from "redux";
import redux from "./reducer"
//常见数据仓库
import thunk from 'redux-thunk'
import reducers from "./reducer"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :compose
const store =  legacy_createStore(reducers,composeEnhancers(applyMiddleware(thunk)))

export default store