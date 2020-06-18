const fs = require('fs')
const path = require('path')
const defaultPath = path.join(__dirname, '../static/noteHub.log')
const date = new Date()
// 日志写入模块
function logWsFn(user, target = '', content = '') {
	let fs = require('fs')
	// 创建写入流
	let ws = fs.createWriteStream(defaultPath, {
		flags: 'a',
		encoding: 'utf-8'
	})
	const delimiter = '*******************************************\n'
	user = `访问者:${user}\n`
	target = `访问地址:${target}\n`
	content = `内容:${content} \n`
	const time = `时间:${date.toLocaleString( )}\n`

	const data = delimiter + user + target + content + time
	// 文件流式写入
	ws.write(data, (err) => {
		if (err) console.log('error=>', err)
		// else console.log('日志更新')
	})
}

// 图片写入模块
function imgWsFn(base64, path, name) {
	return new Promise((resolve, reject) => {
		base64 = data.replace(/^data:image\/\w+;base64,/, ""); //去掉图片base64码前面部分data:image/png;base64
		const dataBuffer = new Buffer(base64, 'base64'); //把base64码转成buffer对象，
		// console.log('dataBuffer是否是Buffer对象：' + Buffer.isBuffer(dataBuffer));
		fs.writeFile(path, dataBuffer, function(err) { //用fs写入文件
			if (err)
				reject(err)
			else
				resolve(true)
		})
	})
}



module.exports = {
	logWsFn,imgWsFn
}
