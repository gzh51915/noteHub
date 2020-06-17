
/*
包含n个action creator，异步action或同步action
*/
import {axios} from '@/api/index.js'
import { GTE_SUBAREA } from "./actions-type"
//同步action
export const getSubarea = (params) => ({ type: GTE_SUBAREA, data: params })
// 异步action
export const getSubareaAsync = (path) => {
    // thunk内部携带参数dispatch
    return async (dispatch) => {
        const { data: res } = await axios.get(path)
        // 调用同步action
        const action = getSubarea(res.data)
        dispatch(action)
    }
}
