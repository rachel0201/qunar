<template>
  <div>
    <div class="title">Weekend Tour</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="image-wrapper">
          <img class="item-img" alt="" :src="item.img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <a class="read-more">Read More</a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
//stars

export default {
  name: "WeekendTour",
  data() {
    return {
      weekendList: [
        {
          id: 1,
          img:
            "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          title: "Bruny Island Day Tour",
          desc:
            "Explore Bruny Island on this full-day trip from Hobart. Travel by ferry to the island, look out for seals and penguins as you sail. On the island, admire natural sights like The Neck and Truganini Lookout, and take leisurely walks to look for wallabies and other local wildlife. Discover the island’s food scene with tastings of cheese, chocolate, cider, and oysters, plus a lunch of local produce. An exclusive group tour of the historic Cape Bruny Lighthouse completes your experience.",
          score: 2.3,
          review: "1,234"
        },
        {
          id: 2,
          img:
            "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
          title: "Bruny Island Day Tour",
          desc:
            "Explore Bruny Island on this full-day trip from Hobart. Travel by ferry to the island, look out for seals and penguins as you sail. On the island, admire natural sights like The Neck and Truganini Lookout, and take leisurely walks to look for wallabies and other local wildlife. Discover the island’s food scene with tastings of cheese, chocolate, cider, and oysters, plus a lunch of local produce. An exclusive group tour of the historic Cape Bruny Lighthouse completes your experience.",
          score: 3.7,
          review: "123"
        },
        {
          id: 3,
          img:
            "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
          title: "Bruny Island Day Tour",
          desc:
            "Explore Bruny Island on this full-day trip from Hobart. Travel by ferry to the island, look out for seals and penguins as you sail. On the island, admire natural sights like The Neck and Truganini Lookout, and take leisurely walks to look for wallabies and other local wildlife. Discover the island’s food scene with tastings of cheese, chocolate, cider, and oysters, plus a lunch of local produce. An exclusive group tour of the historic Cape Bruny Lighthouse completes your experience.",
          score: 2.3,
          review: "123"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  @import '~styles/mixins.styl'
.title
  line-height 0.6rem
  background:#eee
  text-indent: 0.2rem
  font-size:0.4rem
  padding:0.1rem
.item
  overflow: hidden
  .image-wrapper
    overflow:hidden
    height:0
    width:100%
    padding-bottom:33.44%
    .item-img
      width: 100%
    .item-info
      padding 0.1rem
      .item-title
        line-height: .54rem
        font-size: .32rem
        margin-bottom: 0.1rem
        ellipsis()
      .item-desc
        line-height:0.3rem
        font-size:0.2rem
        color:#ccc
        ellipsis()
</style>
