const { bannerModel } = require('./index')
const data = [
	{
		id: Date.now(),
		img: '/a.jpg',
		description: '',
		targetLink: ''
	},
	{
		id: Date.now(),
		img: '/b.jpg',
		description: '',
		targetLink: ''
	},
	{
		id: Date.now(),
		img: '/c.jpg',
		description: '',
		targetLink: ''
	},
	{
		id: Date.now(),
		img: '/d.jpg',
		description: '',
		targetLink: ''
	},

]



bannerModel.create(data, (err, doc) => {
	if (err) console.log(err)
	else console.log(doc)
})





// const path = require('path')
// const axios = require('axios')
// const cheerio = require('cheerio')
// const fs = require('fs')
// const baseurl = 'https://www.zhihu.com/hot'
// const {
// 	questionModel,
// 	answerModel
// } = require('./index.js')
// start()
// async function start() {
// 	try {
// 		let { data } = await axios({
// 			headers: {
// 				'Content-Type': 'application/x-www-form-urlencoded',
// 				'cookie': '_zap=df403636-1563-49e1-a4a4-a99479fd9f26; _xsrf=1dNlruBJhWe3fyEReN6GBBh6GwkdMwVU; d_c0="ALCbHXGLOxGPTh6XsdAQ7cbvcphdoh_uk8s=|1588833752"; _ga=GA1.2.338043038.1588833752; z_c0="2|1:0|10:1588833755|4:z_c0|92:Mi4xeWwwMEFnQUFBQUFBc0pzZGNZczdFU1lBQUFCZ0FsVk4yX3VnWHdEMGs1cm9kbmhNMUtHc2pCM3Y4R3RPNkdodmZ3|df0e1301bdedca7822395eaf4c24bf62d7ace3a2003bc4c1a7bf68d27e030e97"; tshl=; _gid=GA1.2.641955585.1590304490; q_c1=0d40ace45eab4013ae3e04ef6f0c6ead|1591600259000|1588838866000; SESSIONID=BVZqjthbxFFUtwfy1LHGOocdiR8xALjZNSRgKyiEIvQ; JOID=U1kcBU6bZ_PVop-geJxj5pNblsph2Tmmp8zrwBXnIb2P1ezGCSsHGIyml6d0rKyMdcX7-GLvw3BTnyyTgSd6Ivo=; osd=WlkRC06SZ_7bopagdZJj75NWmMpo2TSop8XrzRvnKL2C2-zPCSYJGIWmmql0payBe8Xy-G_hw3lTkiKTiCd3LPo=; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1592183472,1592223669,1592224155,1592224170; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1592225662; tst=h; KLBRSID=d017ffedd50a8c265f0e648afe355952|1592225924|1592223662'
// 			},
// 			method: 'get',
// 			url: baseurl
// 		})
// 		let $ = cheerio.load(data)
// 		$('.HotList-list .HotItem').each((index, ele) => {
// 			const title = $(ele).find('.HotItem-title').text()
// 			const content = $(ele).find('.HotItem-excerpt').text()
// 			const img = $(ele).find('img').attr('src')
// 			const id = Date.now()
// 			const answerUrl = $('.HotItem-content>a').eq(index).attr('href')

// 			saveImg(img, title, content, id)
// 			getAnswer(answerUrl, id)

// 		})
// 	} catch (e) {
// 		console.log(e)
// 	}
// }
// let questionArr = []
// async function saveImg(href, title, content, id) {
// 	try {
// 		// 获取时间戳，用以图片命名
// 		let timestamp = new Date().getTime()
// 		// 图片名称，时间戳+后缀
// 		let imgName = timestamp + path.extname(href)
// 		// 获取网络图片
// 		let res = await axios.get(href, {
// 			responseType: 'stream'
// 		})
// 		// 读取图片数据
// 		let ws = fs.createWriteStream(path.join(__dirname, `../static/questionImages/${imgName}`), {
// 			flags: 'w',
// 			encoding: 'utf-8'
// 		})
// 		// 通过管道的方式， 将图片写入到指定文件夹中
// 		res.data.pipe(ws)
// 		console.log(imgName, '写入成功！')
// 		// 存入数据库
// 		// questionArr.push({
// 		// 	id,title,content,img:`/hotImages/${imgName}`
// 		// })
// 		res = await questionModel.create({
// 			id,
// 			title,
// 			content,
// 			img: `/${imgName}`
// 		})
// 		console.log('问题插入成功：', res)

// 	} catch (err) {
// 		console.log('问题插入失败：', err)
// 	}
// }
// const answerArr = []
// async function getAnswer(answerUrl, pid) {
// 	try {
// 		let { data } = await axios({
// 			method: 'get',
// 			url: answerUrl
// 		})
// 		let $ = cheerio.load(data)
// 		// let arr = []
// 		$('.RichContent-inner').each(async (index, ele) => {
// 			const id = Date.now()
// 			const answer = $(ele).text()
// 			const questioner = pid
// 			// answerArr.push({
// 			// 	id,
// 			// 	answer,
// 			// 	questioner
// 			// })
// 			// 存入数据库
// 			const res = await answerModel.create({
// 				id,
// 				answer,
// 				questioner,
// 				pid
// 			})
// 			console.log("回答插入成功：",res)
// 			// console.log('回答数组：',answerArr.length)
// 		})
// 		// console.log('回答数组：',arr)
// 	} catch (error) {
// 		console.log('回答插入失败：', error)
// 	}
// }
