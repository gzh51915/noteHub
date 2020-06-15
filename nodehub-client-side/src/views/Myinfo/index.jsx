import React, { Component } from 'react'
import "./myinfo.scss"
import { Grid, WingBlank } from 'antd-mobile';
export default class index extends Component {
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
    render() {
        const { serverList } = this.state
        return (
            <div style={{ width: "100%", background: "#F0F0F0", height: "100%", paddingTop: "10px" }}>
                <WingBlank >
                    <div className="personal-info">
                        <div className="info-top">
                            <img src={require("assets/images/header.jpg")} alt="" className="my-img" />
                            <div className="my-info">
                                <h1 className="my-name">Yeacemark</h1>
                                <div className="my-rank">
                                    <img src={require("assets/images/heart.png")} alt="" className="my-headerImg" /> <span>知乎盐值：301</span>
                                </div>
                            </div>
                            <div className="set-up">
                                <span className="iconfont icon-shenglvehao"></span>
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
                            <div>
                                <span>查看更多 ></span>
                            </div>
                        </div>
                        <ul className="subject-content">
                            <li></li>
                        </ul>
                    </div>
                </WingBlank>
            </div>
        )
    }
}
