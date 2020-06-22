import React, { Component } from 'react'
import "./index.scss"
import { connect } from "react-redux"
import { Result, Icon, Button, WingBlank, WhiteSpace } from "antd-mobile"
class Myinfo extends Component {
    constructor(props) {
        super()
    }
    componentDidMount() {
        let token = localStorage.getItem('token')
        let len = Object.keys(this.props.getUserData).length;
        console.log(len);

        if (token && len != 0) {
            this.props.history.push("/user/info")
        }
    }
    pageToLogin = () => {
        this.props.history.push("/user/login");
    }
    render() {
        return (
            <div style={{ width: "100%", height: "100vh" }}>
                <Result
                    style={{ height: "80vh" }}
                    img={<Icon type="cross-circle-o" className="spe" style={{ fill: '#F13642', width: "15vw", height: "15vw" }} />}
                    title="未登录"
                    message="点击登录按钮去登录吧"
                />
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WingBlank size="md">
                    <Button type="primary" inline style={{ width: "100%" }} onClick={() => { this.pageToLogin() }}>登录</Button>
                </WingBlank>
            </div>
        )
    }
}
export default connect((state) => ({ getUserData: state.getUserMsg }))(Myinfo)