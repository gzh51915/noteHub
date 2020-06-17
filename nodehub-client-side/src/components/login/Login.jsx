import React, { Component } from 'react'
import { NavBar, Icon, WhiteSpace, Button, Toast } from 'antd-mobile';
import './login.css'
import { isPhone, isEmail } from '../../assets/js/rules'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            btnDisabled: true
        }
    }
    // 用户名输入
    usernameChange = (e) => {
        const username = e.target.value
        this.setState({
            username
        })
        this.btnDisabled()
    }
    // 密码框输入
    passwordChange = (e) => {
        const password = e.target.value
        this.setState({
            password
        })
        this.btnDisabled()
    }
    // 登录框点击
    loginClick = () => {
        const { username, password } = this.state
        if (!isPhone(username) && !isEmail(username)) return Toast.fail('账号错误！', 1.5)
        if (!password) return Toast.fail('密码错误！', 1.5)
    }
    // 未实现功能提示
    otherClick = () => {
        return Toast.offline('维护中，请期待', 1)
    }
    // 判断点击按钮是否可点击
    btnDisabled = () => {
        const { username, password } = this.state
        if (username && password) {
            // console.log('进来了');
            this.setState({
                btnDisabled: false
            })
        }
    }
    render() {
        const { username, password, btnDisabled } = this.state
        return (
            <div className='login-container'>
                {/* 顶部导航栏 */}
                <NavBar
                    style={{ color: '#000' }}
                    mode="light"
                    icon={<Icon type="cross" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={<span onClick={this.otherClick}>帮助</span>}
                ></NavBar>
                <WhiteSpace size="lg" />
                {/* 主体内容 */}
                <div className='main-box'>
                    {/* 输入框 */}
                    <div className='input-box'>
                        <h2>密码登录</h2>
                        <input type="text" placeholder='手机号或邮箱' autoComplete="new-password" value={username} onChange={this.usernameChange} />
                        <input type="password" placeholder='密码' autoComplete="new-password" value={password} onChange={this.passwordChange} />
                        <Button type="primary" disabled={btnDisabled} style={{ color: '#ffffff !important', width: '100%' }} onClick={this.loginClick}>登录</Button>
                    </div>
                    <WhiteSpace size="lg" />
                    {/* 短信验证-海外手机号 */}
                    <div className='clear-fix'>
                        <span className='left' onClick={this.otherClick}>短信验证码登录</span>
                        <span className='right' onClick={this.otherClick}>海外手机号登录</span>
                    </div>
                    {/* 其他方式登录 */}
                    <div className='other'>
                        <span>其它方式登录</span>
                        <div>
                            <i className='iconfont' onClick={this.otherClick}>&#xe61a;</i>
                            <i className='iconfont' onClick={this.otherClick}>&#xe61a;</i>
                        </div>
                    </div>
                    {/* 协议段 */}
                    <p>注册即代表你同意 <span onClick={this.otherClick}>《notehub协议》</span>和 <span onClick={this.otherClick}>《隐私保护指引》</span></p>
                </div>
            </div>
        )
    }
}
