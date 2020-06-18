const Router = require('express').Router()
const path = require('path')
// 引入手机验证码模块
const getSms = require('../common/smsFn.js')
// 引入常量
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
	deleteOneFn,
	updateOneFn
} = require('../db/dbFn.js')
// md5加密模块
const md5 = require('blueimp-md5')
// 规则验证
const {
	isPhone
} = require('../common/rules.js')
// 引入公用方法
const {
	imgWsFn
} = require('../common/fsFn.js')


// 用户注册
Router.post('/register', async (req, res) => {
	try {
		const {
			phonenumber,
			password,
			smsCode
		} = req.body
		// 参数验证
		if (!isPhone(phonenumber) || !password || !smsCode) return res.send({
			status: 400,
			msg: '参数错误',
			data: null
		})
		// 手机验证码验证
		if (smsCode.toString() !== req.cookies.smsCode) return res.send({
			status: 400,
			msg: "验证码错误",
			data: null
		})
		// 验证是否存在
		let result = await findOneFn(userModel, {
			username: phonenumber
		})
		if (result) return res.send({
			status: 400,
			msg: '用户已存在',
			data: null
		})
		// 插入数据库
		result = await userModel.create({
			username: phonenumber,
			password: md5(password),
			id: Date.now(),
			icon: 'p1.jpg',
			nickname: Date.now()
		})
		res.send({
			status: 200,
			msg: '注册成功',
			data: null
		})
		// console.log(result)
	} catch (e) {
		//TODO handle the exception
		console.log(e)
	}
})
// 短信验证码
Router.get('/smsCode', async (req, res) => {
	try {
		const {
			phonenumber
		} = req.query
		if (!isPhone(phonenumber)) return res.send({
			status: 400,
			msg: '手机号码不合法',
			data: null
		})
		// 生成短信验证码
		// const smsCode = await getSms(phonenumber)
		const smsCode = 1234
		// 设置cookie
		res.cookie('smsCode', smsCode, {
			maxAge: 1000 * 60 * 5,
			httpOnly: true
		});
		res.send({
			status: 200,
			msg: '发送成功',
			data: {
				smsCode
			}
		})

	} catch (e) {
		//TODO handle the exception
		console.log(e)
	}
})
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
		// console.log(result)
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
		// console.log('getSubareaData=========请求进入')
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
		// console.log('=====',username,password)
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
Router.get('/admin/getAllUsers', verifyToken, async (req, res) => {
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
Router.get('/admin/removeUser', verifyToken, async (req, res) => {
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
Router.get('/admin/removeSubarea', verifyToken, async (req, res) => {
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
// 修改分区
Router.post('/admin/updateSubarea', verifyToken, async (req, res) => {
	try {
		const {
			id,
			imgUrl,
			suffix,
			title
		} = req.body
		res.send({
			status: 400,
			data: null,
			msg: '测试中'
		})
	} catch (e) {
		//TODO handle the exception
		console.log(e)
	}
})
// 新增分区
Router.post('/admin/addSubarea', verifyToken, async (req, res) => {
	try {
		const {
			title,
			imgUrl,
			suffix
		} = req.body
		res.send({
			status: 400,
			data: null,
			msg: '测试中'
		})
	} catch (e) {
		//TODO handle the exception
		console.log(e)
	}
})

// 图片测试
Router.post('/admin/ceshi', async (req, res) => {
	try {
		const {
			data,
			imgname,
			suffix
		} = req.body
		// const imgpath = path.join(__dirname,`../static/subareaImages/${Date.now()}.${suffix}`)
		// console.log(imgname,suffix)
	} catch (e) {
		//TODO handle the exception
		console.log(e)
	}
})


// 身份验证中间件 
async function verifyToken(req, res, next) {
	try {
		// console.log()
		const result = isTokenLate(req.headers.token)
		// console.log(result)
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
