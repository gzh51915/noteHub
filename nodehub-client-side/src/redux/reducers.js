/*
包含n个reducer函数，根据老的state和指定的action返回新的state
*/
import { combineReducers } from 'redux'
import { XXXX } from "./actions-type"
//xxx的状态事件处理
const initXXX = {}//xxx初始数据
function xxx(state = initXXX, action) {
    switch (action.type) {
        case XXXX:
            return { ...action.data }
        default:
            return { ...state }
    }
}
//yyy的状态事件处理
const initYYY = {}//yyy的初始数据
function yyy(state, action) {
    switch (action.type) {
        case XXXX:
            return { ...action.data }
        default:
            return { ...state }
    }
}
export default combineReducers({
    xxx,
    yyy
})

//相当于 state：{ xxx:{},yyy:{}  }