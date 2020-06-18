import React from 'react';
import { Upload, message, Button } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios'
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        return callback(reader.result)
    });
    reader.readAsDataURL(img);
}

// 判断文件类型
function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 5;
    if (!isLt2M) {
        message.error('Image must smaller than 5MB!');
    }
    return isJpgOrPng && isLt2M;
}

class Avatar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            imageUrl: null
        }
    }
    handleChange = info => {
        getBase64(info.file.originFileObj, imageUrl => {
            return this.setState({
                imageUrl,
                loading: false,
            })
        }
        );
    };
    handleRemove = () => {
        this.setState({
            imageUrl: null
        })
    }
    handleUpload =async () => {
        const {imageUrl} = this.state
        if (!imageUrl) return message.error('请选择图片');
        // console.log(imageUrl)
        const res = await axios.post('http://127.0.0.1:4444/api/admin/ceshi', {
            data:imageUrl
        })
    }
    render() {
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <div>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange}
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    {imageUrl ? <Button onClick={this.handleRemove}>移除图片</Button> : ""}
                </Upload>


                <Button onClick={this.handleUpload}>上传</Button>
            </div>
        );
    }
}

export default Avatar