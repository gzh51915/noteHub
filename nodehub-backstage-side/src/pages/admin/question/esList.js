import React, { Component } from 'react'
import { Card, Table, Button, Popconfirm, message } from 'antd'
import { delquestionApi, delApi,questionApi} from '../../../services/products'
import { Avatar } from 'antd';

export default class List extends Component {

    state = ({
        dataSource: []
    })

    delapi = (id) => {
        delquestionApi(id.id).then(res => {
            console.log(id);
            
            if (res.data.status === 200) {
                this.getList()
            } else {
                message.error("删除失败")
            }
        })
    }

    getList = async () => {
        const resule = await questionApi()
        const dataSource = resule.data.data.list
        this.setState({
            dataSource
        })
    }

    componentDidMount() {
        this.getList()
    }
    render() {

        const { dataSource } = this.state

        const columns = [{
            title: '序号',
            key: "_id",
            width: 80,
            align: 'center',
            render: (txt, recode, index) => index + 1
        }, {
            title: '问题标题',
            dataIndex: "title"
        },{
            title: '问题作者',
            dataIndex: "questioner"
        }, {
            title: '图片',
            render: (item) => {
                return (
                    <div>
                        <Avatar src={item.img} shape="square" size={64} />
                    </div>
                )
            }
        }, {
            title: '操作',
            render: (txt, record, index, titile) => {
                return (
                    <div>
                        <Button type="primary" size="small">修改</Button>
                        <Popconfirm title="确认删除?" onCancel={() => console.log('取消')}
                            onConfirm={() => {
                                this.delapi(record)
                            }}>
                            <Button style={{ margin: "0 1rem" }} type="danger" size="small">删除</Button>
                        </Popconfirm>
                    </div>
                )
            }
        }]

        return (
            <Card title="问答列表管理" >
                <Table rowKey="_id"
                    onRow={(record) => {
                        return {
                            onClick: event => {
                                // console.log(record,titile);
                            }, // 点击行
                        };
                    }}
                    columns={columns} bordered dataSource={dataSource} />

            </Card>
        )
    }
}
