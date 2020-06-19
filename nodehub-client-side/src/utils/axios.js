import Axios from "axios"
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