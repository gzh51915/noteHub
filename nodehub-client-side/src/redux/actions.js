
/*
包含n个action creator，异步action或同步action
*/
import { axios } from '../api/index'
import { GTE_SUBAREA, USER_MSG } from "./actions-type"
// 分区- 同步action 
export const getSubarea = (data) => ({ type: GTE_SUBAREA, data })
// 分区- 异步action
export const getSubareaAsync = (path) => {
    console.log(path)
    // thunk内部携带参数dispatch
    return async (dispatch) => {
        const { data: res } = await axios.get(path)
        // 调用同步action
        const action = getSubarea(res.data)
        dispatch(action)
    }
}


// 登录- 同步action
export const getUserMsg = (data) => ({
    type: USER_MSG,
    data
})
// 登录- 异步action
export const getUserMsgAsync = (path, data) => {
    // thunk内部携带参数dispatch
    return async (dispatch) => {
        const { data: res } = await axios.post(path, data)
        // 调用同步action
        const action = getUserMsg(res)
        dispatch(action)
    }
}
