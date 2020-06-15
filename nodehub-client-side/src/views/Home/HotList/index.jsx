import React, { Component } from 'react'
import { NoticeBar, WingBlank, Icon } from 'antd-mobile';
import "./hotlist.scss"
export default class index extends Component {
    render() {
        return (
            <div style={{ width: "100%" }}>
                <div style={{ padding: "5px 0", borderBottom: "1px solid  	#D3D3D3" }}>
                    <NoticeBar marqueeProps={{ loop: false }} style={{ width: "100%" }}>
                        你在大学遇到过哪些令你难忘的趣事呢？
                    </NoticeBar>
                </div>
                <ul className="hotlist-content">
                    <li className="hotlist-item">
                        <img src={require('assets/images/no1.png')} alt="" className="hot-rank-img" />
                        <div>
                            <p className="hot-title">如何看待肖战在《青春环游记2》中的镜头疑似被全删？</p>
                        </div>
                        <img src={require('assets/images/hot-image.jpg')} alt="" className="hot-img" />
                    </li>
                    <li className="hotlist-item">
                        <img src={require('assets/images/no2.png')} alt="" className="hot-rank-img" />
                        <div>
                            <p className="hot-title">如何看待肖战在《青春环游记2》中的镜头疑似被全删？</p>
                        </div>
                        <img src={require('assets/images/hot-image.jpg')} alt="" className="hot-img" />
                    </li>
                    <li className="hotlist-item">
                        <img src={require('assets/images/no3.png')} alt="" className="hot-rank-img" />
                        <div>
                            <p className="hot-title">如何看待肖战在《青春环游记2》中的镜头疑似被全删？</p>
                        </div>
                        <img src={require('assets/images/hot-image.jpg')} alt="" className="hot-img" />
                    </li>
                    <li className="hotlist-item">
                        <p className="hot-rank">4</p>
                        <div>
                            <p className="hot-title">如何看待肖战在《青春环游记2》中的镜头疑似被全删？</p>
                        </div>
                        <img src={require('assets/images/hot-image.jpg')} alt="" className="hot-img" />
                    </li>
                    <li className="hotlist-item">
                        <p className="hot-rank">5</p>
                        <div>
                            <p className="hot-title">如何看待肖战在《青春环游记2》中的镜头疑似被全删？</p>
                        </div>
                        <img src={require('assets/images/hot-image.jpg')} alt="" className="hot-img" />
                    </li>
                    <li className="hotlist-item">
                        <p className="hot-rank">6</p>
                        <div>
                            <p className="hot-title">如何看待肖战在《青春环游记2》中的镜头疑似被全删？</p>
                        </div>
                        <img src={require('assets/images/hot-image.jpg')} alt="" className="hot-img" />
                    </li>
                    <li className="hotlist-item">
                        <p className="hot-rank">7</p>
                        <div>
                            <p className="hot-title">如何看待肖战在《青春环游记2》中的镜头疑似被全删？</p>
                        </div>
                        <img src={require('assets/images/hot-image.jpg')} alt="" className="hot-img" />
                    </li>
                </ul>
            </div >
        )
    }
}
