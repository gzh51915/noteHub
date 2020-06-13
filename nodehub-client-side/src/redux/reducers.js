/*
包含n个reducer函数，根据老的state和指定的action返回新的state
*/
import { combineReducers } from 'redux'
//xxx的状态
const initXXX = {}//xxx初始数据
function xxx(state = initXXX, action) {

}
//yyy的状态
const initYYY = {}//yyy的初始数据
function yyy(state, action) {

}
export default combineReducers({
    xxx,
    yyy
})

//相当于 state：{ xxx:{},yyy:{}  }