import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import "./myinfo.scss"
import { connect } from "react-redux"
import { Grid, WingBlank, Popover } from 'antd-mobile';
const Item = Popover.Item;
const Myinfo = class index extends Component {
    componentDidMount() {
        // let len = Object.keys(this.props.getUserData).length;
        // if (len == 0) {
        //     this.props.history.push('/user')
        // }
    }
    state = {
        serverList: [
            {
                icon: require("assets/images/cap.png"),
                text: "学习记录"
            },
            {
                icon: require("assets/images/shop.png"),
                text: "已购"
            },
            {
                icon: require("assets/images/money.png"),
                text: "付费咨询"
            },
            {
                icon: require("assets/images/broadcast.png"),
                text: "活动广场"
            },
            {
                icon: require("assets/images/wallet.png"),
                text: "钱包"
            },
            {
                icon: require("assets/images/tree.png"),
                text: "社区建设"
            },
            {
                icon: require("assets/images/flag.png"),
                text: "反馈与帮助"
            },
            {
                icon: require("assets/images/hanmer.png"),
                text: "公裁议事厅"
            }

        ]
    }
    handleUser = () => {
        console.log(this.props);
    }
    onSelect = () => {
        localStorage.removeItem('token')
        this.props.history.push("/user")
    }
    render() {
        const { serverList } = this.state
        const { data } = this.props.getUserData
        return (
            <div style={{ width: "100%", background: "#F0F0F0", height: "100%", paddingTop: "10px" }}>
                <WingBlank>
                    <div className="personal-info">
                        <div className="info-top">
                            <img src={require("assets/images/header.jpg")} alt="" className="my-img" />
                            <div className="my-info">
                                <h1 className="my-name">{data.username}</h1>
                                <div className="my-rank">
                                    <img src={require("assets/images/heart.png")} alt="" className="my-headerImg" /> <span>知乎盐值：301</span>
                                </div>
                            </div>
                            <div className="set-up">
                                <Popover mask onSelect={this.onSelect} overlay={[
                                    (<Item key="1" value="loginout" data-seed="logId">退出登录</Item>),
                                ]}>
                                    <span className="iconfont icon-shenglvehao" onClick={this.handleUser}></span>
                                </Popover>

                            </div>
                        </div>
                        <div className="info-bottom">
                            <ul>
                                <li>
                                    <p>4</p>
                                    <p>关注</p>
                                </li>
                                <li>
                                    <p>4</p>
                                    <p>收藏夹</p>
                                </li>
                                <li>
                                    <p>4</p>
                                    <p>最近浏览</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="personal-server">
                        <Grid data={serverList} />
                    </div>
                    <div className="personal-subject">
                        <div className="subject-header">
                            <div className="title">
                                <img src={require("assets/images/book.png")} alt="" /><span>专题</span>
                            </div>
                            <div className="more">
                                <span>查看更多 &gt;</span>
                            </div>
                        </div>
                        <ul className="subject-content">
                            <li>
                                <div className="content-title">
                                    <img src={require("assets/images/subject.jpg")} alt="" /> <h1>复赛：冠军照常升起</h1>
                                </div>
                                <div className="content-follow">
                                    <span>124万关注</span>·<span>20关注</span>
                                </div>
                            </li>
                            <li>
                                <div className="content-title">
                                    <img src={require("assets/images/subject.jpg")} alt="" /> <h1>复赛：冠军照常升起</h1>
                                </div>
                                <div className="content-follow">
                                    <span>124万关注</span>·<span>20关注</span>
                                </div>
                            </li>
                            <li>
                                <div className="content-title">
                                    <img src={require("assets/images/subject.jpg")} alt="" /> <h1>复赛：冠军照常升起</h1>
                                </div>
                                <div className="content-follow">
                                    <span>124万关注</span>·<span>20关注</span>
                                </div>
                            </li>
                            <li>
                                <div className="content-title">
                                    <img src={require("assets/images/subject.jpg")} alt="" /> <h1>复赛：冠军照常升起</h1>
                                </div>
                                <div className="content-follow">
                                    <span>124万关注</span>·<span>20关注</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </WingBlank>
            </div>
        )
    }
}
export default connect((state) => ({ getUserData: state.getUserMsg }))(withRouter(Myinfo))
