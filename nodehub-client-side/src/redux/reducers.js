/*
包含n个reducer函数，根据老的state和指定的action返回新的state
*/
import { combineReducers } from 'redux'
import { GTE_SUBAREA } from "./actions-type"
//xxx的状态事件处理
const initState = []//xxx初始数据
function getSubarea(state = initState, action) {
    switch (action.type) {
        case GTE_SUBAREA:
            return action.data.list
        default:
            return state 
    }
}

export default combineReducers({
    getSubarea
})

