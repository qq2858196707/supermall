<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']" />

    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

import { 
  getHomeMultidata, 
  getHomeGoods 
  } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
  },
  // 拿到请求过来的数据后，保存起来
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  // 首页创建完了发送网络请求
  created() {
    // 1.请求多个数据 (异步)
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    // 数据封装
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // this往上找的，created的this是组件中的this
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // 商品数据封装，type方便使用多个
      // 方法复用时，可能不是第一页，所以要原页码+1
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        // 将数据类似于遍历塞入
        this.goods[type].list.push(...res.data.list)
        // 有了数据之后页码+1
        this.goods[type].page += 1
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: white;

  /**原生滚动 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

/**滑动置顶，下滑消失 */
.tab-control {
  /**自动更改flex和sticky（移动端支持） */
  position: sticky;
  top: 44px;
}
</style>