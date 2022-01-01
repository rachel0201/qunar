<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <icons></icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header.vue";
import HomeSwiper from "./components/Swiper.vue";
import Icons from "./components/Icons.vue";
import HomeRecommend from "./components/Recommend.vue";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    Icons,
    HomeRecommend
  }
};
</script>

<style>
.home {
  font-size: 50px;
}
</style>
