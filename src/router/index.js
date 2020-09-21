import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'

// 2-3.懒加载
const Home = () => import('@/views/home/Home')
const Cart = () => import('@/views/cart/Cart')
const Category = () => import('@/views/category/Category')
const Profile = () => import('@/views/profile/Profile')


/////////////// 行不通
// // 1.安装插件
// Vue.use(VueRouter)

// // 2-1.创建路由对象
// const router = new VueRouter({
//   mode: 'history',
//   routes
// })
// // 2-2.创建routes，配置映射关系
// const routes = [
//   {
//     path: '',
//     redirect: '/home'
//   },
//   {
//     path: '/home',
//     component: Home
//   },
//   {
//     path: '/cart',
//     component: Cart
//   },
//   {
//     path: '/category',
//     component: Category
//   },
//   {
//     path: '/profile',
//     component: Profile
//   }
// ]

// // 3.导出到main.js挂载
// export default router



/////////////// 行
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component: Home
    },
    {
      path:'/cart',
      component: Cart
    },
    {
      path:'/category',
      component: Category
    },
    {
      path:'/profile',
      component: Profile
    }
  ]
})
