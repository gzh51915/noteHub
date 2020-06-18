import axios from 'axios'

let baseurl = 'http://10.3.135.11:4444/api'
axios.defaults.baseURL = baseurl;
// 允许携带cookie
axios.defaults.withCredentials = true
axios.defaults.headers['token'] = window.localStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export {
    axios,
    baseurl
}