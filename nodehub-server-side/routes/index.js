const Router = require('express').Router()
const path = require('path')
const {
	API_ICON_PATH,
	API_SUBAREA_PATH,
	API_QUESTION_PATH
} = require('../common/public')
// 引入token模块
const {
	setToken,
	isTokenLate
} = require('../common/jwt')
// 引入数据库封装的方法
const {
	userModel,
	subareaModel,
	adminModel,
	questionModel,
	answerModel
} = require('../db/index')
const {
	findOneFn,
	findAllFn,
	findCountFn,
	conditionQueryFn,
	deleteOneFn
} = require('../db/dbFn.js')
// md5加密模块
const md5 = require('blueimp-md5')
// 用户登录
Router.post('/login', async (req, res) => {
	try {
		const {
			username,
			password
		} = req.body
		const result = await findOneFn(userModel, {
			username,
			password: md5(password)
		})
		if (!result) return res.send({
			status: 400,
			data: null,
			msg: "账号或密码错误！"
		})
		const token = setToken(username)
		// 获取请求路径
		const {
			nickname,
			questions,
			answer,
			id,
			icon
		} = result
		return res.send({
			status: 200,
			msg: '登录成功',
			data: {
				username,
				token,
				nickname,
				questions,
				answer,
				id,
				icon: `${API_ICON_PATH}/${icon}`
			}
		})
	} catch (error) {
		console.log(error)
	}
})
// 获取分区数据
Router.get('/getSubareaData', async (req, res) => {
	try {
		console.log('getSubareaData=========请求进入')
		const {
			page,
			pagesize
		} = req.query
		const result = await findAllFn(subareaModel, Number(page), Number(pagesize))
		const count = await findCountFn(subareaModel)
		result.forEach(element => {
			element.img = `${API_SUBAREA_PATH}${element.img}`
		});
		res.send({
			status: 200,
			data: {
				list: result,
				count
			},
			msg: '获取分区数据成功'
		})
	} catch (error) {
		console.log(error)
	}
})
// 获取问题
Router.get('/getQuestions', async (req, res) => {
	try {
		const {
			page,
			pagesize
		} = req.query
		const result = await findAllFn(questionModel, Number(page), Number(pagesize))
		const count = await findCountFn(questionModel)
		result.forEach(element => {
			element.img = `${API_QUESTION_PATH}${element.img}`
		});
		res.send({
			status: 200,
			data: {
				list: result,
				count
			},
			msg: '问题列表获取成功'
		})
	} catch (error) {
		console.log(error)
	}
})
// 获取问题详情
Router.get('/getQuestionsDetail/:id', async (req, res) => {
	try {
		const {
			id
		} = req.params
		const answerResult = await conditionQueryFn(answerModel, {
			pid: id
		})
		const questionResult = await conditionQueryFn(questionModel, {
			id
		})
		if (questionResult.length === 0 || !id) return res.send({
			status: 400,
			data: null,
			msg: '未找到当前数据！'
		})
		questionResult.forEach(element => {
			element.img = `${API_QUESTION_PATH}${element.img}`
		});
		res.send({
			status: 200,
			data: {
				question: questionResult,
				answer: answerResult
			},
			msg: '获取成功！'
		})
	} catch (error) {
		console.log(error)
	}
})

// 管理员登录
Router.post('/admin/login', async (req, res) => {
	try {

		const {
			username,
			password
		} = req.body
		const result = await findOneFn(adminModel, {
			username,
			password: md5(password)
		})
		if (!result) return res.send({
			status: 400,
			data: null,
			msg: "账号或密码错误！"
		})
		const token = setToken(username)
		// console.log(res.cookies)
		res.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24
		})
		return res.send({
			status: 200,
			msg: '登录成功',
			data: {
				username,
				token
			}
		})
	} catch (error) {
		console.log(error)
	}
})
// 获取全部用户
Router.get('/admin/getAllUsers', async (req, res) => {
	try {
		const {
			page,
			pagesize
		} = req.query
		const result = await findAllFn(userModel, Number(page), Number(pagesize))
		const count = await findCountFn(userModel)
		result.forEach(element => {
			element.icon = `${API_ICON_PATH}/${element.icon}`
		});
		res.send({
			status: 200,
			msg: '查询成功',
			data: {
				list: result,
				count
			}
		})
	} catch (error) {
		console.log(error)
	}
})
// 删除用户
Router.get('/admin/removeUser', async (req, res) => {
	try {
		const {
			id
		} = req.query
		if (!id) return res.send({
			status: 400,
			msg: '参数错误',
			data: null
		})
		const {
			n
		} = await deleteOneFn(userModel, {
			id
		})
		if (n === 0) return res.send({
			status: 400,
			msg: '删除失败',
			data: null
		})
		else res.send({
			status: 200,
			msg: '删除成功',
			data: null
		})
	} catch (error) {
		console.log(error)
	}
})
// 删除分区
Router.get('/admin/removeSubarea', async (req, res) => {
	try {
		const {
			id
		} = req.query
		if (!id) return res.send({
			status: 400,
			msg: '参数错误',
			data: null
		})
		const {
			n
		} = await deleteOneFn(subareaModel, {
			id
		})
		if (n === 0) return res.send({
			status: 400,
			msg: '删除失败',
			data: null
		})
		else res.send({
			status: 200,
			msg: '删除成功',
			data: null
		})


	} catch (error) {
		console.log(error)
	}
})



// 身份验证中间件
async function verifyToken(req, res, next) {
	try {
		const result = isTokenLate(req.headers.token)
		console.log(result)
		if (!result) return res.send({
			status: 400,
			msg: '身份不合法',
			data: null
		})
		next()
	} catch (error) {
		console.log(error)
	}
}

module.exports = Router
