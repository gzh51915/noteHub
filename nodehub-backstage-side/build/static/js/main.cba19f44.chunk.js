(this["webpackJsonpstu-shop-manager"]=this["webpackJsonpstu-shop-manager"]||[]).push([[0],{373:function(e,t,a){e.exports=a.p+"static/media/logo.63d17010.png"},379:function(e,t,a){e.exports=a(843)},385:function(e,t,a){},386:function(e,t,a){},841:function(e,t,a){},842:function(e,t,a){},843:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),l=a.n(i),o=a(119),c=a(31),s=(a(384),a(385),a(852)),u=a(849),m=a(847),d=a(851),p=a(152),h=a(33);a(386);var f=a(349),g=a.n(f).a.create({baseURL:"http://182.92.241.251:4000/api",timeout:5e3});function y(e,t){return g.get(e,{params:t})}function E(e,t){return g.post(e,t)}g.defaults.headers.token=localStorage.getItem("token"),g.interceptors.request.use((function(e){return e}),(function(e){})),g.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var b={labelCol:{span:6},wrapperCol:{span:16}},v={wrapperCol:{offset:8,span:16}},x=function(e){return r.a.createElement(u.a,{title:"noteHub Admin SYS",className:"login-form"},r.a.createElement(m.a,Object.assign({},b,{name:"basic",initialValues:{remember:!0},onFinish:function(t){var a;console.log("Success:",t),(a={username:t.username,password:t.password},E("/admin/login",a)).then((function(t){var a;200===t.data.status?(s.a.success("\u767b\u5f55\u6210\u529f"),console.log("=================",t.data),a=t.data.data.token,localStorage.setItem("token",a),e.history.push("/admin")):s.a.info(t.message),console.log(t)})).catch((function(e){console.log(e),s.a.error("\u7528\u6237\u4e0d\u5b58\u5728")}))},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(m.a.Item,{label:"\u8d26\u53f7",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u7528\u6237\u540d!"}]},r.a.createElement(d.a,null)),r.a.createElement(m.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u5bc6\u7801!"}]},r.a.createElement(d.a.Password,null)),r.a.createElement(m.a.Item,Object.assign({},v,{name:"remember",valuePropName:"checked"}),r.a.createElement(p.a,null,"\u8bb0\u4f4f\u8d26\u53f7")),r.a.createElement(m.a.Item,v,r.a.createElement(h.a,{type:"primary",htmlType:"submit"},"\u767b\u5f55"))))},w=a(60),k=a.n(w),O=a(87),S=a(55),j=a(56),C=a(59),I=a(57),F=a(153),A=a.n(F);function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return y("/getSubareaData",{page:e})}function U(e,t){return y("/admin/removeSubarea?id=".concat(e))}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return y("/admin/getAllUsers",{page:e})}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return y("/getQuestions",{page:e})}function T(e,t){return y("/admin/removeQuestions?id=".concat(e))}var z=function(e){Object(C.a)(a,e);var t=Object(I.a)(a);function a(){var e;return Object(S.a)(this,a),(e=t.call(this)).charts=Object(n.createRef)(),e.chart=Object(n.createRef)(),e.chartx=Object(n.createRef)(),e.chartt=Object(n.createRef)(),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(k.a.mark((function e(){var t,a,n,r,i,l,o,c,s,u,m,d,p;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("/admin/userAnswerTop20");case 2:return t=e.sent,e.next=5,y("/admin/subareaImagesTop20");case 5:return a=e.sent,e.next=8,y("/admin/goodAnswerTop20");case 8:n=e.sent,r=[],i=[],(l=t.data.data.result).forEach((function(e){r.push(e.nickname)})),console.log(n),l.forEach((function(e){i.push(e.answer)})),o=[],c=[],s=a.data.data.result,console.log(s),s.forEach((function(e){o.push(e.title)})),s.forEach((function(e){c.push(e.pv)})),u=[],m=[],d=[],(p=n.data.data.result).forEach((function(e){u.push(e.answerer)})),p.forEach((function(e){m.push(e.agree)})),p.forEach((function(e){d.push(e.questionTitle)})),console.log(d),A.a.init(this.charts.current).setOption({title:{text:"\u5206\u533a\u70b9\u51fb\u91cfTOP10"},xAxis:{type:"category",data:o},yAxis:{type:"value"},series:[{data:c,type:"line",lineStyle:{normal:{color:"#4169E1"}}}]}),A.a.init(this.chart.current).setOption({title:{text:"\u4e3b\u8981\u5206\u533a\u8bbf\u95ee\u91cf"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["\u6570\u7801","\u6821\u56ed","\u52a8\u6f2b","\u4eb2\u5b50","\u6e38\u620f"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d","\u5468\u65e5"]}],yAxis:[{type:"value"}],series:[{name:"\u6570\u7801",type:"line",stack:"\u603b\u91cf",areaStyle:{},label:{normal:{show:!0,position:"top"}},data:[120,132,101,134,90,230,210]},{name:"\u6821\u56ed",type:"line",stack:"\u603b\u91cf",areaStyle:{},label:{normal:{show:!0,position:"top"}},data:[220,182,191,234,290,330,310]},{name:"\u52a8\u6f2b",type:"line",stack:"\u603b\u91cf",areaStyle:{},label:{normal:{show:!0,position:"top"}},data:[150,232,201,154,190,330,410]},{name:"\u4eb2\u5b50",type:"line",stack:"\u603b\u91cf",areaStyle:{},label:{normal:{show:!0,position:"top"}},data:[320,332,301,334,390,330,320]},{name:"\u6e38\u620f",type:"line",stack:"\u603b\u91cf",label:{normal:{show:!0,position:"top"}},areaStyle:{},data:[820,932,901,934,1290,1330,1320]}]}),A.a.init(this.chartt.current).setOption({title:{text:"\u7528\u6237\u56de\u7b54\u6570\u91cftop10"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["2020\u5e74"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:r},series:[{name:"2020\u5e74",type:"bar",data:i}]}),A.a.init(this.chartx.current).setOption({title:{text:"\u597d\u8bc4\u56de\u7b54top10"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["2020\u5e74"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:u},series:[{name:d,type:"bar",data:m}]});case 37:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",height:"100%"}},r.a.createElement("div",{ref:this.chartt,style:{width:"750px",height:"400px",float:"left"}}),r.a.createElement("div",{ref:this.charts,style:{width:"750px",height:"400px",float:"left"}}),r.a.createElement("div",{ref:this.chart,style:{width:"750px",height:"400px",float:"left"}}),r.a.createElement("div",{ref:this.chartx,style:{width:"750px",height:"400px",float:"left"}}))}}]),a}(n.Component),M=a(853),N=a(846),D=a(844),P=function(e){Object(C.a)(a,e);var t=Object(I.a)(a);function a(){var e;Object(S.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={dataSource:[]},e.delapi=function(t){U(t.id).then((function(a){console.log(t),200===a.data.status?e.getList():s.a.error("\u5220\u9664\u5931\u8d25")}))},e.getList=Object(O.a)(k.a.mark((function t(){var a,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L();case 2:a=t.sent,n=a.data.data.list,e.setState({dataSource:n});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getList()}},{key:"render",value:function(){var e=this,t=this.state.dataSource,a=[{title:"\u5e8f\u53f7",key:"_id",width:80,align:"center",render:function(e,t,a){return a+1}},{title:"\u5206\u7c7b\u540d\u5b57",dataIndex:"title"},{title:"\u56fe\u7247",render:function(e){return r.a.createElement("div",null,r.a.createElement(D.a,{src:e.img}))}},{title:"\u64cd\u4f5c",render:function(t,a,n,i){return r.a.createElement("div",null,r.a.createElement(h.a,{type:"primary",size:"small"},"\u4fee\u6539"),r.a.createElement(M.a,{title:"\u786e\u8ba4\u5220\u9664?",onCancel:function(){return console.log("\u53d6\u6d88")},onConfirm:function(){e.delapi(a)}},r.a.createElement(h.a,{style:{margin:"0 1rem"},type:"danger",size:"small"},"\u5220\u9664")))}}];return r.a.createElement(u.a,{title:"\u5206\u7c7b\u5217\u8868\u7ba1\u7406",extra:r.a.createElement(h.a,{type:"primary",size:"small",onClick:function(){e.props.history.push("/admin/products/edit")}},"\u65b0\u589e")},r.a.createElement(N.a,{rowKey:"_id",onRow:function(e){return{onClick:function(e){}}},columns:a,bordered:!0,dataSource:t}))}}]),a}(n.Component),_=a(249),G=a(848),K=a(854),B=a(855);var H=function(e){Object(C.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(S.a)(this,a),(n=t.call(this,e)).beforeUpload=function(e){var t="image/jpeg"===e.type||"image/png"===e.type,a=e.type.split("/")[1];return n.setState({suffix:a}),t||s.a.error("You can only upload JPG/PNG file!"),e.size/1024/1024<5||s.a.error("Image must smaller than 5MB!"),e},n.handleChange=function(e){!function(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}(e.file.originFileObj,(function(e){var t=n.state.suffix;return n.props.getImg(e,t),n.setState({imageUrl:e,loading:!1})}))},n.handleRemove=function(){n.setState({imageUrl:null})},n.state={loading:!1,imageUrl:null,suffix:""},n}return Object(j.a)(a,[{key:"render",value:function(){var e=r.a.createElement("div",null,this.state.loading?r.a.createElement(K.a,null):r.a.createElement(B.a,null),r.a.createElement("div",{className:"ant-upload-text"},"Upload")),t=this.state.imageUrl;return r.a.createElement("div",null,r.a.createElement(G.a,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,beforeUpload:this.beforeUpload,onChange:this.handleChange},t?r.a.createElement("img",{src:t,alt:"avatar",style:{width:"100%"}}):e,t?r.a.createElement(h.a,{onClick:this.handleRemove},"\u79fb\u9664\u56fe\u7247"):""))}}]),a}(r.a.Component),J=function(e){s.a.error("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5185\u5bb9"),console.log("Failed:",e)},Q=Object(c.g)((function(e){var t=Object(n.useState)(""),a=Object(_.a)(t,2),i=a[0],l=a[1],o=Object(n.useState)(""),c=Object(_.a)(o,2),p=c[0],f=c[1],g=function(e,t){l(e),f(t)};return r.a.createElement(u.a,{title:"\u5206\u7c7b\u5217\u8868\u7f16\u8f91"},r.a.createElement(m.a,{onFinish:function(t){var a=t.title;g();(function(e,t,a){return E("/admin/addSubarea",{title:e,imgUrl:t,suffix:a})})(a,i,p).then((function(t){var a=t.data;if(console.log(a),200!==a.status)return s.a.error(a.msg,2);s.a.success(a.msg,2),e.history.push({pathname:"/admin/products"})}))},onFinishFailed:J},r.a.createElement(m.a.Item,{name:"title",label:"title",rules:[{required:!0,message:"\u7c7b\u522b\u7684\u6807\u9898\u5fc5\u987b\u8f93\u5165"}]},r.a.createElement(d.a,{placeholder:"\u8bf7\u8f93\u5165\u7c7b\u522b\u7684\u6807\u9898"})),r.a.createElement(m.a.Item,null,r.a.createElement(H,{getImg:g})),r.a.createElement(m.a.Item,null,r.a.createElement(h.a,{htmlType:"submit",type:"primary"},"\u4fdd\u5b58"))))})),V=function(e){Object(C.a)(a,e);var t=Object(I.a)(a);function a(){var e;Object(S.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={dataSource:[]},e.delapi=function(t){T(t.id).then((function(a){console.log(t),200===a.data.status?e.getList():s.a.error("\u5220\u9664\u5931\u8d25")}))},e.getList=Object(O.a)(k.a.mark((function t(){var a,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R();case 2:a=t.sent,n=a.data.data.list,e.setState({dataSource:n});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getList()}},{key:"render",value:function(){var e=this,t=this.state.dataSource,a=[{title:"\u5e8f\u53f7",key:"_id",width:80,align:"center",render:function(e,t,a){return a+1}},{title:"\u95ee\u9898\u6807\u9898",dataIndex:"title"},{title:"\u95ee\u9898\u4f5c\u8005",dataIndex:"questioner"},{title:"\u56fe\u7247",render:function(e){return r.a.createElement("div",null,r.a.createElement(D.a,{src:e.img,shape:"square",size:64}))}},{title:"\u64cd\u4f5c",render:function(t,a,n,i){return r.a.createElement("div",null,r.a.createElement(h.a,{type:"primary",size:"small"},"\u4fee\u6539"),r.a.createElement(M.a,{title:"\u786e\u8ba4\u5220\u9664?",onCancel:function(){return console.log("\u53d6\u6d88")},onConfirm:function(){e.delapi(a)}},r.a.createElement(h.a,{style:{margin:"0 1rem"},type:"danger",size:"small"},"\u5220\u9664")))}}];return r.a.createElement(u.a,{title:"\u95ee\u7b54\u5217\u8868\u7ba1\u7406"},r.a.createElement(N.a,{rowKey:"_id",onRow:function(e){return{onClick:function(e){}}},columns:a,bordered:!0,dataSource:t}))}}]),a}(n.Component),W=function(){return r.a.createElement("div",null,"\u7f16\u8f91")},Y=a(850),$={labelCol:{span:6},wrapperCol:{span:16}},X=function(){return r.a.createElement(m.a,Object.assign({},$,{name:"basic",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(m.a.Item,{label:"\u6635\u79f0",name:"nickname",rules:[{required:!0,message:"\u8bf7\u8f93\u5165!"}]},r.a.createElement(d.a,null)),r.a.createElement(m.a.Item,{label:"\u7528\u6237ID",name:"id",rules:[{required:!0,message:"\u8bf7\u8f93\u5165!"}]},r.a.createElement(d.a,null)),r.a.createElement(m.a.Item,{label:"\u63d0\u95ee\u6570",name:"questions",rules:[{required:!0,message:"\u8bf7\u8f93\u5165!"}]},r.a.createElement(d.a,null)),r.a.createElement(m.a.Item,{label:"\u56de\u7b54\u6570",name:"answer",rules:[{required:!0,message:"\u8bf7\u8f93\u5165!"}]},r.a.createElement(d.a,null)),r.a.createElement(m.a.Item,{label:"icon",name:"money",rules:[{required:!0,message:"\u8bf7\u8f93\u5165!"}]},r.a.createElement(d.a,null)))},Z=function(e){Object(C.a)(a,e);var t=Object(I.a)(a);function a(){var e;Object(S.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={ModalText:r.a.createElement(X,null),visible:!1,confirmLoading:!1},e.showModal=function(){e.setState({visible:!0})},e.handleOk=function(){e.setState({ModalText:"\u6b63\u5728\u4fee\u6539",confirmLoading:!0}),setTimeout((function(){e.setState({visible:!1,confirmLoading:!1})}),2e3)},e.handleCancel=function(){e.setState({visible:!1})},e}return Object(j.a)(a,[{key:"render",value:function(e){var t=this.state,a=t.visible,n=t.confirmLoading,i=t.ModalText;return r.a.createElement("div",null,r.a.createElement(h.a,{style:{margin:"1 1rem"},type:"primary",onClick:this.showModal,size:"small"},"\u7f16\u8f91"),r.a.createElement(Y.a,{title:"\u7528\u6237\u7ba1\u7406",visible:a,onOk:this.handleOk,confirmLoading:n,onCancel:this.handleCancel},r.a.createElement("p",null,i)))}}]),a}(r.a.Component),ee=function(e){Object(C.a)(a,e);var t=Object(I.a)(a);function a(){var e;Object(S.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={dataSource:[]},e.getUser=Object(O.a)(k.a.mark((function t(){var a,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q();case 2:a=t.sent,console.log(a.data.data.list),n=a.data.data.list,e.setState({dataSource:n});case 6:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this,t=[{title:"\u6635\u79f0",width:100,dataIndex:"nickname",key:"nickname",fixed:"left"},{title:"\u7528\u6237ID",width:100,dataIndex:"id",key:"id",fixed:"left"},{title:"\u63d0\u95ee\u6570",dataIndex:"questions",key:"1",width:150},{title:"\u56de\u7b54\u6570",dataIndex:"answer",key:"2",width:150},{title:"\u5934\u50cf",width:150,render:function(e){return r.a.createElement("div",null,r.a.createElement(D.a,{src:e.icon}))}},{title:"\u7528\u6237\u540d",dataIndex:"username",key:"5",width:150},{title:"\u7528\u6237\u72b6\u6001",key:"operation",fixed:"right",width:100,render:function(t){return r.a.createElement("span",null,r.a.createElement(Z,{record:t}),r.a.createElement(M.a,{title:"\u786e\u8ba4\u5220\u9664?",onCancel:function(){return console.log("\u53d6\u6d88")},onConfirm:function(){var a;(a=t.id,y("/admin/removeUser?id=".concat(a))).then((function(t){console.log(t.data.status),200===t.data.status?e.getUser():s.a.error("\u5220\u9664\u5931\u8d25")}))}},r.a.createElement(h.a,{style:{margin:"1rem 0rem"},type:"danger",size:"small"},"\u5220\u9664")))}}],a=this.state.dataSource;return r.a.createElement(N.a,{columns:t,dataSource:a,scroll:{x:1500,y:600},rowKey:"_id"})}}]),a}(n.Component);var te=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404"))},ae=a(856),ne=a(857),re=a(858),ie=a(859),le=[{path:"/login",component:x},{path:"/404",component:te}],oe=[{path:"/admin/dashboard",component:z,isShow:!0,title:"\u770b\u677f",exact:!0,icon:r.a.createElement(ae.a,null)},{path:"/admin/products",component:P,isShow:!0,exact:!0,title:"\u5206\u7c7b\u5217\u8868\u7ba1\u7406",icon:r.a.createElement(ne.a,null)},{path:"/admin/products/edit/:id?",component:Q,isShow:!1,exact:!0},{path:"/admin/essay",component:V,isShow:!0,exact:!0,title:"\u95ee\u7b54\u5217\u8868\u7ba1\u7406",icon:r.a.createElement(re.a,null)},{path:"/admin/essay/edit/:id?",component:W,isShow:!1},{path:"/admin/user/",component:ee,isShow:!0,exact:!0,title:"\u7528\u6237\u7ba1\u7406\u754c\u9762",icon:r.a.createElement(ie.a,null)}],ce=a(845),se=a(104),ue=a(195),me=a(860),de=a(373),pe=a.n(de),he=(a(841),ce.a.Header),fe=ce.a.Content,ge=ce.a.Sider,ye=oe.filter((function(e){return e.isShow}));var Ee=Object(c.g)((function(e){var t=r.a.createElement(se.a,{onClick:function(t){"logOut"===t.key?(localStorage.removeItem("token"),e.history.push("/login")):s.a.info(t.key)}},r.a.createElement(se.a.Item,{key:"logOut"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer"},"\u9000\u51fa")));return r.a.createElement(ce.a,null,r.a.createElement(he,{className:"header",style:{backgroundColor:"black"}},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:pe.a,alt:"logo"})),r.a.createElement(ue.a,{overlay:t},r.a.createElement("div",null,r.a.createElement(D.a,{style:{marginRight:10},src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592217214363&di=9deae26182fc73a2eb0f12a0765a7dc8&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F44%2F03%2F5ba2569c9b98c_610.jpg"}),r.a.createElement("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()},href:"https://ant.design/index-cn",style:{color:"#fff"}},"\u540e\u53f0\u7ba1\u7406\u5458 ",r.a.createElement(me.a,null))))),r.a.createElement(ce.a,null,r.a.createElement(ge,{width:200,className:"site-layout-background"},r.a.createElement(se.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0}},ye.map((function(t){return r.a.createElement(se.a.Item,{key:t.path,onClick:function(t){return e.history.push(t.key)},icon:t.icon},t.title)})))),r.a.createElement(ce.a,{style:{padding:"16px"}},r.a.createElement(fe,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280}},e.children))))}));a(842);var be=function(){return localStorage.getItem("token")?r.a.createElement(Ee,null,r.a.createElement(c.d,null,oe.map((function(e){return r.a.createElement(c.b,{key:e.path,path:e.path,exact:e.exact,render:function(t){return r.a.createElement(e.component,t)}})})),r.a.createElement(c.a,{to:oe[0].path,from:"/admin"}),r.a.createElement(c.a,{to:"/404"}))):r.a.createElement(c.a,{to:"/login"})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/admin",render:function(e){return r.a.createElement(be,e)}}),le.map((function(e){return r.a.createElement(c.b,Object.assign({key:e.path},e))})),r.a.createElement(c.a,{to:"/admin",from:"/"}),r.a.createElement(c.a,{to:"/404"}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[379,1,2]]]);
//# sourceMappingURL=main.cba19f44.chunk.js.map