import React, { Component } from 'react'
import "./answer.scss"
import { WingBlank, Toast } from "antd-mobile"
import axios from "../../utils/axios"
import { withRouter } from "react-router-dom"
import Notfound from "components/NotFound"
class Answer extends Component {
    constructor() {
        super()
        this.state = {
            questionData: [],
            answerData: [],
            listid: ""
        }
    }

    componentDidMount() {
        let listid = localStorage.getItem("listid")
        axios(`/getQuestionsDetail/${listid}`, {}, "GET").then(res => {
            if (res.data.status === 200) {
                let contentData = res.data.data;
                let questionData = contentData.question;
                let answerData = contentData.answer;
                this.setState({
                    questionData,
                    answerData,
                    listid
                })
            }
        })
    }
    backPage = () => {
        this.props.history.go(-1)
    }
    writeAnswer = () => {
        this.props.history.push(`/home/addAnswer/${this.state.listid}`)
    }
    render() {
        const { questionData, answerData } = this.state;
        console.log(questionData, answerData);
        if (questionData.length !== 0 && answerData.length !== 0) {
            return (
                <WingBlank>
                    <div className="answer-header">
                        <div className="header-left" onClick={this.backPage}>
                            <span className="iconfont icon-fanhui-copy-copy"></span>
                        </div>
                        <div className="header-right">
                            <span className="iconfont icon-sousuo"></span>
                            <span className="iconfont icon-shenglvehao"></span>
                        </div>
                    </div>
                    <div className="answer-title">
                        <h1 className="question-title">{questionData[0].title}</h1>
                        <p> 知乎 ·{answerData.length} 个回答 </p>
                        <ul>
                            <li>
                                <img src={require("assets/images/addUser.png")} alt="" />
                                <span>邀请回答</span>
                            </li>
                            <li onClick={this.writeAnswer}>
                                <img src={require("assets/images/note.png")} alt="" />
                                <span>写回答</span>
                            </li>
                        </ul>
                    </div>
                    <ul>
                        {
                            answerData.map((item, index) => {
                                return (
                                    <li key={index} className="answer-content">
                                        <div className="answer-user">
                                            <div className="answer-img">
                                                <img src={require("assets/images/action.jpg")} alt="" />
                                                <div className="answer-user-info">
                                                    <span>{item.answerer}</span>
                                                    <span>{item.id}</span>
                                                </div>
                                            </div>
                                            <div className="answer-user-follow">
                                                <span className="iconfont icon-tianjia"></span>
                                                <span>关注</span>
                                            </div>
                                        </div>
                                        <div className="answer-text"
                                            dangerouslySetInnerHTML={{ __html: item.answer }} >
                                        </div>
                                    </li>)
                            })
                        }
                    </ul>
                </WingBlank>
            )
        }
        else {
            return <Notfound></Notfound>
        }
    }
}
export default withRouter(Answer)