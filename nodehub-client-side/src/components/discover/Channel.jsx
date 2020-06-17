// 频道组件
import React, { Component } from 'react'
import './css/Channel.css'
export default class Channel extends Component {
    state = {
        list: [
            {
                topnav: {
                    img: require('@/assets/images/pic1.jpg'),
                    title: '前端开发',
                    num: '近一周讨论1777'
                },
                articles: [
                    {
                        title: '50到java面试题（附答案），你确定不过来看看吗？',
                        content: {
                            author: '超级爱前端',
                            intro: '1、介绍介绍js的基本数据类型 NUMBER、STRING、BOOLEAN.2、介绍介绍其他东西',
                            agree: 10,
                            comment: 20,
                            time: '1天前'
                        }
                    },
                    {
                        title: '50到java面试题（附答案），你确定不过来看看吗？',
                        content: {
                            author: '超级爱前端',
                            intro: '1、介绍介绍js的基本数据类型 NUMBER、STRING、BOOLEAN.2、介绍介绍其他东西',
                            agree: 10,
                            comment: 20,
                            time: '1天前',
                            img: require('@/assets/images/pic1.jpg'),
                        }
                    }
                ]
            },
            {
                topnav: {
                    img: require('@/assets/images/pic1.jpg'),
                    title: '前端开发',
                    num: '近一周讨论1777'
                },
                articles: [
                    {
                        title: '50到java面试题（附答案），你确定不过来看看吗？',
                        content: {
                            author: '超级爱前端',
                            intro: '1、介绍介绍js的基本数据类型 NUMBER、STRING、BOOLEAN.2、介绍介绍其他东西',
                            agree: 10,
                            comment: 20,
                            time: '1天前'
                        }
                    },
                    {
                        title: '50到java面试题（附答案），你确定不过来看看吗？',
                        content: {
                            author: '超级爱前端',
                            intro: '1、介绍介绍js的基本数据类型 NUMBER、STRING、BOOLEAN.2、介绍介绍其他东西',
                            agree: 10,
                            comment: 20,
                            time: '1天前',
                            img: require('@/assets/images/pic1.jpg'),
                        }
                    }
                ]
            }
        ]
    }
    render() {
        const { list } = this.state
        return (
            <div className='channel-container'>
                {

                    list.map((item, i) => {
                        const articles = item.articles
                        // console.log(articles);

                        return (
                            <div className='card' key={i}>
                                {/* 顶部 */}
                                <div className='top'>
                                    <div className='left-box'>
                                        <img src={item.topnav.img} alt="" />
                                        <span>{item.topnav.title}</span>
                                    </div>
                                    <div className='right-box'>
                                        <i className='iconfont'>&#xe605;</i>
                                        <span>
                                            {item.topnav.num}
                                        </span>
                                        <i className='iconfont'>&#xe77c;</i>
                                    </div>
                                </div>
                                {/* 内容区 */}
                                {
                                    articles.map((aitem, ai) => {
                                        // 内容里有图片的
                                        if (!aitem.content.img)
                                            return (
                                                <div className='article1' key={ai}>
                                                    {/* 标题 */}
                                                    <h2>{aitem.title}</h2>
                                                    {/* 内容简介 */}
                                                    <p className='intro-box ellipsis-double' >
                                                        <span className='author'>
                                                            {aitem.content.author}
                                                        </span>
                                        :
                                        <span className='intro'>
                                                            {aitem.content.intro}
                                                        </span>
                                                    </p>
                                                    {/* 点赞数等 */}
                                                    <div className='other-box'>
                                                        {aitem.content.agree}赞同
                                         <span className='dot'>·</span>
                                                        {aitem.content.comment}评论
                                        <span className='dot'>·</span>
                                                        {aitem.content.time}
                                                    </div>
                                                </div>)
                                        // 内容里没图片的
                                        else
                                            return (
                                                <div className='article2' key={ai}>
                                                    {/* 标题 */}
                                                    <h2>{aitem.title}</h2>
                                                    <div className='content'>
                                                        {/* 左边内容区 */}
                                                        <div className='content-left'>
                                                            {/* 简介 */}
                                                            <p className='intro-box ellipsis-three'>
                                                                <span className='author'>
                                                                    {aitem.content.author}
                                                                </span>
                                        :
                                        <span className='intro'>
                                                                    {aitem.content.intro}
                                                                </span>
                                                            </p>
                                                            {/* 点赞数等 */}
                                                            <div className='other-box'>
                                                                {aitem.content.agree}赞同
                                         <span className='dot'>·</span>
                                                                {aitem.content.comment}评论
                                        <span className='dot'>·</span>
                                                                {aitem.content.time}
                                                            </div>
                                                        </div>
                                                        <img src={aitem.content.img} alt="" />
                                                    </div>
                                                </div>
                                            )
                                    })
                                }

                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
