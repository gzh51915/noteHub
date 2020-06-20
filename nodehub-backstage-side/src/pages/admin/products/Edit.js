import React, { useState } from 'react'
import { Form, Input, Button, Card, message } from 'antd';
import { createApi } from '../../../services/products';
import Avatar from './upload'


const onFinishFailed = errorInfo => {
    message.error("请输入正确的内容")
    console.log('Failed:', errorInfo);
};



const Edit = () => {
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
            console.log(res);
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

export default Edit
