import React from 'react'
import Login from "../pages/Login";
import Index from "../pages/admin/dashboard/index";
import List from "../pages/admin/products/List";
import Edit from "../pages/admin/products/Edit";
import esList from "../pages/admin/essay/esList";
import esEdit from "../pages/admin/essay/esEdit";
import Consumer from "../pages/admin/user/List";
import PageNotFound from "../pages/PageNotFound";
import { AreaChartOutlined,DatabaseFilled,ContainerTwoTone,SmileOutlined} from '@ant-design/icons';

export const mainRoutes = [{
    path:'/login',
    component:Login
},{
    path:'/404',
    component:PageNotFound
}]

export const adminRoutes = [{
    path:'/admin/dashboard',
    component:Index,
    isShow:true,
    title:'看板',
    icon:<AreaChartOutlined />

},{
    path:'/admin/products',
    component:List,
    isShow:true,
    exact:true,
    title:'分类列表管理',
    icon:<DatabaseFilled />
},{
    path:'/admin/products/edit/:id?',
    component:Edit,
    isShow:false,
},{
    path:'/admin/essay',
    component:esList,
    isShow:true,
    exact:true,
    title:'分类文章管理',
    icon:<ContainerTwoTone />
},{
    path:'/admin/essay/edit/:id?',
    component:esEdit,
    isShow:false,
},{
    path:'/admin/user/',
    component:Consumer,
    isShow:true,
    exact:true,
    title:'用户管理界面',
    icon:<SmileOutlined />
}
]