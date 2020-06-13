import { axios } from 'axios'

const baseurl = 'http://127.0.0.1:3005/api'
axios.defaults.baseURL = baseurl;
axios.defaults.headers.common['Authorization'] = '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export default axios