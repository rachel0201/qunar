<template>
  <div class="wrapper">
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img class="swiper-img" alt="" src="../../../img/img1.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" alt="" src="../../../img/img2.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" alt="" src="../../../img/img3.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" alt="" src="../../../img/img4.jpg" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper>>>.swiper-pagination-bullet-active
  background:white !important
.wrapper
  overflow: hidden
  width:100%
  height:0
  padding-bottom:41.32%
  background: #eee
  .swiper-img
    width:100%
</style>
