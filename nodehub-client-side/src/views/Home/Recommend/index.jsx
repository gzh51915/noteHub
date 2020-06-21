import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import "./recommend.scss"
import axios from "../../../utils/axios"
class Recommend extends Component {
    constructor(props) {
        super()
        this.state = {
            listData: []
        }
    }
    componentDidMount() {
        let page = Math.floor(Math.random() * 14)
        axios(`/getQuestions?page=0&pagesize=5`).then((res) => {
            console.log(res.data.data.list);
            if (res.data.status === 200) {
                let listData = res.data.data.list
                this.setState({
                    listData
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
            <ul className="recommend">
                <h1 className="title">精选好内容</h1>
                {/* <li className="list-item" >
                    <h1><span>问题：</span>爱上了打算看来大家</h1>
                    <div className="item-header">
                        <img src={header} alt="" /><span>啊实打实 </span>
                    </div>
                    <div className="item-content">
                        <div className="content"><span>回答:</span>大师傅士大夫士大夫是非得失所发生的</div>
                    </div>
                </li> */}
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

        )
    }
}
export default withRouter(Recommend)