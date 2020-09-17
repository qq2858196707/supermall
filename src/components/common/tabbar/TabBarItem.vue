<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!-- <img src="..\..\assets\img\tabbar\homeico.png" alt="">
    <div>首页</div>-->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive() {
      // /home => item(/home) = true
      // /home => item(/category) = false
      // /home => item(/cart) = false
      // /home => item(/profile) = false
      // 返回true和false，
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      // 看是否活跃，活跃将颜色使用属性值。
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  props: {
    // 不能写死，所以传动态给字符串类型的地址
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    itemClick() {
      // console.log('监听按钮');
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>