
import React, { Component } from 'react';
import { List, InputItem, Button, WhiteSpace, Toast } from 'antd-mobile';
import { axios } from '../../../api'
import { isPhone } from 'assets/js/rules.js'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import './Register.css'
import "assets/css/index.css"
class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phonenumber: null,
            password: null,
            smsCodeMsg: '获取验证码',
            flag: true,
            smsCode: ''
        }
    }
    // 短信验证码
    smsClick = async () => {
        const { flag, phonenumber } = this.state
        // 判断手机是否合法
        if (!isPhone(phonenumber)) return Toast.fail('请输入手机号码', 1.5)
        // 判断是否在倒计时内的点击
        if (!flag) return Toast.fail('一分钟内不能重复发送！', 1.5)
        // 发起网络请求
        const { data: res } = await axios.get(`/smsCode?phonenumber=${phonenumber}`)
        if (res.status !== 200) return Toast.fail(res.msg, 1.5)
        this.setState({
            smsCode: res.data.smsCode
        }, () => {
            console.log(this.state.smsCode);
        })
        Toast.success(res.msg, 1.5)

        // 倒计时时间
        let i = 60
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            if (i <= 0) {
                clearInterval(this.timer)
                this.setState({
                    smsCodeMsg: '获取验证码', flag: true
                })
                return
            }
            this.setState({
                smsCodeMsg: `${--i} 秒`,
                flag: false
            })
        }, 1000);
    }
    // 注册
    registerClick = async () => {
        try {
            const { phonenumber, password, smsCode } = this.state
            if (!isPhone(phonenumber) || !password || !smsCode) return Toast.fail('信息有误！', 1.5)
            const { data: res } = await axios.post('/register', {
                phonenumber, password, smsCode
            })
            if (res.status !== 200) return Toast.fail(res.msg, 1.5)
            Toast.success(res.msg, 2)
            // console.log( this.props.history)
            this.props.history.push({
                pathname: '/user/login'
            })
        } catch (error) {
            console.log(error);
        }
    }
    // 用户名改变
    phoneInputChange = (val) => {
        this.setState({
            phonenumber: val
        })
    }
    // 密码改变
    pawInputChange = (val) => {
        this.setState({
            password: val
        })
    }
    // 短信验证码改变
    smsInputChange = (val) => {
        this.setState({
            smsCode: val
        })
    }
    render() {
        const { smsCodeMsg } = this.state
        return (
            <div className='register-container'>
                <div className='header'>
                    <h1>注册noteHub</h1>
                    <h2>跟我们一起前往更广阔的天空</h2>
                    {/* <i className='iconfont'>&#xe755;</i> */}
                </div>
                {/* 内容盒子--输入 */}
                <div className='content-box'>
                    <List>
                        <WhiteSpace size="xl"></WhiteSpace>
                        <InputItem placeholder='手机号' onChange={this.phoneInputChange} autoComplete="new-password"></InputItem>
                        <InputItem placeholder='密码' type='password' onChange={this.pawInputChange} autoComplete="new-password"></InputItem>
                        <div className='smsCode-box'>
                            <InputItem placeholder='手机验证码' onChange={this.smsInputChange}></InputItem>
                            <span onClick={this.smsClick}>{smsCodeMsg}</span>
                        </div>
                        <WhiteSpace size="xl"></WhiteSpace>
                        <Button type="primary" onClick={this.registerClick}>注册</Button>
                        <WhiteSpace size="xl"></WhiteSpace>
                    </List>
                </div>
                <div className='gologin-box clear-fix'>
                    <Link className='right' to='/user/login'>已有账号？去登陆！</Link>
                </div>
                <div className='footer-box'>
                    <p>注册即代表您同意《noteHub权利声明》，本网站一切解释权归noteHub开发团队所有</p>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(withRouter(Register))
