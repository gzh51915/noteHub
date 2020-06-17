
/**
 * 查找单条数据封装
 * @param {String} model 查询的文档 
 * @param {Object} params 查询的参数
 */
function findOneFn(model, params) {
    return new Promise((resolve, reject) => {
        model.findOne(params, (err, doc) => {
            if (err) {
                reject(err)
            } else {
                resolve(doc)
            }
        })
    })
}

/**
 * 全部查询封装
 * page : 页码，
 * pagesize ：每页显示条数
 */
function findAllFn(model, page = 0, pagesize = 50) {
    return new Promise((resolve, reject) => {
        model.find({}, (err, doc) => {
            if (err) reject(err)
            else resolve(doc)
        }).limit(pagesize).skip(page * pagesize)
    })
}
/**
 * 条件查询
 * @param {String} model 
 * @param {Object} params 
 */
function conditionQueryFn(model, params = {}) {
    return new Promise((resolve, reject) => {
        model.find(params, (err, doc) => {
            if (err) reject(err)
            else resolve(doc)
        })
    })
}

// 删除一个
function deleteOneFn(model, id) {
    return new Promise((resolve, reject) => {
        model.deleteOne(id, (err,doc) => {
            if (err) reject(err)
            else resolve(doc)
        })
    })
}

// 总量
function findCountFn(model) {
    return new Promise((resolve, reject) => {
        model.find({}, (err, doc) => {
            if (err) reject(err)
            else resolve(doc)
        }).count()
    })
}



module.exports = {
    findOneFn,
    findAllFn,
    findCountFn,
    conditionQueryFn,
    deleteOneFn
}