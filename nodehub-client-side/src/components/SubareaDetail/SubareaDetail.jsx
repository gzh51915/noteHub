// 分区详情
import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import './SubareaDetail.css'
class SubareaDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                { title: '出境旅游' },
                { title: '国内旅游' }
            ],
            list: [
                {
                    title: '城中的彩虹',
                    name: '晓迪',
                    intro: '我特别不喜欢手机城市借点金的找平，无论是中国的还是外拐的，古代的还是县现代的，平心而论我真的不喜欢。',
                    agree: 30,
                    comments: 4,
                    images: [],
                    author: '战三'
                },
                {
                    title: '城中的彩虹',
                    name: '晓迪',
                    intro: '我特别不喜欢手机城市借点金的找平，无论是中国的还是外拐的，古代的还是县现代的，平心而论我真的不喜欢。',
                    agree: 30,
                    comments: 4,
                    images: [],
                    author: '3战三'
                }
            ]
        }
    }
    returnClick = () => {
        this.props.history.push({
            pathname: '/'
        })
    }
    render() {
        const { tabs, list } = this.state
        return (
            <div className='sb-container'>
                <NavBar
                    mode="dark"
                    onLeftClick={() => { this.returnClick() }}
                    icon={<Icon type="left" />}
                >旅行</NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}
                    tabBarBackgroundColor='#108ee9'
                    tabBarActiveTextColor='#fff'
                    tabBarInactiveTextColor='#83dffd'
                // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    {/* 出境旅游 */}
                    <div className='block1'>
                        {
                            list.map((item, index) => {
                                return (
                                    <div className='item' key={index}>
                                        <h2>{item.title}</h2>
                                        <div className='author-box'>
                                            <img src={require('@/assets/images/pic1.jpg')} alt="" />
                                            <span>{item.author}</span>
                                        </div>
                                        <div className='intro-box'>
                                            <p className='ellipsis-double'>
                                                {item.intro}
                                            </p>
                                            <div className='img-box clear-fix'>
                                                <img src={require('@/assets/images/pic1.jpg')} alt="" />
                                                <img src={require('@/assets/images/pic1.jpg')} alt="" />
                                                <img src={require('@/assets/images/pic1.jpg')} alt="" />
                                            </div>
                                        </div>
                                        <div className='other-box'>
                                            {item.agree} 赞同
                                        <span className='dot'>·</span>
                                            {item.comments} 评论
                                        <span className='dot'>·</span>
                                        1 天前
                                    </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    {/* 国内旅游 */}
                    <div className='block1'>
                        {
                            list.map((item, index) => {
                                return (
                                    <div className='item' key={index}>
                                        <h2>{item.title}</h2>
                                        <div className='author-box'>
                                            <img src={require('@/assets/images/pic1.jpg')} alt="" />
                                            <span>{item.author}</span>
                                        </div>
                                        <div className='intro-box'>
                                            <p className='ellipsis-double'>
                                                {item.intro}
                                            </p>
                                            <div className='img-box clear-fix'>
                                                <img src={require('@/assets/images/pic1.jpg')} alt="" />
                                                <img src={require('@/assets/images/pic1.jpg')} alt="" />
                                                <img src={require('@/assets/images/pic1.jpg')} alt="" />
                                            </div>
                                        </div>
                                        <div className='other-box'>
                                            {item.agree} 赞同
                                        <span className='dot'>·</span>
                                            {item.comments} 评论
                                        <span className='dot'>·</span>
                                        1 天前
                                    </div>
                                    </div>
                                )
                            })
                        }

                    </div> 
                </Tabs>
            </div>
        )
    }
}

export default withRouter(SubareaDetail)
