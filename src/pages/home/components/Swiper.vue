<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" alt="" :src="item.imgUrl" />
      </swiper-slide>
      <div class="" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper>>>.swiper-pagination-bullet-active
  background:red !important
.wrapper
  overflow: hidden
  width:100%
  height:0
  padding-bottom:31.25%
  background: #eee
  .swiper-img
    width:100%
  .swiper-pagination
    margin-bottom:1rem
</style>
