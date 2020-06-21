import React, { Component } from 'react'
import { NoticeBar, PullToRefresh, Toast } from 'antd-mobile';
import { withRouter } from "react-router-dom"
import "./hotlist.scss"
import axios from "../../../utils/axios"
class Hotlist extends Component {
    constructor(props) {
        super()
        this.state = {
            datalist: [],
            refreshing: false
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData = () => {
        Toast.loading('Loading...', 3);
        axios("/getQuestions?page=0&pagesize=50").then((res) => {
            let list = res.data.data.list;
            let prev = Math.floor(Math.random() * 125)
            let datalist = list.slice(prev, prev + 10)
            this.setState({
                datalist
            }, () => {
                Toast.hide()
            })
        })
    }
    freshData = () => {
        this.getData()
    }
    handletopage = (id) => {
        let listid = id
        localStorage.setItem("listid", listid)
        this.props.history.push(`/home/questionsdetail/${listid}`)
    }
    render() {
        const { datalist } = this.state;
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
                <div style={{ width: "100%" }}>
                    <div style={{ padding: "5px 0", borderBottom: "1px solid  	#D3D3D3" }}>
                        <NoticeBar marqueeProps={{ loop: false }} style={{ width: "100%" }}>
                            你在大学遇到过哪些令你难忘的趣事呢？
                    </NoticeBar>
                    </div>
                    <ul className="hotlist-content">
                        {
                            datalist.map((item, index) => {
                                if (index <= 2) {
                                    return (<li className="hotlist-item" key={index} onClick={() => { this.handletopage(item.id) }}>
                                        <img src={require(`assets/images/no${index + 1}.png`)} alt="" className="hot-rank-img" />
                                        <div>
                                            <p className="hot-title">{item.title}</p>
                                        </div>
                                        <img src={require('assets/images/hot-image.jpg')} alt="" className="hot-img" />
                                    </li>)
                                } else {
                                    return (<li className="hotlist-item" key={index} onClick={() => { this.handletopage(item.id) }} >
                                        <p className="hot-rank">{index + 1}</p>
                                        <div>
                                            <p className="hot-title">{item.title}</p>
                                        </div>
                                        <img src={require('assets/images/hot-image.jpg')} alt="" className="hot-img" />
                                    </li>)
                                }
                            })
                        }
                    </ul>
                </div >
            </PullToRefresh>
        )
    }
}
export default withRouter(Hotlist)