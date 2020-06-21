import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'
import { Form, Input, Button, Card, message } from 'antd';
import { createApi } from '../../../services/products';
import Avatar from './upload'
import {Link} from 'react-router-dom'

const onFinishFailed = errorInfo => {
    message.error("请输入正确的内容")
    console.log('Failed:', errorInfo);
};



const Edit = (props) => {
    const [img,setimgUrl] =useState('')
    const [suffi,setsuffix] =useState('')

    // const ref = useRef(Avatar)

    // console.log(value);
    // const cur = new ref.current()
    // console.log(cur);
    var onFinish = values => {
        // console.log('Success:', values);
        const { title } = values
        const result=getImg()
        
        createApi(title, img, suffi).then(res => {
            //  console.log(imgUrl, suffix);
            // // getList() 
           const data = res.data
            console.log(data)
            if(data.status !== 200) return message.error(data.msg,2)
             message.success(data.msg,2)
            //  window.location.href = 'http://localhost:3000/#/admin/products'
            // console.log(props)
            props.history.push({
                pathname:'/admin/products'
            })
        })
    };
    var getImg = (data, suffix) => {
        let imgUrl = data
        // console.log(e.target);
        // console.log(imgUrl,suffix)
        // return { imgUrl, suffix }
        setimgUrl(imgUrl)
        setsuffix(suffix)
        
    }


    return (
        <Card title="分类列表编辑">
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Form.Item name='title' label="title" rules={[{
                    required: true,
                    message: '类别的标题必须输入'
                }]}>
                    <Input placeholder="请输入类别的标题" />
                </Form.Item>
                <Form.Item>
                    <Avatar getImg={getImg} />
                </Form.Item>

                <Form.Item >
                    <Button htmlType="submit" type="primary" >保存</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default withRouter(Edit)
