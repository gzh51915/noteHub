const express = require('express')
const app = express()
const port = 3005
const router = require('./routes')
const bodyParser = require('body-parser');
// 跨域处理==================================================
app.all("*", function (req, res, next) {
    //设置允许跨域的域名  
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    // 允许凭证访问控制
    res.header('Access-Control-Allow-Credentials', 'true');
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options') res.send(200); //让options尝试请求快速结束
    else next();
})
// post请求处理==============================================
app.use(bodyParser.json());// 添加json解析
app.use(bodyParser.urlencoded({ extended: false }));
// 路由处理
app.use('/api',router)
// 监听服务器状态
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port} running...`)
})