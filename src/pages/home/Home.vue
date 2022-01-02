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
import { mapState } from "vuex";

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
      swiperList: [],
      iconList: [],
      recommendList: [],
      lastCity: ""
    };
  },
  methods: {
    getHomeInfo() {
      axios
        .get("./api/index.json?city=" + this.city)
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
      }
    }
  },
  mounted() {
    this.getHomeInfo();
    this.lastCity = this.city;
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.getHomeInfo();
      this.lastCity = this.city;
    }
  },
  computed: {
    ...mapState(["city"])
  }
};
</script>

<style lang="stylus" scoped></style>
