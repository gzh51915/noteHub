const Router = require('express').Router()
const path = require('path')
// 引入手机验证码模块
const getSms = require('../common/smsFn.js')
// 引入常量
const {
	API_ICON_PATH,
	API_SUBAREA_PATH,
	API_QUESTION_PATH,
	API_BANNERS_PATH
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
	answerModel,
	bannerModel
} = require('../db/index')
const {
	findOneFn,
	findAllFn,
	findCountFn,
	conditionQueryFn,
	deleteOneFn,
	updateOneFn,
	sortFindFn
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
		const smsCode = await getSms(phonenumber)
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

// 获取问题-回答详情
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
// 发布问题
Router.post('/addQuestion', async (req, res) => {
	try {
		const rData = req.body
		const title = rData.title
		if (!title || !title.trim().length === 0) return res.send({
			status: 400,
			data: null,
			msg: '发布问题失败，缺乏必要条件'
		})
		// 判断当前问题是否存在
		let result = await findOneFn(questionModel, { title })
		if (result) return res.send({
			status: 400,
			data: null,
			msg: '发布问题失败，问题已存在'
		})
		let questioner = '匿名'
		if (rData.questioner && rData.questioner.trim().length !== 0) questioner = rData.questioner

		// 如果非匿名，判断用户是否存在
		if (questioner !== '匿名') {
			result = await findOneFn(userModel, { id: questioner })
			if (!result) return res.send({
				status: 400,
				data: null,
				msg: '发布失败，用户不存在'
			})
		}
		const content = rData.content || ''
		const id = Date.now()
		// 将问题添加入数据库
		await questionModel.create({ title, content, id, questioner })
		res.send({
			status: 200,
			data: {
				id, content, questioner, title
			},
			msg: '发布问题成功'
		})
	} catch (error) {
		console.log(error)
	}
})
// 发布回答接口
Router.post('/addAnswer', async (req, res) => {
	try {
		const aData = req.body
		const pid = aData.pid
		const answer = aData.answer
		// 判断必要条件 回答内容 和 问题Id是否为空
		if (!pid || !answer) return res.send({
			status: 400,
			msg: '缺乏必要条件',
			data: null
		})
		let result = await findOneFn(questionModel, { id: pid })
		// 判断问题id是否正确
		if (!result) res.send({
			status: 200,
			data: null,
			msg: '未检测到当前问题！'
		})
		const answerer = aData.answerer || '匿名'
		// 判断非匿名用户是否存在
		if (answerer !== '匿名') {
			result = await findOneFn(userModel, { id: answerer })
			if (!result) return res.send({
				status: 200,
				data: null,
				msg: '未检测到用户Id！'
			})
		}
		const id = Date.now()
		// 所有条件通过，插入数据库
		result = await answerModel.create({
			pid, answer, answerer, id, questioner: pid
		})

		res.send({
			status: 200,
			msg: '发布成功',
			data: {
				result
			}
		})
	} catch (error) {
		console.log(error)
	}
})
// 获取轮播图
Router.get('/getBanners', async (req, res) => {
	try {
		const result = await findAllFn(bannerModel)
		if (!result) return res.send({
			status: 400,
			dta: null,
			msg: "轮播图数据获取失败"
		})
		result.forEach(element => {
			element.img = `${API_BANNERS_PATH}${element.img}`
		});
		res.send({
			status: 200,
			data: {
				result
			},
			msg: "轮播图数据获取成功"
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
// 删除回答
Router.get('/admin/removeQuestions', async (req, res) => {
	try {
		const { id } = req.query
		if (!id) return res.send({
			status: 400,
			msg: '参数不合法',
			data: null
		})
		const { n } = await deleteOneFn(questionModel, { id })
		if (n === 0) return res.send({
			status: 400,
			msg: '删除失败',
			data: null
		})
		res.send({
			status: 200,
			msg: '删除成功'+n,
			data: null
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
		// console.log('进来了')
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
		console.log(n)
		if (n === 0) return res.send({
			status: 400,
			msg: '删除失败',
			data: null
		})
		res.send({
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
		let result = await findOneFn(subareaModel, {
			id
		})
		if (!result) res.send({
			status: 400,
			msg: '未检测到相应分区',
			data: null
		})
		if (!imgUrl && !title && !suffix) res.send({
			status: 400,
			msg: '未检测到需要修改的值',
			data: null
		})
		const newTitle = title || result.title
		let newImg = result.img
		if (imgUrl.length !== 0 && suffix.length !== 0) {
			// 图片名
			const imgName = "/" + Date.now() + suffix
			// 存储路径
			const newPath = path.join(__dirname, '../static/subareaImages' + imgName).replace(/\\/g, '/')
			let result = await imgWsFn(imgUrl, newPath)
			if (!result) return res.send({
				status: 400,
				data: null,
				msg: '图片转存失败'
			})
			newImg = imgName
		}
		result = await updateOneFn(subareaModel, id, {
			title: newTitle,
			img: newImg
		})
		// console.log(result)
		if (result.n === 0) return res.send({
			status: 400,
			data: null,
			msg: '修改失败'
		})
		res.send({
			status: 200,
			data: null,
			msg: '修改成功'
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
		if (!title || !imgUrl || !suffix) return res.send({
			status: 400,
			msg: '信息不完整',
			data: null
		})
		// 判断分区是否存在
		let result = await findOneFn(subareaModel, { title })
		if (result) return res.send({
			status: 400,
			data: null,
			msg: '当前分区已存在'
		})
		// 分区不存在，新增分区
		const id = Date.now()
		// 图片名
		const imgName = "/" + Date.now() + '.' + suffix
		// 存储路径
		const newPath = path.join(__dirname, '../static/subareaImages' + imgName).replace(/\\/g, '/')
		result = await imgWsFn(imgUrl, newPath)
		if (!result) return res.send({
			status: 400,
			data: null,
			msg: '图片转存失败'
		})
		result = await subareaModel.create({
			id,
			title,
			img: imgName
		})
		if (!result) return res.send({
			status: 400,
			data: null,
			msg: '添加失败'
		})
		res.send({
			status: 200,
			data: null,
			msg: '添加成功'
		})
	} catch (e) {
		//TODO handle the exception
		console.log(e)
	}
})
// 图表-用户回答数量Top20
Router.get('/admin/userAnswerTop20', verifyToken, async (req, res) => {
	try {
		const result = await sortFindFn(userModel, { answer: -1 })
		res.send({
			status: 200,
			msg: '用户回答数量获取成功',
			data: {
				result
			}
		})
		// console.log(result)
	} catch (error) {
		console.log(error)
	}
})
// 图表-分区点击量top20
Router.get('/admin/subareaImagesTop20', verifyToken, async (req, res) => {
	try {
		const result = await sortFindFn(subareaModel, { 'pv': -1 }, 10)
		res.send({
			status: 200,
			msg: '分区点击量获取成功',
			data: {
				result
			}
		})
	} catch (error) {
		console.log(error)
	}
})
// 图表-高赞回答top20
Router.get('/admin/goodAnswerTop20', verifyToken, async (req, res) => {
	try {
		let result = await sortFindFn(answerModel, { 'agree': -1 })
		if (!result) return res.send({
			status: 400,
			msg: '数据错误！',
			data: null
		})
		// 问题id数组
		let qid = ''
		let newArr = []
		for (const key in result)
			if (result.hasOwnProperty(key)) {
				qid = result[key].pid
				const qData = await findOneFn(questionModel, { id: qid })
				newArr.push({
					questionTitle: qData.title,
					questionId: result[key].pid,
					answerContent: result[key].answer,
					answerId: result[key].id,
					agree: result[key].agree,
					answerer: result[key].answerer
				})
			}
		res.send({
			status: 200,
			data: {
				result: newArr
			},
			msg: '数据获取成功'
		})
		// console.log(newArr)
	} catch (error) {
		console.log(error)
	}
})


// 身份验证中间件 
async function verifyToken(req, res, next) {
	try {
		const result = isTokenLate(req.headers.token)
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
