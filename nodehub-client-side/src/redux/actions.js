/*
包含n个action creator，异步action或同步action
*/
import { XXXX, YYYY } from "./actions-type"
//同步action
export const actionX = (params) => ({ type: XXXX, data: params })
export const actionY = (params) => ({ type: YYYY, data: params })
//异步action

export const handleX = (params) => {
    /* 
    参数处理操作
    */
    return async (dispatch) => {

        dispatch(actionX(params))//传入处理好的数据
    }
    //派发同步action
}

export const handleY = (paramYs) => {
    /* 
    参数处理操作
    */
    return async (dispatch) => {

        dispatch(actionY(params))//传入处理好的数据
    }
    //派发同步action
}
