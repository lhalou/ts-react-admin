// import "./index.scss" //全局引入，会影响到其他组件
//模块化引入
import styles from "./index.module.scss"
const  Test1 =  () => {
    return <div className={styles.test1}>
        这是test 1 组件
    </div>
}

export default Test1