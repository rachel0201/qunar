<template>
  <div>
    <div class="title">Get Inspired</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img class="item-img" alt="" v-bind:src="item.img" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <div class="review">
            <img class="star" alt="" src="../../../img/star-on.png" />
            <img class="star" alt="" src="../../../img/star-on.png" />
            <img class="star" alt="" src="../../../img/star-on.png" />
            <img class="star" alt="" src="../../../img/star-half.png" />
            <img class="star" alt="" src="../../../img/star-off.png" />
            <p class="review-num">{{ item.review }} Reviews</p>
          </div>
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
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: 1,
          img: require("../../../img/item3.jpg"),
          title: "Bruny Island Day Tour",
          desc:
            "Explore Bruny Island on this full-day trip from Hobart. Travel by ferry to the island, look out for seals and penguins as you sail. On the island, admire natural sights like The Neck and Truganini Lookout, and take leisurely walks to look for wallabies and other local wildlife. Discover the island’s food scene with tastings of cheese, chocolate, cider, and oysters, plus a lunch of local produce. An exclusive group tour of the historic Cape Bruny Lighthouse completes your experience.",
          score: 2.3,
          review: "1,234"
        },
        {
          id: 2,
          img: require("../../../img/item4.jpg"),
          title: "Bruny Island Day Tour",
          desc:
            "Explore Bruny Island on this full-day trip from Hobart. Travel by ferry to the island, look out for seals and penguins as you sail. On the island, admire natural sights like The Neck and Truganini Lookout, and take leisurely walks to look for wallabies and other local wildlife. Discover the island’s food scene with tastings of cheese, chocolate, cider, and oysters, plus a lunch of local produce. An exclusive group tour of the historic Cape Bruny Lighthouse completes your experience.",
          score: 3.7,
          review: "123"
        },
        {
          id: 3,
          img: require("../../../img/item3.jpg"),
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
  margin-top: -0.6rem
  text-indent: 0.2rem
  font-size:0.4rem
  padding:0.1rem
.item
  overflow: hidden
  display:flex
  height:1.9rem
  .item-img
    width: 2.4rem
    height: 1.7rem
    padding:.1rem
    border-radius: 0.1rem
  .item-info
    flex:1
    padding 0.1rem
    min-width:0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      margin-top:0.36rem
      line-height:0.4rem
      font-size:0.2rem
      color:#ccc
      ellipsis()
    .read-more
      font-size:0.2rem
    .review
      font-size:0.2rem
      width:10rem
      height:0
      background:Red
      .star
        width:0.2rem
        height:0.2rem
        position:relative
        float:left
      .review-num
        position:relative
        float:left
        padding-left:0.1rem
</style>
