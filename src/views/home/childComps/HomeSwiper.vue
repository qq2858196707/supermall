<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
// import Swiper from '@/components/common/swiper/Swiper'
// import SwiperItem from '@/components/common/swiper/SwiperItem'
// 因为index导出了对象，所以直接使用
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
</style>