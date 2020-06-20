import React,{useEffect,useState} from 'react'
import {Card,Table,Button,Popconfirm} from 'antd'
import { listApi } from '../../../services/products'
import { Avatar } from 'antd';



async function  List(props) {

    
    // let dataSource=[]
    
    const resule=await listApi()
    const dataSource=resule.data.data.list

    // .then(res=>{
    //     console.log(res)
    //     dataSource=res.data.data.list
    //      // this.id = res.data.id;
    //     console.log(dataSource)
    // });
    
    const columns = [{
        title:'序号',
        key:"id",
        width:80,
        align:'center',
        render:(txt,recode,index)=>index+1
    },{
        title:'分类名字',
        dataIndex:"title"
    },{
        title:'图片',
        dataIndex:"img"
    },{
        title:'操作',
        render:(txt,record,index)=>{
            return(
                <div>
                    <Button type="primary" size="small">修改</Button>
                    <Popconfirm title="确认删除?" onCancel={()=>console.log('确认')}  onConfirm={()=>console.log('确认')}>
                    <Button style={{margin:"0 1rem"}} type="danger" size="small">删除</Button>
                    </Popconfirm>
                </div>
            )
        }
    }]

    // console.log(dataSource)
    return ( 
        <Card title="分类列表管理" extra={
        <Button type="primary" size="small" onClick={()=>{props.history.push('/admin/products/edit')}}>
            新增
        </Button>}>
        <Table rowKey="id" 
        onRow={(record,index) => {
            return {
              onClick: event => {
                console.log(record,index);
                
              }, // 点击行
            };
          }}
         columns={columns} bordered dataSource={dataSource} />

        </Card>
    )
}

export default List
