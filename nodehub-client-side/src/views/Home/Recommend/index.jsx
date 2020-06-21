import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { PullToRefresh, Toast } from "antd-mobile"
import "./recommend.scss"
import axios from "../../../utils/axios"
class Recommend extends Component {
    constructor(props) {
        super()
        this.state = {
            listData: [],
            refreshing: false
        }
    }
    getData = () => {
        Toast.loading('Loading...', 3);

        axios("/getQuestions?page=0&pagesize=50").then((res) => {
            let list = res.data.data.list;
            let prev = Math.floor(Math.random() * 125)
            let listData = list.slice(prev, prev + 10)
            this.setState({
                listData
            }, () => {
                Toast.hide()
            })
        })
    }
    freshData = () => {
        this.getData()
    }
    componentDidMount() {
        Toast.loading('Loading...', 3);
        axios(`/getQuestions?page=0&pagesize=5`).then((res) => {
            if (res.data.status === 200) {
                let list = res.data.data.list;
                let prev = Math.floor(Math.random() * 125)
                let listData = list.slice(prev, prev + 10)
                this.setState({
                    listData
                }, () => {
                    Toast.hide()
                })
            }
        })
    }
    handletopage = (id) => {
        let listid = id
        localStorage.setItem("listid", listid)
        this.props.history.push(`/home/questionsdetail/${listid}`)
    }
    render() {
        const { listData } = this.state
        return (
            <PullToRefresh
                damping={60}
                ref={el => this.ptr = el}
                style={{
                    height: "100%",
                    overflow: 'auto',
                }}
                refreshing={this.state.refreshing}
                onRefresh={() => {
                    this.setState({ refreshing: true });
                    this.freshData();
                    this.setState({ refreshing: false });
                }}
            >
                <ul className="recommend">
                    <h1 className="title">精选好内容</h1>
                    {
                        listData.map((item, index) => (<li className="list-item" key={index} onClick={() => { this.handletopage(item.id) }}>
                            <h1><span>问题：</span>{item.title}</h1>
                            <div className="item-header">
                                <img src={item.img} alt="" /><span>{item.questioner} </span>
                            </div>
                            <div className="item-content">
                                <div className="content"><span>回答:</span>{item.content}</div>
                            </div>
                        </li>))
                    }
                </ul>
            </PullToRefresh>
        )
    }
}
export default withRouter(Recommend)