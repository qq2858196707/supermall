<template>
  <tab-bar>
      <!-- path和:path,当使用变量就用冒号 -->
      <!-- 外部 -->
      <tab-bar-item path="/home">
        <!-- 动态 -->
        <img slot="item-icon" src="~assets/img/tabbar/homeico.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/clickhomeico.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/classifyico.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/clickclassifyicon.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/shoppingico.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/clickshoppingicon.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/userico.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/clickusericon.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
      <!-- 可以继续添加，自动布局 -->
      <!-- <tab-bar-item>
        <img slot="item-icon" src=".\.\assets\img\tabbar\userico.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item> -->
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/Tabbar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name:'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
