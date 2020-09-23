<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import {getHomeMultidata} from '@/network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  // 拿到请求过来的数据后，保存起来
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  // 首页创建完了发送网络请求
  created(){
    // 1.请求多个数据 (异步)
    getHomeMultidata().then(res =>{
      // this往上找的，created的this是组件中的this
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>