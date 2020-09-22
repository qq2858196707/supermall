import {request} from './request';

export function getHomeMultidata() {
  // 返回的是request.js的promise函数
  return request ({
    url: '/home/multidata'
  })
}
