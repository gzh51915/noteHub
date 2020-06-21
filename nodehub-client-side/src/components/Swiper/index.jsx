import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import "./swiper.scss"
import axios from "../../utils/axios"
export default class index extends Component {
    constructor(props) {
        super();
        this.state = {
            imgList: []
        }
    }
    componentDidMount() {
        axios("/getBanners", {}, "GET").then((res) => {
            if (res.data.status) {
                let imgList = res.data.data.result;
                this.setState({
                    imgList
                })
            }
        })
    }
    render() {
        const { imgList } = this.state
        return (
            <Carousel
                autoplay={true}
                vertical={false}
                infinite
                autoplayInterval={4000}

            >
                {imgList.map((item, index) => (<img key={index} src={item.img} className="swiper-img"></img>))}
            </Carousel>
        )
    }
}
