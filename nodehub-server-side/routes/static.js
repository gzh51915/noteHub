const Router = require('express').Router()
const path = require('path')

// 开放静态资源
// http://127.0.0.1:4444/api/source/icon/p1.jpg
Router.get('/icon/:p', (req, res) => {
    res.sendFile(path.join(__dirname, `../static/icons/${req.params.p}`))
})
// http://127.0.0.1:4444/api/source/subareaImages/p1.jpg
Router.get('/subareaImages/:p', (req, res) => {
    res.sendFile(path.join(__dirname, `../static/subareaImages/${req.params.p}`))
})
Router.get('/questionImages/:p', (req, res) => {
    res.sendFile(path.join(__dirname, `../static/questionImages/${req.params.p}`))
})
Router.get('/banners/:p', (req, res) => {
    res.sendFile(path.join(__dirname, `../static/banners/${req.params.p}`))
})


module.exports = Router