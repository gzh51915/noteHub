/*
包含n个reducer函数，根据老的state和指定的action返回新的state
*/
import { combineReducers } from 'redux'
import { GTE_SUBAREA, USER_MSG } from "./actions-type"
//分区处理
const init_subarea = []
function getSubarea(state = init_subarea, action) {
    switch (action.type) {
        case GTE_SUBAREA:
            return action.data.list
        default:
            return state
    }
}
// 登录处理
const init_user = {}
function getUserMsg(state = init_user, action) {
    switch (action.type) {
        case USER_MSG:
            return action.data
        default:
            return state
    }
}

export default combineReducers({
    getSubarea, getUserMsg
})

