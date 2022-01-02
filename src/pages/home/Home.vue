<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <icons :list="iconList"></icons>
    <home-recommend :list="recommendList"></home-recommend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header.vue";
import HomeSwiper from "./components/Swiper.vue";
import Icons from "./components/Icons.vue";
import HomeRecommend from "./components/Recommend.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    Icons,
    HomeRecommend
  },
  data() {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      recommendList: []
    };
  },
  methods: {
    getHomeInfo() {
      axios.get("./api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.city = data.city;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
      }
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>

<style lang="stylus" scoped>
.home {
  font-size: 50px;
}
</style>
