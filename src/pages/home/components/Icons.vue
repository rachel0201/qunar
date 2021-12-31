<template>
  <div class="icons">
    <swiper :options="swiperOption">
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
  data() {
    return {
      swiperOption: {
        loop: true
      },
      iconList: [
        {
          id: 1,
          icon: "\ue8e9",
          desc: "Hotel"
        },
        {
          id: 2,
          icon: "\uf841",
          desc: "Flights"
        },
        {
          id: 3,
          icon: "\ue615",
          desc: "Holidays"
        },
        {
          id: 4,
          icon: "\ue64d",
          desc: "Landmark"
        },
        {
          id: 5,
          icon: "\ue61b",
          desc: "Cars"
        },
        {
          id: 6,
          icon: "\ue604",
          desc: "Day trip"
        },
        {
          id: 7,
          icon: "\ue623",
          desc: "Experience"
        },
        {
          id: 8,
          icon: "\ue655",
          desc: "Plans"
        },
        {
          id: 9,
          icon: "\ue740",
          desc: "Credict"
        },
        {
          id: 10,
          icon: "\ue611",
          desc: "Pay Later"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
.icons >>> .swiper-container
  height:0
  padding-bottom: 50%
.icon
  position:relative
  float:left
  width: 25%
  padding-bottom: 25%
  height:0
  margin-top: 0.22rem
  margin-bottom: -0.66rem
  .iconfont
    font-size:1rem
    top:0
    left 0
    right: 0
    bottom: .44rem
    padding-left: 0.44rem
  .des
    text-align: center
</style>
