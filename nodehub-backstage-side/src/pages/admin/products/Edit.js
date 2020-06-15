import React from 'react'
import { Form, Input, Button, Card,message} from 'antd';

const Edit = () => {
    const onFinish = values => {
      console.log('Success:', values);
    };
const onFinishFailed = errorInfo => {
    message.error("请输入正确的内容")
      console.log('Failed:', errorInfo);
    };
const priceValidate = (rule,value,callback)=> {
    if(value*1>100){
        callback("价格不能大于100")
    }else{
        callback();
    }
}
    return (   
        <Card title="分类列表编辑">
            <Form 
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
                <Form.Item name='name' label="名字" rules={[{
                    required:true,
                    message:'类别的名字必须输入' 
                }]}>
                                <Input placeholder="请输入类别的名字"/>
                </Form.Item>     
                <Form.Item name='price' label="图标" rules={
                    [{
                    required:true,
                    message:'类别的图片必须输入' 
                    },{
                        validator:priceValidate
                    }]}>
                                <Input placeholder="请输入类别的图片"/>
                </Form.Item>                       
                <Form.Item >
                    <Button htmlType="submit" type="primary" >保存</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Edit
