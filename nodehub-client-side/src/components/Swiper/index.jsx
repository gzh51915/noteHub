import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import swiper1 from "assets/images/swiper1.png"
import swiper2 from "assets/images/swiper2.png"
import swiper3 from "assets/images/swiper3.png"
import swiper4 from "assets/images/swiper4.png"
import "./swiper.scss"
export default class index extends Component {
    state = {
        imgList: [swiper1, swiper2, swiper3, swiper4]
    }
    render() {
        const { imgList } = this.state
        return (
            <Carousel
                autoplay={true}
                vertical={false}
                infinite
                autoplayInterval={4000}
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
            >
                {imgList.map((item) => (<img key={item} src={item} className="swiper-img"></img>))}
            </Carousel>
        )
    }
}
