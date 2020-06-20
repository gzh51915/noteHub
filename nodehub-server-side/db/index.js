const mongoose = require('mongoose')
//1 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/noteHub', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
//2 监听数据库状态
let db = mongoose.connection
//3 监听端口
db.on('open', () => {
	console.log('======= mongodb://127.0.0.1:27017/zsgDB successfu lconnection =======');
})
const Schema = mongoose.Schema
// =================================Schema=================================
// 管理员模式对象
const adminSchema = new Schema({
	id: {
		type: String,
		required: true,
		trim: true
	},
	username: {
		type: String,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
		trim: true
	}
})
// 用户模式对象
const userSchema = new Schema({
	id: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		trim: true
	},
	nickname: {
		type: String,
		trim: true,
		default: Date.now() + 'note' + parseInt(Math.random() * 100000)
	},
	password: {
		type: String,
		required: true,
		trim: true
	},
	// 头像地址
	icon: {
		type: String,
		required: true,
		trim: true
	},
	// 问题数量
	questions: {
		type: Number,
		default: 0
	},
	// 回答数量
	answer: {
		type: Number,
		default: 0
	}
})
// 发现-分区模型对象
const subareaSchma = new Schema({
	id: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	img: {
		type: String,
		required: true
	},
	targetUrl: {
		type: String
	}
})
// 问题模型对象
const questionSchma = new Schema({
	id: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	img: {
		type: String,
		default: null
	},
	content: {
		type: String,
		default: null
	},
	hot: {
		type: Number,
		default: 0
	},
	questioner: {
		type: String,
		default: '匿名'
	},
	// 发表时间
	time: {
		type: Date,
		default: Date.now
	},
	// 是否推上热榜
	HotList: {
		type: Boolean,
		default: false
	},
	// 是否主动推荐给用户
	recommend: {
		type: Boolean,
		default: false
	},
	// 问题类型
	classify: {
		type: Boolean,
		default: null
	}
})
// 回答模型对象
const answerSchma = new Schema({
	id: {
		type: String,
		required: true
	},
	pid: {
		type: String,
		required: true
	},
	answer: {
		type: String,
		required: true
	},
	questioner: {
		type: String,
		required: true
	},
	answerer: {
		type: String,
		default: '匿名'
	},
	time: {
		type: Date,
		default: Date.now
	},
	agree: {
		type: Number,
		default: 0
	},
	comment: {
		type: Number,
		default: 0
	}

})
// 轮播图模型对象
const bannerSchma = new Schema({
	id: {
		type: String,
		required: true
	},
	img: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	targetLink: {
		type: String
	}

})
// ======================模型======================
// 管理员集合对象
const adminModel = mongoose.model('admin', adminSchema)
// 用户集合对象
const userModel = mongoose.model('users', userSchema)
// 分区集合对象
const subareaModel = mongoose.model('subarea', subareaSchma)
// 问题集合对象
const questionModel = mongoose.model('questions', questionSchma)
// 回答集合对象
const answerModel = mongoose.model('answers', answerSchma)
// 轮播图集合对象
const bannerModel = mongoose.model('banners', bannerSchma)
module.exports = {
	adminModel,
	userModel,
	subareaModel,
	questionModel,
	answerModel
}



// const md5 = require('blueimp-md5')
// let str = `13000409999 13000409998 13000409997 13000409996 13000409995 13000409994 13000409993 13000409992 13000409991 13000409990 13000409989 13000409988 13000409987 13000409986 13000409985 13000409984 13000409983 13000409982 13000409981 13000409980 13000409979 13000409978 13000409977 13000409976 13000409975 13000409974 13000409973 13000409972 13000409971 13000409970 13000409969 13000409968 13000409967 13000409966 13000409965 13000409964 13000409963 13000409962 13000409961 13000409960 13000409959 13000409958 13000409957 13000409956 13000409955 13000409954 13000409953 13000409952 13000409951 13000409950 13000409949 13000409948 13000409947 13000409946 13000409945 13000409944 13000409943 13000409942 13000409941 13000409940 13000409939 13000409938 13000409937 13000409936 13000409935 13000409934 13000409933 13000409932 13000409931 13000409930 13000409929 13000409928 13000409927 13000409926 13000409925 13000409924 13000409923 13000409922 13000409921 13000409920 13000409919 13000409918 13000409917 13000409916 13000409915 13000409914 13000409913 13000409912 13000409911 13000409910 13000409909 13000409908 13000409907 13000409906 13000409905 13000409904 13000409903 13000409902 13000409901 13000409900 13000409899 13000409898 13000409897 13000409896 13000409895 13000409894 13000409893 13000409892 13000409891 13000409890 13000409889 13000409888 13000409887 13000409886 13000409885 13000409884 13000409883 13000409882 13000409881 13000409880 13000409879 13000409878 `
// let arrP = str.split(' ')

// let ind = 1
// for (let i = 0; i < arrP.length; i++) {
//     let username = arrP[i]
//     let password = md5(123)
//     let id = Date.now() + 'note' + parseInt(Math.random()*1000000)
//     ind = ind === 7 ? 1 : ind
//     let icon = `p${ind}.jpg`
//     ind++
// userModel.create({
//     id,
//     username,
//     password,
//     icon,
// }).then((data)=>{
//     console.log('插入成功：',data); 
// }).catch((err)=>{
//     console.log('插入失败：',err);
// })
// }



// const list = ['数码', '影视', '体育', '校园', '亲子', '科学', '动漫', '游戏', '汽车', '旅行', '职场', '宠物', '女权', '安全', '战争', '名著']
// for (let i = 0; i < list.length; i++) {
//     const id = i
//     const title = list[i]
//     const img = `/p${i}.jpg`
//     subareaModel.create({
//         id,
//         title,
//         img
//     }).then((data)=>{
//         console.log('插入成功：',data); 
//     }).catch((err)=>{
//         console.log('插入失败：',err);
//     })
// }
