// 生成token
const jwt = require('jsonwebtoken')
// token秘钥
const SECRET = 'zengshaogong666'
// token持续时间（秒）
const dur = 60 * 60 * 24 * 7
//对用户id进行签名, 第一个参数 要进行签名的值，第二个参数 秘钥（随便是啥）,第三个参数-token持续时间
const setToken = function (data) {
    return jwt.sign({
        id: String(data)
    }, SECRET, {
        expiresIn: dur // 过期时间,秒
    })
}
// 判断token是否过期,如果未过期,返回解密结果,第一个值：前端发送的token,第二个值：后端定义的秘钥 ,第三个值：回调函数，判断结果
const isTokenLate = function (data) {
    return jwt.verify(data, SECRET, (err, decoded) => {
        if (err) return false
        else return decoded //返回值  { id: '5e3ec3dadae0d7329c6d4d25', iat: 1581861826, exp: 1581948226 }            
    })
}
module.exports = {
    setToken,
    isTokenLate
}


