<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showIcon">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <i class="iconfont">{{ item.icon }}</i>
          <p class="des">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 10);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
    showIcon() {
      return this.list.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  @import '~styles/mixins.styl'
.icons >>> .swiper-container
  height:0
  padding-bottom: 40%
.icon
  position:relative
  float:left
  width: 20%
  padding-bottom: 20%
  height:0
  margin-top: 0.22rem
  margin-bottom: -0.66rem
  .iconfont
    font-size:0.8rem
    top:0
    left 0
    right: 0
    bottom: .44rem
    padding-left: 0.44rem
  .des
    text-align: center
    color:$darkTextColor
    ellipsis()
</style>
