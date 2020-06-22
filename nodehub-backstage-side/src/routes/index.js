import React from 'react'
import Login from "../pages/Login";
import Index from "../pages/admin/dashboard/index";
import List from "../pages/admin/products/List";
import Edit from "../pages/admin/products/Edit";
import esList from "../pages/admin/question/esList";
import esEdit from "../pages/admin/question/esEdit";
import Consumer from "../pages/admin/user/List";
import PageNotFound from "../pages/PageNotFound";
import { AreaChartOutlined,DatabaseFilled,AuditOutlined,SmileOutlined} from '@ant-design/icons';

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
    exact:true,
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
    exact:true
},{
    path:'/admin/essay',
    component:esList,
    isShow:true,
    exact:true,
    title:'问答列表管理',
    icon:<AuditOutlined />
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