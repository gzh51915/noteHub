const Router = require('express').Router()

Router.get('/', (req, res) => {
	res.send({
		status: 200,
		data: null,
		msg: "请求数据成功!"
	})
})

module.exports = Router
