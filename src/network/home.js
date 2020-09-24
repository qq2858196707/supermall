import {request} from './request';

export function getHomeMultidata() {
  // 返回的是request.js的promise函数
  return request ({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}