import axios from 'axios'
import { getToken } from './auth';

const instance = axios.create({
    baseURL:'http://10.3.135.11:4444/api',
    timeout:5000,
})



instance.interceptors.request.use(
    function (config) {
    // 在发送请求之前做些什么
    // config.headers["authorization"] = "Bearer " + getToken();
    axios.defaults.headers.common["token"] =  getToken();
    //console.log(config)
    return config;
  }, function (error) {
    // 对请求错误做些什么
  });

// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export function get(url,params){
    return instance.get(url,{
        params
    })
}



export function post(url,data){
  return instance.post(url,data)
}

export function put(url,data){
    return instance.put(url,data)
}

export function del(url,data){
    return instance.delete(url,data)
}