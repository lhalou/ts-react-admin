// import store from "@/store"
//通过useSelector获取仓库的数据
//ts 提供了ReturnType获取函数类型的返回值
//作为全局模块的声明，不需要写import

type RootState = ReturnType<typeof import("@/store").getState>
interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
}