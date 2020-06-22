import { Modal, Button ,Form, Input, Popconfirm} from 'antd';
import React from 'react';
import { UserdelApi } from '../../../services/products'

        //样式
        const layout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 16 },
          };
          
          const FromList = () => {
              //	提交表单且数据验证成功后回调事件
            const onFinish = values => {
              console.log('Success:', values);
            };
             // 提交表单且数据验证失败后回调事件	
            const onFinishFailed = errorInfo => {
              console.log('Failed:', errorInfo);
            };
          
            return (
                <Form
                  {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="昵称"
                    name="nickname"
                    rules={[{ required: true, message: '请输入!' }]}
                  >
                    <Input />
                  </Form.Item>
            
                  <Form.Item
                    label="用户ID"
                    name="id"
                    rules={[{ required: true, message:  '请输入!' }]}
                  >
                    <Input />
                  </Form.Item>
                
                  <Form.Item
                    label="提问数"
                    name="questions"
                    rules={[{ required: true, message:  '请输入!' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="回答数"
                    name="answer"
                    rules={[{ required: true, message:  '请输入!' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="icon"
                    name="money"
                    rules={[{ required: true, message:  '请输入!' }]}
                  >
                    <Input />
                  </Form.Item>
                </Form>
              );
        }
class Edit extends React.Component {


  state = {
    ModalText: <FromList/>,
    visible: false,
    confirmLoading: false,
  };

  
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  //点击确认
  handleOk = () => {
    this.setState({
      ModalText: '正在修改',
      //气泡属性
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };
  //删除
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render( record) {
   
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Button style={{margin:"1 1rem"}} type="primary" onClick={this.showModal} size="small">
          编辑
        </Button>
        
        <Modal
          title="用户管理"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
            {/*在修改框里的内容*/}
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}

export default Edit