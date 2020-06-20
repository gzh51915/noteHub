import React from 'react';
import { Upload, message, Button } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        return callback(reader.result)
    });
    reader.readAsDataURL(img);
}




class Avatar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            imageUrl: null,
            suffix:''
        }
    }
    // 判断文件类型
    beforeUpload=(file)=> {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        const suffix = (file.type.split("/")[1]);
        
        this.setState({
            suffix
        })
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 5;
        if (!isLt2M) {
            message.error('Image must smaller than 5MB!');
        }
        return file
    }


    handleChange = info => {
        // console.log(beforeUpload());
        getBase64(info.file.originFileObj, imageUrl => {
            const {suffix}=this.state
            // console.log(suffix);
            this.props.getImg(imageUrl,suffix)
            // console.log(imageUrl);
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
    // handleUpload =async () => {
    //     const {imageUrl} = this.state
    //     // if (!imageUrl) return message.error('请选择图片');
    //     console.log('触发了=======');
    //     console.log(this.props)
        
    // }
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
                    beforeUpload={this.beforeUpload}
                    onChange={this.handleChange}
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    {imageUrl ? <Button onClick={this.handleRemove}>移除图片</Button> : ""}
                </Upload>


                {/* <Button onClick={this.handleUpload}>上传</Button> */}
            </div>
        );
    }
}

export default Avatar