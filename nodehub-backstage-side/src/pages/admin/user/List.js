import React, { Component }  from 'react'
import { Table ,Button,Popconfirm} from 'antd';
import Edit from './Edit'
import { Avatar } from 'antd';
import { UserApi } from '../../../services/products'
import { UserdelApi } from '../../../services/products'
export default class List extends Component {

  state=({
      dataSource:[] 
  })




  async componentDidMount(){
      const resule=await UserApi()
      console.log(resule.data.data.list);
      
      const dataSource=resule.data.data.list

    
      
      this.setState({
          dataSource
      })
    }
render() {  
const columns = [
  {
    title: '昵称',
    width: 100,
    dataIndex: 'nickname',
    key: 'nickname',
    fixed: 'left',
  },
  {
    title: '用户ID',
    width: 100,
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
  },
  {
    title: '提问数',
    dataIndex: 'questions',
    key: '1',
    width: 150,
  },
  {
    title: '回答数',
    dataIndex: 'answer',
    key: '2',
    width: 150,
  },
  {
    title: '头像',
    width: 150,
    render:(item)=>{
      return (
          <div>
              <Avatar src={item.icon}/>
          </div>
      )
    }
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: '5',
    width: 150,
  },
  {
    title: '用户状态',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: (record) => (
      <span>
    <Edit record={record}/>
    <Popconfirm title="确认删除?" onCancel={()=>console.log('取消')}  
                        onConfirm={()=>{ 
                            UserdelApi(record.id).then(
                             res=>{
                                  console.log(res,'============',record.id);                     
                              })
                            }}>
                        <Button style={{margin:"1rem 0rem"}} type="danger" size="small">删除</Button>
                        </Popconfirm>
    </span>
    ),
  },
];

const {dataSource} =this.state
  // for (let i = 0; i < 20; i++) {
  //   data.push({
  //     key: i,
  //     name: `Edrward ${i}`,
  //     age: 32,
  //     address: `London Park no. ${i}`,
  //   });
  // }
      return(
        <Table columns={columns} dataSource={dataSource} scroll={{ x: 1500, y: 600 }} />
      )
    }
}