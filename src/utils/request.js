import axios from "axios";
const Server = axios.create({
  baseURL: "/api",
  timeout: 1000 * 30
})


//请求拦截
Server.interceptors.request(config => {
  return config
}, err => {
  console.error(err)
})


// 响应拦截
Server.interceptors.response(config => {
  return config
}, err => {})

return Server

