import React from 'react'
import {withRouter} from 'react-router-dom'
import { Layout, Menu, Breadcrumb,Dropdown,Avatar, message} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import logo from './logo.png'
import {clearToken} from '../../utils/auth'
import {adminRoutes} from '../../routes'
import './index.css'

const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route=>route.isShow)

function index(props) {
  const menu = (
    <Menu onClick={(p)=>{
      if(p.key === 'logOut'){
        clearToken()
        props.history.push('/login')
      }else{
        message.info(p.key)
      }
    }}>
      <Menu.Item key="logOut" >
        <a target="_blank" rel="noopener noreferrer" >
          退出
        </a>
      </Menu.Item>
    </Menu>
  );
    return (
        <Layout>
        <Header className="header" style={{backgroundColor:'black'}}>
          <div className="logo">
              <img src={logo} alt="logo"/>
          </div>
          
          <Dropdown overlay={menu}>
            <div>
            <Avatar style={{marginRight:10}} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592217214363&di=9deae26182fc73a2eb0f12a0765a7dc8&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F44%2F03%2F5ba2569c9b98c_610.jpg"></Avatar>
            <a className="ant-dropdown-link" onClick={e=>e.preventDefault()}  href="https://ant.design/index-cn" style={{color:'#fff'}}>
                后台管理员 <DownOutlined />
            </a>
            </div>
          </Dropdown>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
                {
                    routes.map(route=>{
                    return(<Menu.Item key={route.path} onClick={p=>props.history.push(p.key)} icon={route.icon}>{route.title}</Menu.Item>)
                    })
                }
            </Menu>
          </Sider>
          <Layout style={{ padding: '16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
}

export default withRouter(index) 
