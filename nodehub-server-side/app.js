const express = require('express')
const app = express()
const port = 4444
// 引入路由
// const backStageRouter = require('./routes/backStage')
const routes = require('./routes')
const routeStatic = require('./routes/static')
// post请求中间件
const bodyParser = require('body-parser');
// 引入cookie
const cookieParser = require('cookie-parser');
// 引入日志
const {
	logWsFn
} = require('./common/fsFn.js')
// 跨域处理==================================================
app.all("*", function(req, res, next) {
	//设置允许跨域的域名  
	res.header("Access-Control-Allow-Origin", req.get('origin'));
	//允许的header类型
	res.header("Access-Control-Allow-Headers", "content-type,token,x-requested-with");
	// 允许凭证访问控制
	res.header('Access-Control-Allow-Credentials', 'true');
	//跨域允许的请求方式 
	res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
	// logWsFn( req.headers.origin,req.originalUrl)
	if (req.method.toLowerCase() == 'options') res.send(200); //让options尝试请求快速结束
	else next();
})
// cookie处理
app.use(cookieParser())
// post请求处理==============================================
app.use(bodyParser.json({
	limit: '500mb'
}));
app.use(bodyParser.urlencoded({
	limit: '500mb',
	extended: true
}));
// 路由处理
app.use('/api', routes)
app.use('/api/source', routeStatic)

// 监听服务器状态
//  http://10.3.135.11:4444/api
app.listen(port, () => {
	console.log(`======= http://127.0.0.1:${port} running =======`)
})
