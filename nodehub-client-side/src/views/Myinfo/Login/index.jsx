import React, { Component } from 'react';
import './login.css'
import { List, InputItem, Button, WhiteSpace, Toast } from 'antd-mobile';
import { isPhone } from 'assets/js/rules'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { getUserMsgAsync } from '../../../redux/actions'
import "assets/css/index.css"
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phonenumber: null,
            password: null
        }
    }
    phoneInputChange = (val) => {
        this.setState({
            phonenumber: val
        })
    }
    pawInputChange = (val) => {
        this.setState({
            password: val
        })
    }
    loginClick = async () => {
        try {
            const { phonenumber, password } = this.state
            if (!isPhone(phonenumber) || !password) return Toast.fail('请输入手机号或密码', 1)
            await this.props.getUserMsgAsync('/login', { username: phonenumber, password })
            const { status, msg, data } = this.props.getUserData
            if (status !== 200) return Toast.fail(msg, 1)
            // 持久化存储token
            window.localStorage.setItem('token', data.token)
            this.props.history.push({
                pathname: '/user/info'
            })
            return Toast.success(msg, 1)
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div className='login-container'>
                <div className='header'>
                    <h1>登录noteHub</h1>
                    <h2>寻找志同道合的伙伴</h2>
                    {/* <i className='iconfont'>&#xe755;</i> */}
                </div>
                <div className='content-box'>
                    <List>
                        <WhiteSpace size="xl"></WhiteSpace>
                        <InputItem placeholder='手机号' onChange={this.phoneInputChange}></InputItem>
                        <InputItem placeholder='密码' type='password' onChange={this.pawInputChange}></InputItem>
                        <WhiteSpace size="xl"></WhiteSpace>
                        <Button type="primary" onClick={this.loginClick}>登录</Button>
                        <WhiteSpace size="xl"></WhiteSpace>
                    </List>
                </div>
                <div className='gologin-box clear-fix'>
                    <Link className='right' to='/user/register'>没有账号？去注册！</Link>
                </div>
                <div className='footer-box'>
                    <p>登录即代表您同意《noteHub权利声明》 ，本网站一切解释权归noteHub开发团队所有</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getUserData: state.getUserMsg
    }
}
export default connect(mapStateToProps, { getUserMsgAsync })(withRouter(Login))
