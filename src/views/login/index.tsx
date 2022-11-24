import React from "react"
import { Input, Space, Button } from "antd"
import styles from "./login.module.scss"
import  "./login.less"
const Login:React.FC = () => {
    return <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>小李的后台管理系统</h2>
                <p className={styles.notice}>2022-11-24</p>
            </div>
            <div className={styles.loginForm +  " inputCss"}>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <p className={styles.formTitle }>登录</p>
                    <Input placeholder="请输入用户名"/>
                    <Input.Password placeholder="请输入密码" />
                    <div className={styles.captchaBox}>
                        <Space>
                            <Input placeholder="验证码" />
                            <img src={"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.n63.com%2Fphotodir%2Fn63img%2F%3FN%3DX2hiJTI2ZGRXJTVFVyU1RVdsV2tXJTYwbFdmVyU1RXIlNUNXZWclNUIlMjYlMkIuZiUyNm9vbyUyN2hnbGNrJTVEJTVDJTI3YWVfZllxJTI3WWZhJTYwJTVCJTI3%26v%3D.jpg&refer=http%3A%2F%2Fwww.n63.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671896140&t=8ccd62d828416629acec1d494bc124fa"} />
                        </Space>
                    </div>
                    <Button type="primary" block>登录</Button>
                </Space>
            </div>
        </div>

    </div>
}

export default Login