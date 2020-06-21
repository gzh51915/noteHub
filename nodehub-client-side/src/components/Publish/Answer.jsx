import React, { Component } from 'react';
import { NavBar, Icon, List, TextareaItem, Button, Toast } from 'antd-mobile';
import { axios } from '@/api'
class Answer extends Component {
    handleSend = () => {
        console.log('进来了');
    }
    render() {
        return (
            <div className='answer-box'>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={
                       <span onClick={this.handleSend}>发送</span>
                      }
                ></NavBar>
                <p className='question-panel' style={{ lineHeight: '3vh', fontWeight: 'bold', boxShadow: '5px 5px 5px rgba(0,0,0,.5)', padding: '5px 5px', marginBottom: "2vh", color: 'rgba(0,0,0,.5)' }}>
                    '如何看待 618 期间碧桂园线上打折卖房的操作，这是噱头还是动真格的，会有人买吗？
                </p>
                <List renderHeader={() => '我的回答'}>
                    <TextareaItem
                        rows='8'
                        placeholder="请输入回答"
                        data-seed="logId"
                        autoHeight
                        ref={el => this.customFocusInst = el}
                    />
                </List>
            </div>
        );
    }
}

export default Answer;
