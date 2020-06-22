import Axios from "axios"
Axios.defaults.baseURL = "http://182.92.241.251:4000/api"
export default function axios(url, data = {}, type = "GET") {
    if (type === "GET") {
        var dataStr = ""
        Object.keys(data).forEach((key) => {
            dataStr += key + "=" + data[key] + "&"
        })
        if (dataStr) {
            dataStr = dataStr.substring(0, dataStr.length - 1)
        }
        return Axios.get(url + "?" + dataStr)
    } else {
        return Axios.post(url, data)
    }
}