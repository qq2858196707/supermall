// 请求数据 => 回调到外
import axios from 'axios'

// AxiosPromise：本身就返回promise
export function request(config) {
    // 1.创建实例
    const instance1 = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    // 2.axios拦截器
    // 全局拦截：axios.interceptors
    // 局部拦截(实例)：instance1.interceptors
    
    // 2.1请求拦截
    instance1.interceptors.request.use(reqsuccess =>{
      return reqsuccess
    },err =>{
      // console.log(err);
    })

    // 2.2响应拦截
    instance1.interceptors.response.use(res =>{
      return res.data
    },err =>{
      // console.log(err);
    })

    // 3.发送网络请求，axios中promise返回
    return instance1(config)
}