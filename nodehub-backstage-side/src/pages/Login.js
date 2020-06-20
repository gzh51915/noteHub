import React from 'react'
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import {setToken} from '../utils/auth'
import "./login.css";
import {loginApi} from '../services/auth';



const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  
  const Login = (props) => {
    const onFinish = values => {
      console.log('Success:', values);
      // setToken(values.username);
      // props.history.push("/admin");
      
      loginApi({
        username: values.username,
        password: values.password
      }).then(res =>{
        if(res.data.status === 200){
          message.success("登录成功")
          console.log('=================',res.data);
          
          setToken(res.data.data.token);
          props.history.push("/admin");
        }else{
          message.info(res.message)
        }
        console.log(res);
      })
      .catch(err =>{
        console.log(err);
        message.error('用户不存在');
      })
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
  
    return (
    <Card title="noteHub Admin SYS" className="login-form">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="账号"
          name="username"
          rules={[
            {
              required: true,
              message: '请输入你的用户名!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入你的密码!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>记住账号</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
      </Card>
    );
  };
export default Login
