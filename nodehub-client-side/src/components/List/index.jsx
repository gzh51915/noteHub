import React, { Component } from 'react'
import { Toast, PullToRefresh } from 'antd-mobile';
import { withRouter } from "react-router-dom"
import "./List.scss"
import "../../assets/iconfonts/iconfont.css"
import axios from "../../utils/axios"


class List extends Component {
    constructor(props) {
        super()
        this.state = {
            page: 0,
            pagesize: 10,
            dataArr: [],
            refreshing: false,
            agree: true,
            height: document.documentElement.clientHeight,
        }
    }
    componentWillUnmount() {
        this.setState({
            agree: false
        })
    }
    componentDidMount() {
        this.getData()
        let nav = document.querySelector('.am-tabs-pane-wrap-active')

        if (this.state.agree) {


            nav.onscroll = () => {
                let scrollTop = nav.scrollTop
                // 变量navHeight 是可视区的高度
                let windowHeight = nav.clientHeight
                // 变量 scrollHeight 是滚动条的总高度
                let scrollHeight = nav.scrollHeight
                let phasevalue = scrollTop + windowHeight - scrollHeight
                if (phasevalue > -1) {
                    let para = {};
                    para.page = this.state.page + 1;
                    para.pagesize = this.state.pagesize;
                    Toast.loading('Loading...', 3);
                    axios("/getQuestions", para, "GET").then(res => {
                        let dataLits = res.data.data.list;
                        let len = dataLits.length;
                        if (len !== 0) {
                            this.setState({
                                page: para.page,
                                dataArr: [...this.state.dataArr, ...dataLits]
                            }, () => {
                                Toast.hide()
                            })
                        } else {
                            Toast.info('数据加载完了', 2, null, false);
                            this.setState({
                                agree: false
                            })
                        }
                    })
                }
            }
        }

    }
    getData = () => {

        let para = {};
        para.page = this.state.page;
        para.pagesize = this.state.pagesize;
        Toast.loading('Loading...', 3);
        axios("/getQuestions", para, "GET").then(res => {
            let quedata = res.data;
            let dataLits = quedata.data.list;
            if (quedata.status === 200) {
                this.setState({
                    dataArr: dataLits
                }, () => {
                    Toast.hide()
                })
            }
        })
    }
    freshData = () => {
        let para = {};
        let page = Math.floor(Math.random() * 15)
        para.page = page;
        para.pagesize = this.state.pagesize;
        Toast.loading('Loading...', 3);
        axios("/getQuestions", para, "GET").then(res => {
            let quedata = res.data;
            let dataLits = quedata.data.list;
            if (quedata.status === 200) {
                this.setState({
                    dataArr: dataLits
                }, () => {
                    Toast.hide()
                })
            }
        })
    }
    handleToPage = (id) => {
        let listid = id
        localStorage.setItem("listid", listid)
        this.props.history.push(`/home/questionsdetail/${listid}`)
    }
    render() {
        let { dataArr } = this.state;
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
                <ul className="question-list">
                    {
                        dataArr.map((item, index) => (<li className="list-item" key={index} onClick={() => { this.handleToPage(item.id) }}>
                            <h1>{item.title}</h1>
                            <div className="item-header">
                                <img src={item.img} alt="" /><span> {item.questioner}</span>
                            </div>
                            <div className="item-content">
                                <div className="content">{item.content}</div>
                                <div className="bottom"><span className="approve">1.6万赞同 <span className="iconfont icon-zan2"></span></span>&nbsp;&nbsp;&nbsp;<span className="comment">866评论 <span className="iconfont icon-pinglun"></span></span></div>
                            </div>
                        </li>))
                    }

                </ul>
            </PullToRefresh >
        )
    }

}
export default withRouter(List)