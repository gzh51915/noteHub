import React, { Component } from 'react'
import { NavBar, Icon, WhiteSpace, Button } from 'antd-mobile';
import './login.css'
export default class Login extends Component {
    render() {
        return (
            <div className='login-container'>
                {/* 顶部导航栏 */}
                <NavBar
                    style={{ color: '#000' }}
                    mode="light"
                    icon={<Icon type="cross" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={<span>帮助</span>}
                ></NavBar>

                {/* 输入框 */}
                <div className='input-box'>
                    <WhiteSpace size="lg" />
                    <h2>密码登录</h2>
                    <WhiteSpace size="lg" />
                    {/* <InputItem
                        placeholder="手机号或邮箱"
                    /> */}
                    <input type="text" placeholder='请输入账号' />
                    <WhiteSpace size="sm" />
                    <input type="password" placeholder='请输入密码'/>
                    <WhiteSpace size="sm" />
                    <Button type="primary" disabled>登录</Button><WhiteSpace />
                </div>



            </div>
        )
    }
}
