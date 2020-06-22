import axios from 'axios'

let baseurl = 'http://182.92.241.251:4000/api'
axios.defaults.baseURL = baseurl;
// 允许携带cookie
axios.defaults.withCredentials = true
axios.defaults.headers['token'] = window.localStorage.getItem('token') || null;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export {
    axios,
    baseurl
}