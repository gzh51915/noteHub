import React, { Component } from 'react';
import { NavBar, Icon, List, TextareaItem, Button, Toast } from 'antd-mobile';
import { axios } from '@/api'
class Question extends Component {
    state = {
        title: '',
        descibe: '',
        questioner: ''
    }
    handleChangeByTitle = (val) => {
        this.setState({
            title : val
        })
       
    }
    handleChangeByDescribe = (val) => {
        this.setState({
            descibe : val
        })
    }
    publishClick = async () => {
        const { title, descibe, questioner } = this.state
        if (!title || title.trim().length === 0) return Toast.fail('请输入必填项', 1.5)
        const { data: res } = await axios.post('/addQuestion', {
            title, content: descibe, questioner
        })
        if (res.status !== 200) return Toast.fail(res.msg, 1.5)
        Toast.success(res.msg, 1.5)  
        
    }
    render() {
        return (
            <div className='question-box'>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >发布问题</NavBar>
                <List renderHeader={() => '向小伙伴们提问吧！'}>
                    <TextareaItem
                        title="问题"
                        placeholder="必填"
                        data-seed="logId"
                        rows="4"
                        ref={el => this.autoFocusInst = el}
                        autoHeight
                        onChange={this.handleChangeByTitle}
                    />
                    <TextareaItem
                        title="问题描述"
                        placeholder="选填"
                        data-seed="logId"
                        autoHeight
                        rows="8"
                        ref={el => this.customFocusInst = el}
                        onChange={this.handleChangeByDescribe}
                    />
                    <List.Item>
                        <Button type='primary' onClick={this.publishClick}>发布问题</Button>
                    </List.Item>
                </List>
            </div>
        );
    }
}

export default Question;
